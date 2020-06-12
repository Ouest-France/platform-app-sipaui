# Grids / Grilles

SipaUI utilise une grille de mise en page qui lui est propre. Elle est **fluide en 6 colonnes** sur mobile (sous 768px) et **fixe par paliers en 24 colonnes** sur tablette en mode paysage et desktop (cf. la partie «&nbsp;design&nbsp;» ou tester la grille ci-dessous). Elle se veut très légère contrairement à celle proposée par les gros frameworks comme Bootstrap.

D’un point de vue technique, la grille s'appuie sur le modèle *Flexbox*, la technologie *Grids* n’étant pas compatible Internet Explorer.

<p class="alerte">
Puisque la grille SipaUI est en `flex` elle n’est pas compatible avec <em><a href="https://masonry.desandro.com" target="_blank">Masonry</a></em>.
</p>

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Helpers**,

</div>

## Le conteneur de page

Le conteneur ne fait pas partie à proprement parler de la grille. Il sert à déterminer la largeur que prend la grille principale de la page (celle de premier niveau). **Si vous avez besoin d’insérer une grille dans un sous-niveau, il n’y aura plus besoin de conteneur**. Exemple de grille multi-niveau&nbsp;: Page / conteneur / grille n1 / grille n2…

NB&nbsp;: cette classe peut être placée au même niveau que la classe `.sipaui` si besoin.

Il utilise la classe `su-container`.

```html
<div class="su-container">
	<p>
		Contenu
	</p>
</div>
```

<div class="sipaui demo-conteneur">
	<div class="demo-grille page">
		<p>
			Page
		</p>
		<div class="su-container">
			<p class="contenu">
				Contenu
			</p>
		</div>
	</div>
</div>


## La grille standard

Exemple de la grille standard de 6 colonnes sur petits écrans et 24 sur grand (les colonnes supérieures à 6 sont masquées sur les petits écrans).

Pour construire cette grille, il faut d’abord un rang avec la classe `su-row`. Ce rang contient les blocs devant s'afficher en colonne. **Chaque bloc prend par défaut toute la largeur du rang**. Pour en faire des colonnes et leur donner une largeur spécifique, il faut leur donner des classes indiquant **à partir de quel point de rupture** ils deviennent une colonne et **quelle largeur doit faire cette colonne**. Les points de rupture sont bien sûr déclarés en `xs`, `sm`… et les largeurs en nombre de colonnes de la grille. La construction de la classe se fait donc ainsi&nbsp;: `su-col`+`-point de rupture`+`-nombre de colonnes` (exemple&nbsp;: `su-col-md-3`).

Aussi&nbsp;:
- `su-col-xs-3` signifie que le bloc, à partir de la taille d’écran `xs` **et au-dessus**, fera la moitié de la largeur du rang (3 colonnes sur les 6 utilisées sur petit écran).
- `su-col-md-18` signifie que le bloc, à partir de la taille d’écran `md` **et au-dessus**, fera les 3/4 de la largeur du rang (18 colonnes sur les 24 utilisées sur grand écran).

**NB&nbsp;: Il est important que la somme des** `-nombre de colonnes` **sur un rang soit égal à 6 sur petit écran (xs et sm) et 24 sur grand (md, lg et xl).**

NB 2&nbsp;: la classe `.su-row` peut être placée au même niveau que la classe `.sipaui` si besoin.

