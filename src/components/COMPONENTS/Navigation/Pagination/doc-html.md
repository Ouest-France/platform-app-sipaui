# Pagination / Pagination

Le composant de pagination permet de présenter aux lecteurs, mais aussi, *et surtout aux moteurs de recherche*, toutes les pages de contenu accessibles à partir de la page en cours. Ce nombre de pages pouvant être très important, il faut proposer un système de navigation qui permet d’aller sur n’importe quelle page en un minimum de liens. **Toute la complexité de ce composant est dans la construction des listes de liens.** Pour des raisons techniques évidentes, cette construction est à faire au niveau de la page et non du composant. **Elle ne peut donc être portée par SipaUI**. De fait, ce composant n’intègre pas *d’intelligence*, il s’agit juste de HTML et de CSS, la construction vous incombe donc. Pour cela, référez-vous au document de design ou aux exemples ci-dessous.

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Icons**.
- composant **Helpers**.

</div>

## Principe général

La pagination est composée d’une balise `<nav>` (puisqu’il s’agit d’un système de navigation) contenant 2 listes imbriquées (`<ul>` et `<li>`), et de **2 boutons** d’ouverture et fermeture de la liste de pages (`<button type="button">`). La première liste contient les éléments de navigation de premier niveau (page 1, précédente, page en cours, suivante et dernière page). La seconde liste contient les accès vers les autres pages. Le bouton sous ces listes permet de simplifier la fermeture de la liste de pages en permettant le clic à l’extérieur de cette liste.

Architecture de base&nbsp;:
``` html
	<nav>
		<ul>
			<li>1</li>
			<li>précédent</li>
			<li>
				<button type="button">1</button>
				<ul>
					<li class="su-page-active">1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
					<li>6</li>
					<li>…</li>
				</ul>
			</li>
			<li>suivant</li>
			<li>100</li>
		</ul>
		<button type="button">Fermer la liste de pages</button>
	</nav>
```

## Construction concrète

Exemple de code complet&nbsp;:
``` html
	<nav class="su-pagination su-first-page">
		<ul>
			<li><span>1</span></li>
			<li><span><i class="su-icon">précédent</i></span></li>
			<li class="su-page-select">
				<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1</button>
				<ul class="su-pages-list">
					<li class="su-page-active">1</li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">6</a></li>
					<li><a href="#">7</a></li>
					<li><a href="#">8</a></li>
					<li class="su-separator"><a href="#">9</a></li>
					<li><a href="#">10</a></li>
					<li><a href="#">20</a></li>
					<li><a href="#">30</a></li>
				</ul>
			</li>
			<li><a href="#"><i class="su-icon">suivant</i></a></li>
			<li><a href="#">30</a></li>
		</ul>
		<button type="button" class="su-close" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in","force":0}'>Fermer la liste de pages</button>
	</nav>
```

<div class="sipaui">
	<nav class="surcharge-storybook su-pagination su-first-page">
		<ul>
			<li><span>1</span></li>
			<li><span><i class="su-icon">précédent</i></span></li>
			<li class="su-page-select">
				<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1</button>
				<ul class="surcharge-storybook su-pages-list">
					<li class="su-page-active">1</li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">6</a></li>
					<li><a href="#">7</a></li>
					<li><a href="#">8</a></li>
					<li class="su-separator"><a href="#">9</a></li>
					<li><a href="#">10</a></li>
					<li><a href="#">20</a></li>
					<li><a href="#">30</a></li>
				</ul>
			</li>
			<li><a href="#"><i class="su-icon">suivant</i></a></li>
			<li><a href="#">30</a></li>
		</ul>
		<button type="button" class="su-close" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in","force":0}'>Fermer la liste de pages</button>
	</nav>
</div>

### Explications

La classe `su-pagination` sur `<nav>` est la *classe d’identification* du composant. Sur cette même balise peuvent être ajoutées les classes `su-first-page` et `su-last-page` quand l’utilisateur est sur **la première**, **la dernière page** ou qu’il n’y a **qu’une page**. Cela permet de rendre les 2 premiers ou les 2 derniers «&nbsp;boutons&nbsp;», ainsi que le sélecteur de page, visuellement inactifs en fonction des cas (cf. plus bas).

