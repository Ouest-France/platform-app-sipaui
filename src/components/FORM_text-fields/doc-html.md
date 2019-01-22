# Text field / Champs de texte

Ce composant regroupe les champs texte standards (input text, input number… et le text area). Les composants plus avancés (par exemple&nbsp;: le mot de passe) sont développés spécifiquement.

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

**Accessibilité**

Règles minimales&nbsp;:
- Chaque champ doit avoir un rôle `role="textbox"`.
- S’il s’agit d’un champ multilignes (`textarea`), rajouter `aria-multiline="true"`.
- Si le champ est en `readonly` mettre l’attribut `aria-readonly="true"`.
- Si le champ n’a pas de label, lui ajouter un `aria-label=""`.

Cerise&nbsp;:
- Utiliser l’attribut `aria-labelledby` (<a href="https://developer.mozilla.org/fr/docs/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-labelledby" target="_blank" rel="noopener">«&nbsp;Utiliser l'attribut aria-labelledby&nbsp;» chez MDN Web docs [moz://a]</a>).

<div class="alerte">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **helpers**,
- composant **FORM_labels**,
- composant **FORM_errors**

</div>

<!-- STORY -->

## Input text


### Standard
Input standard avec un placeholder. Le style est appliqué par défaut sur les inputs dans un site SipaUI. Il est possible de forcer cet affichage avec la classe `su-input-text`. Pour les labels (obligatoires), prendre le composant *FORM_labels*.

```html
<label for="input1">Label</label>
<input id="input1" name="input1" type="text" role="textbox" required>
```
<div class="sipaui">
	<label for="input1">Label</label>
	<input id="input1" name="input1" type="text" role="textbox" required>
</div>

### Placeholder
Pour rappel du doc design, le texte du placeholder est une description supplémentaire au label, il ne le substitue pas. Il doit guider l’utilisateur sur le format de données attendu.

```html
<label for="input1">Label</label>
<input id="input1" name="input1" type="text" role="textbox" required placeholder="Placeholder">
```
<div class="sipaui">
	<label for="input1">Label</label>
	<input id="input1" name="input1" type="text" role="textbox" required placeholder="Placeholder">
</div>

### Facultatif
Input facultatif. Pour le texte en complément dans le label, utiliser la classe `su-label-complement` du composant *FORM_labels*.
```html
<label for="input2">Label<span class="su-label-complement"> (facultatif)</span></label>
<input id="input2" name="input2" type="text" role="textbox">
```
<div class="sipaui">
	<label for="input2">Label<span class="su-label-complement"> (facultatif)</span></label>
	<input id="input2" name="input2" type="text" role="textbox">
</div>

### Prérempli
Input standard prérempli.
```html
<label for="input3">Label</label>
<input id="input3" name="input3" type="text" role="textbox" required value="Value">
```
<div class="sipaui">
	<label for="input3">Label</label>
	<input id="input3" name="input3" type="text" role="textbox" required value="Value">
</div>

### Readonly
Input standard prérempli et en readonly. Attention, si le `readonly` suffit à l’input pour changer son opacité, il faut une classe `su-disabled` sur le label pour le changer aussi. Cette classe est dépendante du composant *helpers*.
```html
<label for="input4" class="su-disabled">Label</label>
<input id="input4" name="input4" type="text" role="textbox" required readonly aria-readonly="true" value="Value">
```
<div class="sipaui">
	<label for="input4" class="su-disabled">Label</label>
	<input id="input4" name="input4" type="text" role="textbox" required readonly aria-readonly="true" value="Value">
</div>

### Erreur
Input standard en erreur. **Pour pouvoir gérer les erreurs, chaque composant a besoin d’être inclus dans un parent qui portera la classe `su-error` si nécessaire**. Cette classe, absente par défaut, sera positionnée par le développeur (soit par JS, soit par réponse serveur). Le message d’erreur sera identifié par la classe `su-error-message`. Ces 2 classes d’erreur sont issues du composant *FORM_errors*.

```html
<div class="su-error">
	<label for="input5">Label</label>
	<input id="input5" name="input5" type="email" role="textbox" required value="Value">
	<div class="su-error-message"><span class="su-icon-mini-alert"></span> Message d’erreur</div>
</div>
```
<div class="sipaui">
	<div class="su-error">
		<label for="input5">Label</label>
		<input id="input5" name="input5" type="email" role="textbox" required value="Value">
		<div class="su-error-message"><span class="su-icon-mini-alert"></span> Message d’erreur</div>
	</div>
</div>

### RAZ (remise à zéro)

Il s'agit d’un input standard amélioré. L’utilisateur peut vider tout le champ d’un coup en cliquant sur un bouton «&nbsp;croix&nbsp;». Le bouton apparaît quand le champ est en focus ET qu'il a du contenu.

#### CSS
Classes à appliquer par défaut&nbsp;: `su-input-icon` sur l’input pour réserver la place à droite et `su-input-action` sur le bouton.

#### JS

##### Gestion de l’affichage du bouton
Déclencheur à mettre sur l’input&nbsp;: `data-oftoggleclass='{"parent":".su-input-icon","klass":"su-js-button"}'`

##### Gestion du vidage du champ
Déclencheur à mettre sur le bouton&nbsp;: `data-ofemptyinput`

*Attention&nbsp;! Ne pas oublier le `type="button"` sur le `<button>`, sans quoi le bouton soumettra le formulaire&nbsp;!*

```html
<label for="input6">Label</label>
<div class="su-input-actions-1">
	<input id="input6" name="input6" type="text" data-oftoggleclass='{"parent":".su-input-actions-1","klass":"su-js-show"}' role="textbox" required required value="Lorem ipsum">
	<div class="su-input-actions-area">
		<button type="button" class="su-input-action" data-ofemptyinput>
			<span class="su-icon-close"></span>
		</button>
	</div>
</div>
```

<div class="sipaui">
	<label for="input6">Label</label>
	<div class="su-input-actions-1">
		<input id="input6" name="input6" type="text" data-oftoggleclass='{"parent":".su-input-actions-1","klass":"su-js-show"}' role="textbox" required required value="Lorem ipsum">
		<div class="su-input-actions-area">
			<button type="button" class="su-input-action" data-ofemptyinput>
				<span class="su-icon-close"></span>
			</button>
		</div>
	</div>
</div>


### Exemple de champ complexe (complément de label, placeholder, RAZ et gestion d’erreur)

```html
<div class="su-error">
	<label for="input7">Label<span class="su-label-complement"> (facultatif)</span></label>
	<div class="su-relative su-input-icon">
		<input id="input7" name="input7" type="text" role="textbox" placeholder="Placeholder" data-oftoggleclass='{"parent":".su-input-icon","klass":"su-js-button"}' required value="Value">
		<button type="button" class="su-input-action" data-ofemptyinput>
			<span class="su-icon-close"></span>
		</button>
	</div>
	<div class="su-error-message"><span class="su-icon-mini-alert"></span> Message d’erreur</div>
</div>
```
<div class="sipaui">
	<div class="su-error">
		<label for="input7">Label<span class="su-label-complement"> (facultatif)</span></label>
		<div class="su-input-actions-1">
			<input id="input7" name="input7" type="text" role="textbox" placeholder="Placeholder" data-oftoggleclass='{"parent":".su-input-actions-1","klass":"su-js-show"}' required value="Value">
			<div class="su-input-actions-area">
				<button type="button" class="su-input-action" data-ofemptyinput>
					<span class="su-icon-close"></span>
				</button>
			</div>
		</div>
		<div class="su-error-message"><span class="su-icon-mini-alert"></span> Message d’erreur</div>
	</div>
</div>

## Textarea
Textarea standard. Il est possible de forcer cet affichage avec la classe `su-textarea`.
```html
<label for="textarea">Label</label>
<textarea id="textarea" name="textarea" role="textbox" aria-multiline="true" required></textarea>
```
<div class="sipaui">
	<label for="textarea">Label</label>
	<textarea id="textarea" required></textarea>
</div>

<div id="liste-classes">

## Liste des classes disponibles
- `su-input-text` (si besoin de surcharge)
- `su-input-icon`
- `su-input-action`
- `su-js-button` (positioné par le JS)
- `su-textarea` (si besoin de surcharge)

### Classes annexes
- `su-label` (dépendant du composant *FORM_labels*, si besoin de surcharge)
- `su-label-complement` (dépendant du composant *FORM_labels*)
- `su-error` (dépendant du composant *FORM_errors*)
- `su-error-message` (dépendant du composant *FORM_errors*)
- `su-disabled` (dépendant du composant *helpers*)

</div>