```html
<div class="su-row">
	<div class="su-col-xs-1 su-col-md-1"><p>1</p></div>
	<div class="su-col-xs-1 su-col-md-1"><p>2</p></div>
	<div class="su-col-xs-1 su-col-md-1"><p>3</p></div>
	<div class="su-col-xs-1 su-col-md-1"><p>4</p></div>
	<div class="su-col-xs-1 su-col-md-1"><p>5</p></div>
	<div class="su-col-xs-1 su-col-md-1"><p>6</p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>7</p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>8</p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>9</p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>10<p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>11<p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>12<p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>13<p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>14<p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>15<p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>16<p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>17<p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>18<p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>19<p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>20<p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>21<p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>22<p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>23<p></div>
	<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>24<p></div>
</div>
```

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-row">
			<div class="su-col-xs-1 su-col-md-1"><p>1</p></div>
			<div class="su-col-xs-1 su-col-md-1"><p>2</p></div>
			<div class="su-col-xs-1 su-col-md-1"><p>3</p></div>
			<div class="su-col-xs-1 su-col-md-1"><p>4</p></div>
			<div class="su-col-xs-1 su-col-md-1"><p>5</p></div>
			<div class="su-col-xs-1 su-col-md-1"><p>6</p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>7</p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>8</p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>9</p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>10<p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>11<p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>12<p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>13<p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>14<p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>15<p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>16<p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>17<p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>18<p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>19<p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>20<p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>21<p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>22<p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>23<p></div>
			<div class="su-col-xs-1 su-col-md-1 su-hidden-xs su-hidden-sm"><p>24<p></div>
		</div>
	</div>
</div>

### Situation réelle (dans le conteneur de page)

En combinant les diverses classes de colonnes possibles, ainsi que les classes de visibilité dépendantes des points de rupture (composant *Helpers*) il est donc possible de faire une mise en page complexe.

**Rappel&nbsp;**: si vous intégrez une grille dans une page complète, elle doit être intégrée dans un conteneur `su-container` afin de gérer son positionnement horizontal dans la page.

Dans l’exemple ci-dessous, la 1ère colonne est invisible en mobile.

```html
<div class="su-container">
	<div class="su-row">
		<div class="su-hidden-sm su-col-md-12 su-col-lg-2">
			<p>
				1.<br />
				su-hidden-sm su-col-md-12 su-col-lg-2
			</p>
		</div>
		<div class="su-col-md-12 su-col-lg-12 su-col-xl-10">
			<p>
				2.<br />
				su-col-md-12 su-col-lg-12 su-col-xl-10
			</p>
		</div>
		<div class="su-col-md-12 su-col-lg-3 su-col-xl-4">
			<p>
				3.<br />
				su-col-md-12 su-col-lg-3 su-col-xl-4
			</p>
		</div>
		<div class="su-col-md-12 su-col-lg-7 su-col-xl-8">
			<p>
				4.<br />
				su-col-md-12 su-col-lg-7 su-col-xl-8
			</p>
		</div>
	</div>
</div>
```

<div class="sipaui demo-conteneur">
	<div class="demo-grille page">
		<p>
			Page
		</p>
		<div class="su-container">
			<div class="su-row">
				<div class="su-hidden-sm su-col-md-12 su-col-lg-2">
					<p>
						1.<br />
						su-hidden-sm su-col-md-12 su-col-lg-2
					</p>
				</div>
				<div class="su-col-md-12 su-col-lg-12 su-col-xl-10">
					<p>
						2.<br />
						su-col-md-12 su-col-lg-12 su-col-xl-10
					</p>
				</div>
				<div class="su-col-md-12 su-col-lg-3 su-col-xl-4">
					<p>
						3.<br />
						su-col-md-12 su-col-lg-3 su-col-xl-4
					</p>
				</div>
				<div class="su-col-md-12 su-col-lg-7 su-col-xl-8">
					<p>
						4.<br />
						su-col-md-12 su-col-lg-7 su-col-xl-8
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

### Décalage de colonnes vers la droite

Vous pouvez décaler une colonne vers la droite en utilisant les classes `su-offset`+`-point de rupture`+`-nombre de colonnes`. Ces classes augmentent la marge de gauche d’une colonne de `-nombre de colonnes`. Par exemple, `su-offset-md-2` déplace la colonne de 2 colonnes vers la droite.

**NB&nbsp;: Si vous utilisez un offset, sa valeur de colonne rentre dans le calcul du nombre total de colonne dans le rang.**

```html
<div class="su-container">
	<div class="su-row">
		<div class="su-col-lg-4 su-offset-lg-10">
			<p>
				1.<br />
				su-col-lg-4 su-offset-lg-10
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>
		<div class="su-col-lg-10">
			<p>
				2.<br />
				su-col-lg-10
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
	</div>
</div>
```