La navigation de base comporte les liens vers la *première page*, la *page précédente*, le bouton d’accès à la *liste de pages*, la *page suivante* et la *dernière page*. Les boutons pour la page précédente et la page suivante utilisent la fonte d’icônes pour afficher les chevrons grâce à la classe `su-icon`.

`su-page-select` sert à identifier la zone qui contient le *bouton d’affichage* de la liste des pages proposées et cette *liste*. Sur le bouton, on utilise un `data-sutoggleclass` pour afficher / masquer la liste grâce à la classe `su-pages-list-in`. Aucun paramètre particulier à changer dans cet attribut. Par ailleurs, le bouton comporte un `aria-label` pour l’accessibilité, ainsi qu’un `<span class="su-visually-hidden">`, aussi pour l’accessibilité, suivi du numéro de la page en cours.

La classe `su-pages-list` est pour la *liste* proprement dite. **Pour construire la liste, se référer à la partie «&nbsp;Variations en fonction de la position dans le nombre de pages&nbsp;» ci-dessous.** Dans cette liste, vous devez positionner la classe `su-page-active` pour identifier la *page en cours de lecture* et supprimer le lien sur cette page et enfin ajouter la classe `su-separator` sur les pages de fin de zone logique (cf. plus bas).

Enfin, sous cette navigation, se trouve un *bouton pour faciliter la fermeture du volet* de liste de pages. Ce bouton (qui fait toute la taille de la page, mais est invisible) possède la classe `su-close` et un `data-sutoggleclass` qu’il n’est pas nécessaire de modifier. 

### Variations en fonction du nombre de pages totales

#### Cas avec 1 page

S’il n’y a qu’une page, les boutons de navigations et la liste de pages sont inutiles. Ils sont donc désactivés. Pour cela, par rapport au code standard, il faut **enlever *le JS d’affichage de la liste*, *la liste* et *le bouton de fermeture de la liste*, remplacer *les liens* `<a>` par des `<span>`** et **ajouter *disabled* sur le bouton**.

``` html
	<nav class="su-pagination su-first-page su-last-page">
			<ul>
				<li><span>1</span></li>
				<li><span><i class="su-icon">précédent</i></span></li>
				<li class="su-page-select">
					<button type="button" disabled><span class="su-visually-hidden">Page en cours :</span>1</button>
				</li>
				<li><span><i class="su-icon">suivant</i></span></li>
				<li><span>1</span></li>
			</ul>
	</nav>
```

<div class="sipaui">
	<nav class="surcharge-storybook su-pagination su-first-page su-last-page">
		<ul>
			<li><span>1</span></li>
			<li><span><i class="su-icon">précédent</i></span></li>
			<li class="su-page-select">
				<button type="button" disabled><span class="su-visually-hidden">Page en cours :</span>1</button>
			</li>
			<li><span><i class="su-icon">suivant</i></span></li>
			<li><span>1</span></li>
		</ul>
	</nav>
</div>

*N.&nbsp;B.&nbsp;: Bien que **non souhaitable** (notamment pour des questions de SEO), le composant permet de s’affranchir de l’obligation de passer les liens `<a>` en `<span>` s’il y a impossibilité technique. Dans ce cas, il faudrait quand même ajouter l’attribut `aria-disabled="true"` sur les `<a>` inactifs pour rendre ces liens inactifs aussi pour les navigateurs textes, vocaux…*

#### Cas avec 7 pages

Quand il y a un faible nombre de pages (inférieur au nombre maximum de pages affichables dans le volet ouvert), il n’y a pas de scroll ni de dégradé indiquant qu’il y a une suite en bas de liste.

``` html
	<nav class="su-pagination su-first-page">
		<ul>
			<li><span>1</span></li>
			<li><span><i class="su-icon">précédent</i></span></li>
			<li class="su-page-select">
				<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1</button>
				<ul class="su-pages-list">
					<li class="su-page-active">1</li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">6</a></li>
					<li><a href="#">7</a></li>
				</ul>
			</li>
			<li><a href="#"><i class="su-icon">suivant</i></a></li>
			<li><a href="#">7</a></li>
		</ul>
		<button type="button" class="su-close" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in","force":0}'>Fermer la liste de pages</button>
	</nav>
```
<div class="sipaui">
	<nav class="surcharge-storybook su-pagination su-first-page">
		<ul>
			<li><span>1</span></li>
			<li><span><i class="su-icon">précédent</i></span></li>
			<li class="su-page-select">
				<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1</button>
				<ul class="surcharge-storybook su-pages-list">
					<li class="su-page-active">1</li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">6</a></li>
					<li><a href="#">7</a></li>
				</ul>
			</li>
			<li><a href="#"><i class="su-icon">suivant</i></a></li>
			<li><a href="#">7</a></li>
		</ul>
		<button type="button" class="su-close" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in","force":0}'>Fermer la liste de pages</button>
	</nav>
