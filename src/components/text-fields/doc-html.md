# Text field/champs de texte

Ce composant regroupe les champs texte standards (input text, input number… et le text area). Les composants plus avancés (ie&nbsp;: le mot de passe) sont développés spécifiquement.

<a href="#liste-classes" target="_self"  role="button" class="su-button su-secondary su-small">&gt;&nbsp;Liste des classes disponibles</a>

**Accessibilité**

Règles minimales&nbsp;:
- Chaque champ doit avoir un rôle `role="textbox"`.
- S’il s’agit d’un champ multilignes (`textarea`), rajouter `aria-multiline="true"`.
- Si le champ est en `readonly` mettre l’attribut `aria-readonly="true"`.
- Si le champ n’a pas de label, lui ajouter un `aria-label=""`.

Cerise&nbsp;:
- utiliser l’attribut `aria-labelledby` (<a href="https://developer.mozilla.org/fr/docs/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-labelledby" target="_blank" rel="noopener" class="su-link">pour en savoir plus</a>)

<!-- STORY -->

## Input text


### Standard
Input standard avec le texte expliquant qu’il est facultatif et un placeholder. Le style est appliqué par défaut sur les inputs dans un site SipaUI. Il est possible de forcer cet affichage avec les classes `su-label` et `su-input-text`. Pour le texte en complément dans le label, utiliser la classe `su-label-complement`.

```html
<label for="input1">Label<span class="su-label-complement"> (facultatif)</span></label>
<input id="input1" name="input1" type="text" role="textbox" placeholder="Exemple de contenu attendu">
```
<label for="input1">Label<span class="su-label-complement"> (facultatif)</span></label>
<input id="input1" name="input1" type="text" role="textbox" placeholder="Exemple de contenu attendu">

### Prérempli
Input standard prérempli.
```html
<label for="input2">Label</label>
<input id="input2" name="input2" type="text" role="textbox" required value="Champ prérempli">
```
<label for="input2">Label</label>
<input id="input2" name="input2" type="text" role="textbox" required value="Champ prérempli">

### Readonly
Input standard prérempli et en readonly.
```html
<label for="input3">Label</label>
<input id="input3" name="input3" type="text" role="textbox" required readonly aria-readonly="true" value="Champ prérempli">
```
<label for="input2">Label</label>
<input id="input2" name="input3" type="text" role="textbox" required readonly aria-readonly="true" value="Champ prérempli">

### Erreur
Input standard en erreur. **Pour pouvoir gérer les erreurs, chaque composant a besoin d’être inclus dans un parent qui portera la classe `su-error` si nécessaire**. Le message d’erreur sera identifé par la classe `su-error-message`.

```html
<div class="su-error">
	<label for="input4">Label</label>
	<input id="input4" name="input4" type="email" role="textbox" required value="Jacques Cartier">
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>
```
<div class="su-error">
	<label for="input4">Label</label>
	<input id="input4" name="input4" type="email" role="textbox" required value="Jacques Cartier">
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>

### RAZ (remise à zéro)
Input standard avec l’icône pour vider le champ quand il est en focus et contient du contenu. Classes utilisées&nbsp;: `su-input-icon` sur l’input pour réserver la place à droite et `su-input-action` sur le bouton.

Le JS ajoute la classe `su-js-button` sur le `<div>` parent de l’input (celui qui a déjà la classe `su-input-icon`). Déclencheur&nbsp;: focus sur l’input + au moins un caractère dedans -> la croix apparaît lors de la saisie dans un champ vide, mais aussi au clic dans un champ pré-rempli (qui n’est pas en readonly bien sûr).

*Attention&nbsp;! Ne pas oublier le `type="button"` sur le `<button>`, sans quoi le bouton soumettra le formulaire&nbsp;!*

```html
<label for="input5">Label</label>
<div class="su-input-icon">
	<input id="input5" name="input5" type="text" role="textbox" placeholder="Placeholder" required>
	<button type="button" class="su-input-action">
		<span class="su-icon-close"></span>
	</button>
</div>
```

<div><!-- échappement markdown -->
<label for="input5">Label</label>
<div class="su-input-icon">
	<input id="input5" name="input5" type="text" role="textbox" placeholder="Placeholder" required>
	<button type="button" class="su-input-action">
		<span class="su-icon-close"></span>
	</button>
</div>
</div>

### Exemple complexe (RAZ + gestion d’erreur)


```html
<div class="su-error">
	<label for="input6">Label<span class="su-label-complement"> (facultatif)</span></label>
	<div class="su-relative">
		<input id="input6" name="input6" type="text" role="textbox" placeholder="Placeholder" class="su-input-icon" required value="Jacques Cartier">
		<button type="button" class="su-input-action" hidden>
			<span class="su-icon-close"></span>
		</button>
	</div>
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>
```

<div class="su-error">
	<label for="input6">Label<span class="su-label-complement"> (facultatif)</span></label>
	<div class="su-relative">
		<input id="input6" name="input6" type="text" role="textbox" placeholder="Placeholder" class="su-input-icon" required value="Jacques Cartier">
		<button type="button" class="su-input-action" hidden>
			<span class="su-icon-close"></span>
		</button>
	</div>
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>

## Textarea
Textarea standard. Il est possible de forcer cet affichage avec la classe `su-textarea`.
```html
<label for="textarea">Label</label>
<textarea id="textarea" name="textarea" role="textbox" aria-multiline="true" required></textarea>
```
<label for="textarea">Label</label>
<textarea id="textarea" required></textarea>

<div id="liste-classes">

## Liste des classes disponibles
- `su-label` (si besoin de surcharge)
- `su-label-complement`
- `su-input-text` (si besoin de surcharge)
- `su-input-icon`
- `su-input-action`
- `su-js-button` (positioné par le JS)
- `su-textarea` (si besoin de surcharge)
- `su-disabled`
- `su-error`
- `su-error-message`

</div>
