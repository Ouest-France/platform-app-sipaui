# Grids / Grilles

SipaUI utilise une grille de mise en page qui lui est propre. Elle est **fluide en 6 colonnes** sur mobile (sous 768px) et **fixe par paliers en 24 colonnes** sur tablette en mode paysage et desktop (cf. la partie «&nbsp;design&nbsp;» ou tester la grille ci-dessous). Elle se veut très légère contrairement à celle proposée par les gros frameworks comme Bootstrap.

D’un point de vue technique, la grille s'appuie sur le modèle *Flexbox*, la technologie *Grids* n’étant pas compatible Internet Explorer.

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>


<!-- STORY -->

## Le conteneur de page

Le conteneur ne fait pas partie à proprement parler de la grille. Il sert à déterminer la largeur que prend la grille principale de la page (celle de premier niveau). **Si vous avez besoin d’insérer une grille dans un sous-niveau, il n’y aura plus besoin de conteneur**. Exemple de grille multi-niveau&nbsp;: Page / conteneur / grille n1 / grille n2…

Il utilise la classe `su-page-container`.

```html
<div class="demo-grille page">
	<div>
		Page
	</div>
	<div class="su-page-container">
		<div class="contenu">
			Contenu
		</div>
	</div>
</div>
```

<div class="sipaui demo-conteneur">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-page-container">
			<div class="contenu">
				Contenu
			</div>
		</div>
	</div>
</div>


## La grille standard

Exemple de la grille standard, 6 colonnes sur petits écrans et 24 sur grands écrans avec une gouttière de 20px.


<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-grid-flex su-row">
			<div class="su-col"></div>
			<div class="su-col"></div>
			<div class="su-col"></div>
			<div class="su-col"></div>
			<div class="su-col"></div>
			<div class="su-col"></div>
		</div>
	</div>
</div>

### Décalage de colonnes

## La grille dans le conteneur de page

**Rappel&nbsp;**: si vous intégrer une grille dans une page complète, elle doit être intégrée dans un conteneur `su-page-container` afin de gérer son positionnement horizontal dans la page.

## Grille spécifique 

### Grille sans gouttière

### Grille automatique

SipaUI propose une grille de colonnes automatiques en flex. Il suffit d’ajouter la classe `su-grid-auto` au système de grille (`su-grid-flex su-row`). Avec ce système, il est possible de générer une suite de colonnes en nombre variable qui se répartiront automatiquement dans l’espace accordé par le parent. Pour cela, il suffit de créer autant de colonnes que souhaité avec la classe `su-col`. **Elles seront flexibles mais pas responsives** (le nombre colonne sera toujours le même, quel que soit la taille de l’écran).  Ces colonnes intègrent automatiquement la gouttière standard que l’on peut bien sûr supprimer avec la classe `su-no-gutter`.

Il faut toutefois noter que ce système de colonage automatique est un outil pour des cas particuliers, mais **il ne doit en aucun cas remplacer la grille standard pour la mise en page générale d’un site**.

#### Exemple

```html
<div class="demo-grille page">
	<div>
		Page
	</div>
	<div class="su-grid-flex su-grid-auto su-row">
		<div class="su-col"></div>
		<div class="su-col"></div>
		<div class="su-col"></div>
		<div class="su-col"></div>
	</div>
</div>
```

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-grid-flex su-grid-auto su-row">
			<div class="su-col"></div>
			<div class="su-col"></div>
			<div class="su-col"></div>
			<div class="su-col"></div>
		</div>
	</div>
</div>


#### Exemple sans gouttière

```html
<div class="demo-grille page">
	<div>
		Page
	</div>
	<div class="su-grid-flex su-grid-auto su-row su-no-gutter">
		<div class="su-col"></div>
		<div class="su-col"></div>
		<div class="su-col"></div>
		<div class="su-col"></div>
		<div class="su-col"></div>
		<div class="su-col"></div>
	</div>
</div>
```

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-grid-flex su-grid-auto su-row su-no-gutter">
			<div class="su-col"></div>
			<div class="su-col"></div>
			<div class="su-col"></div>
			<div class="su-col"></div>
			<div class="su-col"></div>
			<div class="su-col"></div>
		</div>
	</div>
</div>

### Grille imbriquée
(pas de conteneur)




<div id="liste-classes">

## Liste des classes disponibles
- `su-page-container`
- `su-grid-flex`
- `su-row`
- `su-col`
- `su-no-gutter`

</div>