</div>

#### Cas avec 56 pages

Avec un nombre de pages supérieur à la capacité d’affichage du volet, le scroll et le dégradé sont apparus.

``` html
	<nav class="su-pagination su-first-page">
		<ul>
			<li><span>1</span></li>
			<li><span><i class="su-icon">précédent</i></span></li>
			<li class="su-page-select">
				<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1</button>
				<ul class="su-pages-list">
					<li class="su-page-active">1</li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">6</a></li>
					<li><a href="#">7</a></li>
					<li><a href="#">8</a></li>
					<li class="su-separator"><a href="#">9</a></li>
					<li><a href="#">10</a></li>
					<li><a href="#">20</a></li>
					<li><a href="#">30</a></li>
					<li><a href="#">40</a></li>
					<li><a href="#">50</a></li>
				</ul>
			</li>
			<li><a href="#"><i class="su-icon">suivant</i></a></li>
			<li><a href="#">56</a></li>
		</ul>
		<button type="button" class="su-close" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in","force":0}'>Fermer la liste de pages</button>
	</nav>
```

<div class="sipaui">
	<nav class="surcharge-storybook su-pagination su-first-page">
		<ul>
		    <li><span>1</span></li>
		    <li><span><i class="su-icon">précédent</i></span></li>
		    <li class="su-page-select">
		    	<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1</button>
		    	<ul class="surcharge-storybook su-pages-list">
				    <li class="su-page-active">1</li>
				    <li><a href="#">2</a></li>
				    <li><a href="#">3</a></li>
				    <li><a href="#">4</a></li>
				    <li><a href="#">5</a></li>
				    <li><a href="#">6</a></li>
				    <li><a href="#">7</a></li>
				    <li><a href="#">8</a></li>
				    <li class="su-separator"><a href="#">9</a></li>
				    <li><a href="#">10</a></li>
				    <li><a href="#">20</a></li>
				    <li><a href="#">30</a></li>
				    <li><a href="#">40</a></li>
				    <li><a href="#">50</a></li>
				</ul>
		    </li>
		    <li><a href="#"><i class="su-icon">suivant</i></a></li>
		    <li><a href="#">56</a></li>
		</ul>
		<button type="button" class="su-close" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in","force":0}'>Fermer la liste de pages</button>
	</nav>
</div>




### Variations en fonction de la position dans le nombre de pages

**La position de la page en cours de consultation détermine la construction de la liste de liens.** Cette construction doit suivre ces règles&nbsp;:
- On commence par lister les pages appartenant au même groupe d’unité que la page en cours (p.&nbsp;ex.&nbsp;: la page en cours est 36, on liste 30, 31, 32, 33, 34, 35, **36**, 37, 38 et 39).
- On n’affiche pas les pages précédant ce groupe.
- On liste ensuite les dizaines qui suivent jusqu'à la centaine (p.&nbsp;ex.&nbsp;: avec le même cas que ci-dessus, 40, 50, 60, 70, 80, 90).
- Ensuite, on continue avec la même logique avec les centaines et les milliers.
- Enfin, on met la classe `su-separator` sur la dernière page de chaque catégorie, excepté la dernière.

On obtient ainsi pour la page 36 sur 2125 la liste suivante&nbsp;: 30, 31, 32, 33, 34, 35, **36**, 37, 38 et 39, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000.

#### Cas en page 1 sur 2318 (première page)

Quand on est sur la 1<sup>re</sup> page, **les 2 premiers «&nbsp;boutons&nbsp;» doivent être inactifs**. Pour cela, comme expliqué plus haut dans la partie «&nbsp;Construction concrète&nbsp;», **on ajoute la classe `su-first-page`** sur le composant et **on remplace les `<a>` par des `<span>`**. 