<div class="sipaui demo-conteneur">
	<div class="demo-grille page">
		<p>
			Page
		</p>
		<div class="su-container">
			<div class="su-row">
				<div class="su-col-lg-4 su-offset-lg-10">
					<p>
						1.<br />
						su-col-lg-4 su-offset-lg-10
					</p>
					<p class="contenu">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div class="su-col-lg-10">
					<p>
						2.<br />
						su-col-lg-10
					</p>
					<p class="contenu">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

### Nombre de colonnes inférieur à celui attendu

La grille SipaUI étant en `flex`, elle nécessite que le **nombre total de «&nbsp;colonnes implicites&nbsp;» soit toujours égal au maximum de colonnes possible** (6 en mobile et 24 ensuite). Cela veut dire qu'en additionnant toutes les valeurs chiffrées de vos définitions de colonnes vous devez arriver à ce maximum. Par exemple&nbsp;: `su-col-lg-4 su-offset-lg-10` + `su-col-lg-10` égal bien *24*.

Maintenant, vous pourriez avoir besoin de créer des colonnes qui ne tiennent pas toute la largeur de la grille. Pour cela, il faut utiliser une classe de *comblement* **sur la dernière colonne** de la ligne. Elle se présente sous la forme&nbsp;:  `su-filling`+`-point de rupture`+`-nombre de colonnes`.

```html
<div class="su-container">
	<div class="su-row">
		<div class="su-col-md-4 su-offset-md-8">
			<p>
				1.<br />
				su-col-md-4 su-offset-md-8
			</p>
			<p class="contenu">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>
		<div class="su-col-md-8 su-filling-md-2">
			<p>
				2.<br />
				su-col-md-8 su-filling-md-2
			</p>
			<p class="contenu">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
	</div>
</div>
```

<div class="sipaui demo-conteneur">
	<div class="demo-grille page">
		<p>
			Page
		</p>
		<div class="su-container">
			<div class="su-row">
				<div class="su-col-md-4 su-offset-md-8">
					<p>
						1.<br />
						su-col-md-4 su-offset-md-8
					</p>
					<p class="contenu">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div class="su-col-md-8 su-filling-md-2">
					<p>
						2.<br />
						su-col-md-8 su-filling-md-2
					</p>
					<p class="contenu">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

### Alignement vertical

Avec SipaUI il est possible de gérer l’alignement ou l’étirement **vertical** des colonnes dans le rang avec les classes `su-vertical-…` à positionner avec la classe `su-row`.

#### Colonnes étirées

L’étirement des colonnes étant l’alignement par défaut, il n’a pas de classe spécifique.

```html
<div class="su-row">
	<div class="su-col-xs-2">
		<p>Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper.</p>
	</div>
	<div class="su-col-xs-2">
		<p>Tellus Magna Vestibulum Lorem Bibendum</p>
	</div>
	<div class="su-col-xs-2">
		<p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.</p>
		<p>Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
	</div>
</div>
```

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-row">
			<div class="su-col-xs-2">
				<p class="contenu">Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper.</p>
			</div>
			<div class="su-col-xs-2">
				<p class="contenu">Tellus Magna Vestibulum Lorem Bibendum</p>
			</div>
			<div class="su-col-xs-2">
				<p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.</p>
				<p class="contenu">Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
			</div>
		</div>
	</div>
</div>


#### Alignement haut

Utilisation de la classe `su-vertical-start`.

```html
<div class="su-row su-vertical-start">
	<div class="su-col-xs-2">
		<p>Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper.</p>
	</div>
	<div class="su-col-xs-2">
		<p>Tellus Magna Vestibulum Lorem Bibendum</p>
	</div>
	<div class="su-col-xs-2">
		<p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.</p>
		<p>Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
	</div>
</div>
```

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-row su-vertical-start">
			<div class="su-col-xs-2">
				<p class="contenu">Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper.</p>
			</div>
			<div class="su-col-xs-2">
				<p class="contenu">Tellus Magna Vestibulum Lorem Bibendum</p>
			</div>
			<div class="su-col-xs-2">
				<p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.</p>
				<p class="contenu">Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
			</div>
		</div>
	</div>
</div>


#### Alignement centré

Utilisation de la classe `su-vertical-center`.

