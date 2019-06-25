# Errors / Erreurs

Ce composant est une dépendance pour plusieurs composants (champs de texte, menus déroulants, cases-à-cocher)…

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),

</div>



## Standard
Pour pouvoir être utilisé, il faut 2 objets dans le DOM&nbsp;: une `<div>` englobant le composant qui devra gérer l’erreur et une `<div class="su-error-message">` contenant le texte du message d’erreur. L’affichage du message d’erreur ainsi que l’éventuelle modification visuelle du composant en erreur se fera par l’ajout de la classe `su-error` sur le 1<sup>er</sup> `<div>`.

Le positionnement de ce message dépend du composant auquel il est associé.

### Erreur non affichée

```html
<div>
	<div class="su-error-message">Message d’erreur</div>
</div>
```
<div class="sipaui">
	<div>
		<div class="su-error-message">Message d’erreur</div>
	</div>
</div>

### Erreur affichée

```html
<div class="su-error">
	<div class="su-error-message">Message d’erreur</div>
</div>
```
<div class="sipaui">
	<div class="su-error">
		<div class="su-error-message">Message d’erreur</div>
	</div>
</div>

### Exemple de message d’erreur appliqué à un champ texte

```html
<div class="su-error">
	<label for="input1">Label</label>
	<input id="input1" name="input1" type="email" role="textbox" required value="Value">
	<div class="su-error-message">Message d’erreur</div>
</div>
```
<div class="sipaui">
	<div class="su-error">
		<label for="input1">Label</label>
		<input id="input1" name="input1" type="email" role="textbox" required value="Value">
		<div class="su-error-message">Message d’erreur</div>
	</div>
</div>


<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-error`
- `su-error-message`

</div>
