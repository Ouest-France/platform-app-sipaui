# Grids / Grilles

SipaUI utilise une grille de mise en page qui lui est propre. Elle est **fluide en 6 colonnes** sur mobile (sous 768px) et **fixe par paliers en 24 colonnes** sur tablette en mode paysage et desktop (cf. la partie «&nbsp;design&nbsp;» ou tester la grille ci-dessous). Elle se veut très légère contrairement à celle proposée par les gros frameworks comme Bootstrap.

D’un point de vue technique, la grille s'appuie sur le modèle *Flexbox*, la technologie *Grids* n’étant pas compatible Internet Explorer.

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>


<!-- STORY -->

## Le conteneur de page

Le conteneur ne fait pas partie à proprement parler de la grille. Il sert à déterminer la largeur que prend la grille principale de la page (celle de premier niveau). **Si vous avez besoin d’insérer une grille dans un sous-niveau, il n’y aura plus besoin de conteneur**. Exemple de grille multi-niveau&nbsp;: Page / conteneur / grille n1 / grille n2…

Il utilise la classe `su-page-container`.

```html
<div>
	<p>
		Page
	</p>
	<div class="su-page-container">
		<p>
			Contenu
		</p>
	</div>
</div>
```

<div class="sipaui demo-conteneur">
	<div class="demo-grille page">
		<p>
			Page
		</p>
		<div class="su-page-container">
			<p class="contenu">
				Contenu
			</p>
		</div>
	</div>
</div>


## La grille standard

Exemple de la grille standard de 6 colonnes sur petits écrans et 24 sur grand (les colonnes supérieures à 6 sont masquées sur les petits écrans). 

```html
<div>
	<div>
		Page
	</div>
	<div class="su-row">
		<div class="su-col-xs-1 su-col-lg-1"><p>1</p></div>
		<div class="su-col-xs-1 su-col-lg-1"><p>2</p></div>
		<div class="su-col-xs-1 su-col-lg-1"><p>3</p></div>
		<div class="su-col-xs-1 su-col-lg-1"><p>4</p></div>
		<div class="su-col-xs-1 su-col-lg-1"><p>5</p></div>
		<div class="su-col-xs-1 su-col-lg-1"><p>6</p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>7</p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>8</p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>9</p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>10<p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>11<p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>12<p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>13<p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>14<p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>15<p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>16<p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>17<p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>18<p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>19<p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>20<p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>21<p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>22<p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>23<p></div>
		<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p>24<p></div>
	</div>
</div>
```

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-row">
			<div class="su-col-xs-1 su-col-lg-1"><p class="contenu">1</p></div>
			<div class="su-col-xs-1 su-col-lg-1"><p class="contenu">2</p></div>
			<div class="su-col-xs-1 su-col-lg-1"><p class="contenu">3</p></div>
			<div class="su-col-xs-1 su-col-lg-1"><p class="contenu">4</p></div>
			<div class="su-col-xs-1 su-col-lg-1"><p class="contenu">5</p></div>
			<div class="su-col-xs-1 su-col-lg-1"><p class="contenu">6</p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">7</p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">8</p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">9</p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">10<p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">11<p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">12<p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">13<p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">14<p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">15<p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">16<p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">17<p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">18<p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">19<p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">20<p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">21<p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">22<p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">23<p></div>
			<div class="su-col-xs-1 su-col-lg-1 su-visible-lg su-visible-xl"><p class="contenu">24<p></div>
		</div>
	</div>
</div>

### Situation réelle (dans le conteneur de page)

**Rappel&nbsp;**: si vous intégrer une grille dans une page complète, elle doit être intégrée dans un conteneur `su-page-container` afin de gérer son positionnement horizontal dans la page.

```html
<div>
	<p>
		Page
	</p>
	<div class="su-page-container">
		<div class="su-row">
			<div class="su-hidden-sm su-col-md-3 su-col-lg-2">
				<p>
					1.<br />
					su-hidden-sm su-col-md-3 su-col-lg-2
				</p>
			</div>
			<div class="su-col-md-3 su-col-lg-12 su-col-xl-10">
				<p>
					2.<br />
					su-col-md-3 su-col-lg-12 su-col-xl-10
				</p>
			</div>
			<div class="su-col-md-3 su-col-lg-3 su-col-xl-4">
				<p>
					3.<br />
					su-col-md-3 su-col-lg-3 su-col-xl-4
				</p>
			</div>
			<div class="su-col-md-3 su-col-lg-7 su-col-xl-8">
				<p>
					4.<br />
					su-col-md-3 su-col-lg-7 su-col-xl-8
				</p>
			</div>
		</div>
	</div>
</div>
```

<div class="sipaui demo-conteneur">
	<div class="demo-grille page">
		<p>
			Page
		</p>
		<div class="su-page-container">
			<div class="su-row">
				<div class="su-hidden-sm su-col-md-3 su-col-lg-2">
					<p class="contenu">
						1.<br />
						su-hidden-sm su-col-md-3 su-col-lg-2
					</p>
				</div>
				<div class="su-col-md-3 su-col-lg-12 su-col-xl-10">
					<p class="contenu">
						2.<br />
						su-col-md-3 su-col-lg-12 su-col-xl-10
					</p>
				</div>
				<div class="su-col-md-3 su-col-lg-3 su-col-xl-4">
					<p class="contenu">
						3.<br />
						su-col-md-3 su-col-lg-3 su-col-xl-4
					</p>
				</div>
				<div class="su-col-md-3 su-col-lg-7 su-col-xl-8">
					<p class="contenu">
						4.<br />
						su-col-md-3 su-col-lg-7 su-col-xl-8
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

### Décalage de colonnes

### Alignement vertical


## Grille libre automatique

SipaUI propose une grille de colonnes automatiques en flex. Il suffit d’ajouter la classe `su-grid-auto` au système de grille (`su-row`). Avec ce système, il est possible de générer une suite de colonnes en nombre variable qui se répartiront automatiquement dans l’espace accordé par le parent. Pour cela, il suffit de créer autant de colonnes que souhaité avec la classe `su-col`. **Elles seront flexibles mais pas responsives** (le nombre colonne sera toujours le même, quel que soit la taille de l’écran).  Ces colonnes intègrent automatiquement la gouttière standard que l’on peut bien sûr supprimer avec la classe `su-no-gutter`.

Il faut toutefois noter que ce système de colonage automatique est un outil pour des cas particuliers, mais **il ne doit en aucun cas remplacer la grille standard pour la mise en page générale d’un site**.

```html
<div class="demo-grille page">
	<div>
		Page
	</div>
	<div class="su-grid-auto su-row">
		<div class="su-col"><div class="contenu"></div></div>
		<div class="su-col"><div class="contenu"></div></div>
		<div class="su-col"><div class="contenu"></div></div>
		<div class="su-col"><div class="contenu"></div></div>
	</div>
</div>
```

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-grid-auto su-row">
			<div class="su-col"><div class="contenu"></div></div>
			<div class="su-col"><div class="contenu"></div></div>
			<div class="su-col"><div class="contenu"></div></div>
			<div class="su-col"><div class="contenu"></div></div>
		</div>
	</div>
</div>

### Avec gouttière

### Wrap

### Grille imbriquée
(pas de conteneur)





<div id="liste-classes">

## Liste des classes disponibles
- `su-page-container`
- `su-row`
- `su-col`
- `su-no-gutter`

</div>