```html
<div class="su-row su-vertical-center">
	<div class="su-col-xs-2">
		<p>Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper.</p>
	</div>
	<div class="su-col-xs-2">
		<p>Tellus Magna Vestibulum Lorem Bibendum</p>
	</div>
	<div class="su-col-xs-2">
		<p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.</p>
		<p>Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
	</div>
</div>
```

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-row su-vertical-center">
			<div class="su-col-xs-2">
				<p class="contenu">Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper.</p>
			</div>
			<div class="su-col-xs-2">
				<p class="contenu">Tellus Magna Vestibulum Lorem Bibendum</p>
			</div>
			<div class="su-col-xs-2">
				<p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.</p>
				<p class="contenu">Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
			</div>
		</div>
	</div>
</div>

#### Alignement bas

Utilisation de la classe `su-vertical-end`.

```html
<div class="su-row su-vertical-end">
	<div class="su-col-xs-2">
		<p>Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper.</p>
	</div>
	<div class="su-col-xs-2">
		<p>Tellus Magna Vestibulum Lorem Bibendum</p>
	</div>
	<div class="su-col-xs-2">
		<p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.</p>
		<p>Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
	</div>
</div>
```

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-row su-vertical-end">
			<div class="su-col-xs-2">
				<p class="contenu">Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper.</p>
			</div>
			<div class="su-col-xs-2">
				<p class="contenu">Tellus Magna Vestibulum Lorem Bibendum</p>
			</div>
			<div class="su-col-xs-2">
				<p>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.</p>
				<p class="contenu">Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
			</div>
		</div>
	</div>
</div>









## Grille libre automatique

SipaUI propose une grille de colonnes automatiques en flex. Il suffit d’ajouter la classe `su-grid-auto` au système de grille (`su-row`). Avec ce système, il est possible de générer une suite de colonnes en nombre variable qui se répartiront automatiquement dans l’espace accordé par le parent. Pour cela, il suffit de créer autant de colonnes que souhaité avec la classe `su-col`.

Ces colonnes seront **flexibles, mais pas responsives** (le nombre de colonnes sur une ligne sera toujours le même, quel que soit la taille de l’écran). Par conséquent, **il vous faudra gérer la *responsivité* dans vos propres CSS** ou en utilisant des **classes de visibilité / invisibilté responsive** des *helpers* SipaUI comme `su-hidden-sm`, `su-visible-xl`…

Par ailleurs, ces colonnes auront **toutes la même largeur**. Pour changer leur largeur, il faudra passer par les attributs `flex`, `flex-grow`, `width` ou `max-width` dans vos CSS.

Il faut toutefois noter que ce système de colonage automatique est un outil pour des cas particuliers, mais **il ne doit en aucun cas remplacer la grille standard pour la mise en page générale d’un site éditorial**.

```html
<div class="su-grid-auto su-row">
	<div class="su-col"><p>Contenu</p></div>
	<div class="su-col"><p>Contenu</p></div>
	<div class="su-col"><p>Contenu</p></div>
	<div class="su-col"><p>Contenu</p></div>
</div>
```

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-grid-auto su-row">
			<div class="su-col"><p>Contenu</p></div>
			<div class="su-col"><p>Contenu</p></div>
			<div class="su-col"><p>Contenu</p></div>
			<div class="su-col"><p>Contenu</p></div>
		</div>
	</div>
</div>


### Avec gouttière

Vous pouvez rajouter les gouttières standards de 20px avec la classe `su-has-gutter` sur le rang.

```html
<div class="su-grid-auto su-row su-has-gutter">
	<div class="su-col"><p>Contenu</p></div>
	<div class="su-col"><p>Contenu</p></div>
	<div class="su-col"><p>Contenu</p></div>
	<div class="su-col"><p>Contenu</p></div>
</div>
```

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-grid-auto su-row su-has-gutter">
			<div class="su-col"><p>Contenu</p></div>
			<div class="su-col"><p>Contenu</p></div>
			<div class="su-col"><p>Contenu</p></div>
			<div class="su-col"><p>Contenu</p></div>
		</div>
	</div>
</div>

### Wrap

