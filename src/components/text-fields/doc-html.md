# Text field/champs de texte

Ce composant regroupe les champs texte standards (input text, input number… et le text area). Les composants plus avancés (ie : le mot de passe) sont développés spécifiquement.

<!-- STORY -->

## Input text


### Standard
Input standard avec le texte expliquant qu'il est facultatif et un placeholder. Le style est appliqué par défaut sur les inputs dans un site SipaUI. Il est possible de forcer cet affichage avec la classe `su-input-text`.

```html
<label for="input1">Label <span class="su-label-garnish">(facultatif)</span></label>
<input id="input1" type="text" placeholder="Placeholder">
```
<label for="input1">Label <span class="su-label-garnish">(facultatif)</span></label><input id="input1" type="text" placeholder="Placeholder">

### Prérempli
Input standard prérempli.
```html
<label for="input2">Label</label>
<input id="input2" type="text" value="Champ prérempli">
```
<label for="input2">Label</label><input id="input2" type="text" value="Champ prérempli">

### Readonly
Input standard prérempli et en readonly.
```html
<label for="input3">Label</label>
<input id="input3" type="text" readonly value="Champ prérempli">
```
<label for="input2">Label</label><input id="input2" type="text" readonly value="Champ prérempli">

### Erreur
Input standard en erreur. **Pour pouvoir gérer les erreurs, chaque composant a besoin d’être inclus dans un parent qui portera la classe `su-error` si nécessaire.**

```html
<div class="su-error">
	<label for="input4">Label</label>
	<input id="input4" type="email" value="Jacques Cartier">
	<div class="su-error-message">Message d’erreur</div>
</div>
```
<div class="su-error"><label for="input4">Label</label><input id="input4" type="email" value="Jacques Cartier"><div class="su-error-message">Message d’erreur</div></div>

## Text area

```html
<label for="textarea">Label</label>
<textarea id="textarea"></textarea>
```
<label for="textarea">Label</label><textarea id="textarea"></textarea>
