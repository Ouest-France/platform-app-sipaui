# Pagination / Pagination

Le composant de pagination permet de présenter aux lecteurs, mais aussi, *et surtout aux moteurs de recherche*, toutes les pages de contenu accessibles à partir de la page en cours. Ce nombre de pages pouvant être très important, il faut proposer un système de navigation qui permet d’aller sur n’importe quelle page en 2 liens maximum. **Toute la complexité de ce composant est dans la construction des listes de liens.** Pour des raisons techniques évidentes, cette construction est à faire au niveau de la page et non du composant. **Elle ne peut donc être portée par SipaUI**. De fait, ce composant n’intègre pas *d’intelligence*, il s’agit juste de HTML et de CSS, la construction sera à faire par vous. Pour cela, référez-vous au document de design ou aux exemples ci-dessous.

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Icons**.
- composant **Helpers**.

</div>

## Principe général

La pagination est composée d’une balise `<nav>` (puisqu’il s'agit d’un système de navigation) contenant 2 listes imbriquées et un bouton de fermeture de la liste de pages. La première liste contient les éléments de navigation de premier niveau (page 1, précédente, page en cours, suivante et dernière page). La seconde liste contient les accès vers les autres pages. Le bouton sous ces listes permet de simplifier la fermeture de la liste de pages en permettant le clic à l’extérieur de cette liste.

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
			<li><a href="#">1</a></li>
			<li><a href="#"><i class="su-icon">précédent</i></a></li>
			<li class="su-page-select">
				<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1</button>
				<ul class="su-pages-list">
					<li class="su-page-active"><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">6</a></li>
					<li><a href="#">7</a></li>
					<li><a href="#">8</a></li>
					<li><a href="#">9</a></li>
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
			<li><a href="#">1</a></li>
			<li><a href="#"><i class="su-icon">précédent</i></a></li>
			<li class="su-page-select">
				<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1</button>
				<ul class="surcharge-storybook su-pages-list">
					<li class="su-page-active"><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">6</a></li>
					<li><a href="#">7</a></li>
					<li><a href="#">8</a></li>
					<li><a href="#">9</a></li>
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

La classe `su-pagination` sur `<nav>` est la *classe d’identification* du composant. Sur cette même balise peuvent être ajoutées les classes `su-first-page` et `su-last-page` quand l’utilisateur est sur **la première** ou **la dernière page**. Cela permet de rendre les 2 premiers ou 2 derniers boutons inactifs en fonction des cas (cf. plus bas).

`su-page-select` sert à identifier la zone qui contient le *bouton d’affichage* de la liste des pages proposées et cette *liste*. Sur le bouton, on utilise un `data-sutoggleclass` pour afficher / masquer la liste grace à la classe `su-pages-list-in`. Aucun paramètre particulier à changer dans cet attribut. Par ailleurs, le bouton comporte un `aria-label` pour l’accessibilité, ainsi qu’un `<span class="su-visually-hidden">`, aussi pour l’accessibilité, suivi du numéro de la page en cours.

La classe `su-pages-list` est pour la *liste* proprement dite. **Pour construire la liste, se référer aux règles définies dans la page "design"**. Dans cette liste, vous devez positionner la classe `su-page-active` pour identifier la *page en cours de lecture*.

### Variations en fonction du nombre de pages totales

#### Cas avec 7 pages

``` html
	<nav class="su-pagination su-first-page">
		<ul>
			<li><a href="#">1</a></li>
			<li><a href="#"><i class="su-icon">précédent</i></a></li>
			<li class="su-page-select">
				<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1</button>
				<ul class="su-pages-list">
					<li class="su-page-active"><a href="#">1</a></li>
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
			<li><a href="#">1</a></li>
			<li><a href="#"><i class="su-icon">précédent</i></a></li>
			<li class="su-page-select">
				<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1</button>
				<ul class="surcharge-storybook su-pages-list">
					<li class="su-page-active"><a href="#">1</a></li>
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

Scroll sur la liste

<div class="sipaui">
	<nav class="surcharge-storybook su-pagination su-first-page">
		<ul>
		    <li><a href="#">1</a></li>
		    <li><a href="#"><i class="su-icon">précédent</i></a></li>
		    <li class="su-page-select">
		    	<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1</button>
		    	<ul class="surcharge-storybook su-pages-list">
				    <li class="su-page-active"><a href="#">1</a></li>
				    <li><a href="#">2</a></li>
				    <li><a href="#">3</a></li>
				    <li><a href="#">4</a></li>
				    <li><a href="#">5</a></li>
				    <li><a href="#">6</a></li>
				    <li><a href="#">7</a></li>
				    <li><a href="#">8</a></li>
				    <li><a href="#">9</a></li>
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

#### Cas avec 2235 pages

Cf. si "un système de navigation qui permet d’aller sur n’importe quelle page en 2 liens maximums" en intro est vrai
<div class="sipaui">
	<nav class="surcharge-storybook su-pagination su-first-page">
		<ul>
			<li><a href="#">1</a></li>
			<li><a href="#"><i class="su-icon">précédent</i></a></li>
			<li class="su-page-select">
				<button type="button" aria-label="Afficher la liste de pages" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in"}'><span class="su-visually-hidden">Page en cours :</span>1</button>
				<ul class="surcharge-storybook su-pages-list">
					<li class="su-page-active"><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">6</a></li>
					<li><a href="#">7</a></li>
					<li><a href="#">8</a></li>
					<li><a href="#">9</a></li>
					<li><a href="#">10</a></li>
					<li><a href="#">20</a></li>
					<li><a href="#">30</a></li>
					<li><a href="#">40</a></li>
					<li><a href="#">50</a></li>
					<li><a href="#">60</a></li>
					<li><a href="#">70</a></li>
					<li><a href="#">80</a></li>
					<li><a href="#">90</a></li>
					<li><a href="#">100</a></li>
					<li><a href="#">200</a></li>
					<li><a href="#">300</a></li>
					<li><a href="#">400</a></li>
					<li><a href="#">500</a></li>
					<li><a href="#">600</a></li>
					<li><a href="#">700</a></li>
					<li><a href="#">800</a></li>
					<li><a href="#">900</a></li>
					<li><a href="#">1000</a></li>
					<li><a href="#">2000</a></li>
				</ul>
			</li>
			<li><a href="#"><i class="su-icon">suivant</i></a></li>
			<li><a href="#">2235</a></li>
		</ul>
		<button type="button" class="su-close" data-sutoggleclass='{"parent":"nav","klass":"su-pages-list-in","force":0}'>Fermer la liste de pages</button>
	</nav>
</div>

### Variations en fonction de la position dans le nombre de pages


<div style="color: red; background: rgba(255,0,0, .1); padding: 10px; border-radius: 10px; margin: 100px 0;">
	<h2 style="margin-top: 0">À faire</h2>
	<ul>
		<li>Cas dernière page</li>
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

### Classes annexes
- `su-visually-hidden` (dépendant du composant *helpers*)
- `su-` (dépendant du composant *Labels*, si besoin de surcharge)

</div>