Par défaut, **les colonnes de la grille automatique restent sur une ligne** et s'adaptent en largeur à leur contenu. **Quand elles sont trop larges pour tenir sur cette largeur elles sortent du conteneur**. Pour corriger ce problème vous pouvez gérer localement la largeur de vos colonnes (comme expliqué plus haut) pour qu'elles tiennent sur la ligne ou mettre en place un retour à la ligne automatique. 

Pour mettre en place le retour automatique utilisez la classe `su-wrap` sur le rang. Dans ce cas, la dernière colonne d’une ligne laissera un espace à sa droite (cf. ci-dessous). **À vous de régler la largeur de vos colonnes** (avec les attributs `flex`, `flex-grow`, `width` ou `max-width` dans vos CSS). Vous pouvez d’ailleurs gérer ces tailles en fonction de media-queries…

#### Exemple de base

```html
<div class="demo-grille page">
	<div>
		Page
	</div>
	<div class="su-grid-auto su-row su-wrap">
		<div class="su-col">
			<p>Contenu 1</p>
			<p>Lorem ipsum dolor sit amet, consectetur.</p>
		</div>
		<div class="su-col">
			<p>Contenu 2</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		</div>
		<div class="su-col">
			<p>Contenu 3</p>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		<div class="su-col">
			<p>Contenu 4</p>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		<div class="su-col">
			<p>Contenu 5</p>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		<div class="su-col">
			<p>Contenu 6</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		</div>
		<div class="su-col">
			<p>Contenu 7</p>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
	</div>
</div>
```

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-grid-auto su-row su-wrap">
			<div class="su-col">
				<p>Contenu 1</p>
				<p>Lorem ipsum dolor sit amet, consectetur.</p>
			</div>
			<div class="su-col">
				<p>Contenu 2</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>
			<div class="su-col">
				<p>Contenu 3</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="su-col">
				<p>Contenu 4</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="su-col">
				<p>Contenu 5</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="su-col">
				<p>Contenu 6</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
			<div class="su-col">
				<p>Contenu 7</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
		</div>
	</div>
</div>

#### Exemple avec gouttières

```html
<div class="demo-grille page">
	<div>
		Page
	</div>
	<div class="su-grid-auto su-row su-wrap su-has-gutter">
		<div class="su-col">
			<p>Contenu 1</p>
			<p>Lorem ipsum dolor sit amet, consectetur.</p>
		</div>
		<div class="su-col">
			<p>Contenu 2</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		</div>
		<div class="su-col">
			<p>Contenu 3</p>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		<div class="su-col">
			<p>Contenu 4</p>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		<div class="su-col">
			<p>Contenu 5</p>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		<div class="su-col">
			<p>Contenu 6</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		</div>
		<div class="su-col">
			<p>Contenu 7</p>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
	</div>
</div>
```

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-grid-auto su-row su-wrap su-has-gutter">
			<div class="su-col">
				<p>Contenu 1</p>
				<p>Lorem ipsum dolor sit amet, consectetur.</p>
			</div>
			<div class="su-col">
				<p>Contenu 2</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>
			<div class="su-col">
				<p>Contenu 3</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="su-col">
				<p>Contenu 4</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="su-col">
				<p>Contenu 5</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="su-col">
				<p>Contenu 6</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
			<div class="su-col">
				<p>Contenu 7</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
		</div>
	</div>
</div>

#### Exemple avec gestion locale de la taille

```html
<style>
    .quart {width: calc(25% - 15px); margin-top: 10px}
    .quart:nth-child(4n) {margin-right: 0 !important}
</style>
<div class="demo-grille page">
	<div>
		Page
	</div>
	<div class="su-grid-auto su-row su-wrap su-has-gutter">
		<div class="su-col quart">
			<p>Contenu 1</p>
			<p>Lorem ipsum dolor sit amet, consectetur.</p>
		</div>
		<div class="su-col quart">
			<p>Contenu 2</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		</div>
		<div class="su-col quart">
			<p>Contenu 3</p>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		<div class="su-col quart">
			<p>Contenu 4</p>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		<div class="su-col quart">
			<p>Contenu 5</p>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		<div class="su-col quart">
			<p>Contenu 6</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		</div>
	</div>
</div>
```

<style>
    .quart {width: calc(25% - 15px); margin-top: 10px}
    .quart:nth-child(4n) {margin-right: 0 !important}
