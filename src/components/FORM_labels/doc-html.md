# Labels / Labels

Ce composant regroupe les labels précédant les éléments de formulaire (champs texte, listes déroulantes…). Ce composant seul n’a pas d’intérêt, il est une dépendance de la plupart des composants de formulaire.

<a href="#liste-classes" target="_self" class="su-link-button">Liste des classes disponibles</a>

<div class="alerte su-margin-top-xl">
	<h2>Dépendances</h2>
	<p class="su-margin-0">Ce composant est dépendant des composants&nbsp;:</p>
	<ul>
		<li>helpers</li>
	</ul>
</div>

<!-- STORY -->

## Standard
Label standard pour un composant de formulaire requis (`required`). Le style est appliqué par défaut sur les labels dans un site SipaUI. Il est possible de forcer cet affichage avec la classe `su-label`.

```html
<label for="input1">Label</label>
```
<label for="input1">Label</label>

## Facultatif
Label standard pour un composant de formulaire facultatif. Utiliser la classe `su-label-complement` sur le texte «&nbsp;facultatif&nbsp;».

```html
<label for="input2">Label<span class="su-label-complement"> (facultatif)</span></label>
```
<label for="input2">Label<span class="su-label-complement"> (facultatif)</span></label>

## Readonly ou inactif
Label standard d’un composant en readonly ou inactif. Classe `su-disabled` sur le label. Cette classe est dépendante du composant *helpers*.

```html
<label for="input3" class="su-disabled">Label</label>
```
<label for="input3" class="su-disabled">Label</label>

<div id="liste-classes">

## Liste des classes disponibles
- `su-label` (si besoin de surcharge)
- `su-label-complement`

### Classes annexes
- `su-disabled` (dépendant du composant *helpers*)

</div>
