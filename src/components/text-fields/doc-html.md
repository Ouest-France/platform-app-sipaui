# Text field/champs de texte

Ce composant regroupe les champs texte standards (input text, input number… et le text area). Les composants plus avancés (ie&nbsp;: le mot de passe) sont développés spécifiquement.

<p style="color: red;">!!&nbsp;ATTENTION&nbsp;: la police d’icône n’est pas encore intégrée à SipaUI. Par conséquent, le text-field avec icône n’est pas présenté. Pour la même raison, le message d’erreur n’est pas confrome.&nbsp;!!</p>

<a href="#liste-classes" target="_self" class="su-link">&gt;&nbsp;Liste des classes disponibles</a>

<!-- STORY -->

## Input text


### Standard
Input standard avec le texte expliquant qu'il est facultatif et un placeholder. Le style est appliqué par défaut sur les inputs dans un site SipaUI. Il est possible de forcer cet affichage avec les classes `su-label` et `su-input-text`. Pour le texte en complément dans le label, utiliser la classe `su-label-complement`

```html
<label for="input1">Label<span class="su-label-complement"> (facultatif)</span></label>
<input id="input1" type="text" placeholder="Placeholder">
```
<label for="input1">Label<span class="su-label-complement"> (facultatif)</span></label><input id="input1" type="text" placeholder="Placeholder">

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
Input standard en erreur. **Pour pouvoir gérer les erreurs, chaque composant a besoin d’être inclus dans un parent qui portera la classe `su-error` si nécessaire**. Le message d’erreur sera identifé par la classe `su-error-message`.

```html
<div class="su-error">
	<label for="input4">Label</label>
	<input id="input4" type="email" value="Jacques Cartier">
	<div class="su-error-message">Message d’erreur</div>
</div>
```
<div class="su-error"><label for="input4">Label</label><input id="input4" type="email" value="Jacques Cartier"><div class="su-error-message">Message d’erreur</div></div>

## Textarea
Textarea standard. Il est possible de forcer cet affichage avec la classe `su-textarea`.
```html
<label for="textarea">Label</label>
<textarea id="textarea"></textarea>
```
<label for="textarea">Label</label><textarea id="textarea"></textarea>

<div id="liste-classes">

## Liste des classes disponibles
- `su-label` (si besoin de surcharge)
- `su-label-complement`
- `su-input-text` (si besoin de surcharge)
- `su-textarea` (si besoin de surcharge)
- `su-disabled`
- `su-error`
- `su-error-message`

</div>