</style>
<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-grid-auto su-row su-wrap su-has-gutter">
			<div class="su-col quart">
				<p>Contenu 1</p>
				<p>Lorem ipsum dolor sit amet, consectetur.</p>
			</div>
			<div class="su-col quart">
				<p>Contenu 2</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>
			<div class="su-col quart">
				<p>Contenu 3</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="su-col quart">
				<p>Contenu 4</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="su-col quart">
				<p>Contenu 5</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="su-col quart">
				<p>Contenu 6</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</div>
	</div>
</div>

### Alignements horizontaux

Comme dit plus haut, le contenu de la grille libre est *automatiquement réparti dans l’espace accordé par le parent*. Pour plus de possibilités, les classes `su-row-left`, `su-row-center` et `su-row-right` permettent d’aligner les enfants de la grille (colonnes ou n’importe quel objet de niveau 1) à gauche, centré ou à droite.

**Pour un objet qui a une taille définie**, il n’y a besoin de rien de plus.

```html
<div class="demo-grille page">
	<div>
		Page
	</div>
	<div class="su-grid-auto su-row su-row-right">
		<button class="su-button su-secondary su-small su-margin-right-m">Bouton 1</button>
		<button class="su-button su-primary su-small">Bouton 2</button>
	</div>
</div>
```

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-grid-auto su-row su-row-right">
			<button class="su-button su-secondary su-small su-margin-right-m">Bouton 1</button>
			<button class="su-button su-primary su-small">Bouton 2</button>
		</div>
	</div>
</div>

**Pour un objet sans taille définie** (comme une colonne), il faut définir cette taille.

```html
<style>
    .taille-fixe {width: 100px}
</style>
<div class="demo-grille page">
	<div>
		Page
	</div>
	<div class="su-grid-auto su-row su-has-gutter su-row-center">
		<div class="su-col taille-fixe">Lorem ipsum dolor sit amet.</div>
		<div class="su-col taille-fixe">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
	</div>
</div>
```

<style>
    .taille-fixe {width: 100px}
</style>
<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-grid-auto su-row su-has-gutter su-row-center">
			<div class="su-col taille-fixe">Lorem ipsum dolor sit amet.</div>
			<div class="su-col taille-fixe">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
		</div>
	</div>
</div>

## Grilles imbriquées

Vous pouvez imbriquer une grille (standard ou automatique) dans une colonne. La seule contrainte est de **n'utiliser le conteneur que sur la première grille**.

```html
<div class="su-row">
	<div class="su-col-md-12 su-col-lg-16">
		<div class="su-grid-auto su-rowr">
			<div class="su-col">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<div class="su-col">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	</div>
	<div class="su-col-md-12 su-col-lg-8">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</div>
</div>
```

<div class="sipaui demo-conteneur">
	<div class="demo-grille page">
		<p>
			Page
		</p>
		<div class="su-container">
			<div class="su-row">
				<div class="su-col-md-12 su-col-lg-16">
					<div class="su-grid-auto su-row">
						<div class="su-col">
							<p class="contenu">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
						<div class="su-col">
							<p class="contenu">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
					</div>
				</div>
				<div class="su-col-md-12 su-col-lg-8">
					<p class="contenu">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>



<div id="liste-classes" class="control-titres">

## Grille standard&nbsp;: liste des classes disponibles
- `su-container`
- `su-row`
- `su-col-xs-1`…
- `su-visible-xs`… (dépendant du composant *Helpers*)
- `su-hidden-xs`… (dépendant du composant *Helpers*)
- `su-offset-xs-1`…
- `su-vertical-start`
- `su-vertical-center`
- `su-vertical-end`

## Grille libre&nbsp;: liste des classes disponibles
- `su-container`
- `su-grid-auto`
- `su-row`
- `su-row-left`
- `su-row-center`
- `su-row-right`
- `su-col`
- `su-has-gutter`
- `su-visible-xs`… (dépendant du composant *Helpers*)
- `su-hidden-xs`… (dépendant du composant *Helpers*)
- `su-vertical-start`
- `su-vertical-center`
- `su-vertical-end`
- `su-wrap`

</div>