``` html
	<nav class="su-pagination su-first-page">
		<ul>
			<li><span>1</span></li>
			<li><span><i class="su-icon">précédent</i></span></li>
			<li class="su-page-select">
				<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1</button>
				<ul class="su-pages-list">
					<li class="su-page-active">1</li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">6</a></li>
					<li><a href="#">7</a></li>
					<li><a href="#">8</a></li>
					<li class="su-separator"><a href="#">9</a></li>
					<li><a href="#">10</a></li>
					<li><a href="#">20</a></li>
					<li><a href="#">30</a></li>
					<li><a href="#">40</a></li>
					<li><a href="#">50</a></li>
					<li><a href="#">60</a></li>
					<li><a href="#">70</a></li>
					<li><a href="#">80</a></li>
					<li class="su-separator"><a href="#">90</a></li>
					<li><a href="#">100</a></li>
					<li><a href="#">200</a></li>
					<li><a href="#">300</a></li>
					<li><a href="#">400</a></li>
					<li><a href="#">500</a></li>
					<li><a href="#">600</a></li>
					<li><a href="#">700</a></li>
					<li><a href="#">800</a></li>
					<li class="su-separator"><a href="#">900</a></li>
					<li><a href="#">1000</a></li>
					<li><a href="#">2000</a></li>
				</ul>
			</li>
			<li><a href="#"><i class="su-icon">suivant</i></a></li>
			<li><a href="#">2318</a></li>
		</ul>
		<button type="button" class="su-close" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in","force":0}'>Fermer la liste de pages</button>
	</nav>
```

<div class="sipaui">
	<nav class="surcharge-storybook su-pagination su-first-page">
		<ul>
			<li><span>1</span></li>
			<li><span><i class="su-icon">précédent</i></span></li>
			<li class="su-page-select">
				<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1</button>
				<ul class="surcharge-storybook su-pages-list">
					<li class="su-page-active">1</li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">6</a></li>
					<li><a href="#">7</a></li>
					<li><a href="#">8</a></li>
					<li class="su-separator"><a href="#">9</a></li>
					<li><a href="#">10</a></li>
					<li><a href="#">20</a></li>
					<li><a href="#">30</a></li>
					<li><a href="#">40</a></li>
					<li><a href="#">50</a></li>
					<li><a href="#">60</a></li>
					<li><a href="#">70</a></li>
					<li><a href="#">80</a></li>
					<li class="su-separator"><a href="#">90</a></li>
					<li><a href="#">100</a></li>
					<li><a href="#">200</a></li>
					<li><a href="#">300</a></li>
					<li><a href="#">400</a></li>
					<li><a href="#">500</a></li>
					<li><a href="#">600</a></li>
					<li><a href="#">700</a></li>
					<li><a href="#">800</a></li>
					<li class="su-separator"><a href="#">900</a></li>
					<li><a href="#">1000</a></li>
					<li><a href="#">2000</a></li>
				</ul>
			</li>
			<li><a href="#"><i class="su-icon">suivant</i></a></li>
			<li><a href="#">2318</a></li>
		</ul>
		<button type="button" class="su-close" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in","force":0}'>Fermer la liste de pages</button>
	</nav>
</div>

#### Cas en page 1565 sur 2318 pages
Dans ce cas, à part la construction de la liste, rien de particulier. Ne pas oublier de mettre la classe `su-page-active` et de supprimer le lien sur la page en cours…

``` html
	<nav class="su-pagination">
		<ul>
			<li><a href="#">1</a></li>
			<li><a href="#"><i class="su-icon">précédent</i></a></li>
			<li class="su-page-select">
				<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1565</button>
				<ul class="su-pages-list">			
					<li><a href="#">1560</a></li>
					<li><a href="#">1561</a></li>
					<li><a href="#">1562</a></li>
					<li><a href="#">1563</a></li>
					<li><a href="#">1564</a></li>
					<li class="su-page-active">1565</li>
					<li><a href="#">1566</a></li>
					<li><a href="#">1567</a></li>
					<li><a href="#">1568</a></li>
					<li class="su-separator"><a href="#">1569</a></li>
					<li><a href="#">1570</a></li>
					<li><a href="#">1580</a></li>
					<li class="su-separator"><a href="#">1590</a></li>
					<li><a href="#">1600</a></li>
					<li><a href="#">1700</a></li>
					<li><a href="#">1800</a></li>
					<li class="su-separator"><a href="#">1900</a></li>
					<li><a href="#">2000</a></li>
				</ul>
			</li>
			<li><a href="#"><i class="su-icon">suivant</i></a></li>
			<li><a href="#">2318</a></li>
		</ul>
		<button type="button" class="su-close" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in","force":0}'>Fermer la liste de pages</button>
	</nav>
```

