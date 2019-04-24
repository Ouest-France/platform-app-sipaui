# Steppers / Indicateurs de progression


<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`).

</div>

<!-- STORY -->

## Indicateur de progression basique

Un indicateur de progression est en fait une simple liste ordonnée (`<ol>`) redessinnée. Il peut être composé de **3, 4 ou 5 étapes**, sa couleur peut dépendre **du thème du site ou d’un sous-thème** et avoir au choix **un chiffre ou une coche en étape finale validée**.

### À 3 étapes

```html

```


<div class="sipaui">
	<ol class="su-stepper surcharge-storybook">
		<li class="su-done">
			<div class="su-stepper-step">
				<span>hceiuz fhuezqif zi hfezo</span>
			</div>
		</li>
		<li class="su-enabled">
			<div class="su-stepper-step">
				<span>jvidso fjqiodf voif hiodwjf</span>
			</div>
		</li>
		<li>
			<div class="su-stepper-step">
				<span>Étape 3</span>
			</div>
		</li>
	</ol>
</div>

### À 5 étapes

### Dans un sous-thème

Un stepper peut s'adapter à un sous-thème. Voici un exemple avec l’abonnement.

### Variation avec une coche finale

## Indicateur de progression avec contenu lié

<div id="liste-classes">

## Liste des classes disponibles
- `su-stepper`
- `su-stepper-step`

</div>
