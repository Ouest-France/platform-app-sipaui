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

(conteneur)

<div class="sipaui">
	<div class="demo-grille page">
		<div>
			Page
		</div>
		<div class="su-grid-flex">
			<div class="contenu">
				Contenu
			</div>
		</div>
	</div>
</div>

### Décalage de colonnes

## La grille dans le conteneur de page

## Grille spécifique 

### Grille sans gouttière

### Grille automatique

### Grille imbriquée
(pas de conteneur)




<div id="liste-classes">

## Liste des classes disponibles
- `su-page-container`

</div>