<div class="sipaui">
	<nav class="surcharge-storybook su-pagination">
		<ul>
			<li><a href="#">1</a></li>
			<li><a href="#"><i class="su-icon">précédent</i></a></li>
			<li class="su-page-select">
				<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1565</button>
				<ul class="surcharge-storybook su-pages-list">			
					<li><a href="#">1560</a></li>
					<li><a href="#">1561</a></li>
					<li><a href="#">1562</a></li>
					<li><a href="#">1563</a></li>
					<li><a href="#">1564</a></li>
					<li class="su-page-active">1565</li>
					<li><a href="#">1566</a></li>
					<li><a href="#">1567</a></li>
					<li><a href="#">1568</a></li>
					<li class="su-separator"><a href="#">1569</a></li>
					<li><a href="#">1570</a></li>
					<li><a href="#">1580</a></li>
					<li class="su-separator"><a href="#">1590</a></li>
					<li><a href="#">1600</a></li>
					<li><a href="#">1700</a></li>
					<li><a href="#">1800</a></li>
					<li class="su-separator"><a href="#">1900</a></li>
					<li><a href="#">2000</a></li>
				</ul>
			</li>
			<li><a href="#"><i class="su-icon">suivant</i></a></li>
			<li><a href="#">2318</a></li>
		</ul>
		<button type="button" class="su-close" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in","force":0}'>Fermer la liste de pages</button>
	</nav>
</div>

#### Cas en page 2235 sur 2318 (dernière page)

Quand on est sur la dernière page, **les 3 derniers «&nbsp;boutons&nbsp;» sont inactifs**. Pour cela, **on ajoute la classe `su-last-page`** sur le composant, **on remplace les `<a>` des 2 derniers boutons par des `<span>`**, sur le bouton d’affichage de la liste de page **on ajoute l’attribut `disabled`, on supprime l’`aria-label="Afficher la liste de pages"` et le `data-sutoggleclass`**, et enfin **on supprime l’`<ul>` de cette liste**. 


``` html
	<nav class="su-pagination su-last-page">
		<ul>
			<li><a href="#">1</a></li>
			<li><a href="#"><i class="su-icon">précédent</i></a></li>
			<li class="su-page-select">
				<button type="button" disabled><span class="su-visually-hidden">Page en cours :</span>2318</button>
			</li>						
			<li><span><i class="su-icon">suivant</i></span></li>
			<li><span>2318</span></li>
		</ul>
		<button type="button" class="su-close" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in","force":0}'>Fermer la liste de pages</button>
	</nav>

```

<div class="sipaui">
	<nav class="surcharge-storybook su-pagination su-last-page">
		<ul>
			<li><a href="#">1</a></li>
			<li><a href="#"><i class="su-icon">précédent</i></a></li>
			<li class="su-page-select">
				<button type="button" disabled><span class="su-visually-hidden">Page en cours :</span>2318</button>
			</li>						
			<li><span><i class="su-icon">suivant</i></span></li>
			<li><span>2318</span></li>
		</ul>
		<button type="button" class="su-close" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in","force":0}'>Fermer la liste de pages</button>
	</nav>
</div>


<div style="color: red; background: rgba(255,0,0, .1); padding: 10px; border-radius: 10px; margin: 100px 0;">
	<h2 style="margin-top: 0">Reste à faire</h2>
	<ul>
		<li>Décider de la 3.8 pour mettre ds le journal</li>
		<li>Virer $font-import-use-local: de core/scss/_variables.scss</li>
	</ul>
</div>

<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-pagination`
- `su-first-page` (ajoutée dans le DOM en fonction de la page en cours)
- `su-last-page` (ajoutée dans le DOM en fonction de la page en cours)
- `su-page-select`
- `su-pages-list`
- `su-pages-list-in` (posée par le JS)
- `su-page-active`
- `su-separator`
- `su-close`

### Classes annexes
- `su-visually-hidden` (dépendant du composant *helpers*)
- `su-icon` (dépendant du composant *icons*)

</div>
