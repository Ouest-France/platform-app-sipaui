# Text field / Champs de texte

Ce composant regroupe les champs texte standards (input text, input number… et le text area). Les composants plus avancés (par exemple&nbsp;: le mot de passe) sont développés spécifiquement.

<p class="alerte"><span class="su-icon-alert"></span> <em>SipaUI n’intégrant pas pour l’instant de JS, les comportements dynamiques seront à mettre en place par les équipes intégrant nos composants.</em></p>

<a href="#liste-classes" target="_self" class="su-link-button">Liste des classes disponibles</a>

**Accessibilité**

Règles minimales&nbsp;:
- Chaque champ doit avoir un rôle `role="textbox"`.
- S’il s’agit d’un champ multilignes (`textarea`), rajouter `aria-multiline="true"`.
- Si le champ est en `readonly` mettre l’attribut `aria-readonly="true"`.
- Si le champ n’a pas de label, lui ajouter un `aria-label=""`.

Cerise&nbsp;:
- Utiliser l’attribut `aria-labelledby` (<a href="https://developer.mozilla.org/fr/docs/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-labelledby" target="_blank" rel="noopener" class="su-link">«&nbsp;Utiliser l'attribut aria-labelledby&nbsp;» chez MDN Web docs [moz://a]</a>).

<!-- STORY -->

## Input text


### Standard
Input standard avec un placeholder. Le style est appliqué par défaut sur les inputs dans un site SipaUI. Il est possible de forcer cet affichage avec les classes `su-label` et `su-input-text`.

```html
<label for="input1">Label</label>
<input id="input1" name="input1" type="text" role="textbox" placeholder="Placeholder">
```
<label for="input1">Label</label>
<input id="input1" name="input1" type="text" role="textbox" placeholder="Placeholder">

### Facultatif
Input facultatif. Pour le texte en complément dans le label, utiliser la classe `su-label-complement`.
```html
<label for="input2">Label<span class="su-label-complement"> (facultatif)</span></label>
<input id="input2" name="input2" type="text" role="textbox" required placeholder="Placeholder">
```
<label for="input2">Label<span class="su-label-complement"> (facultatif)</span></label>
<input id="input2" name="input2" type="text" role="textbox" required placeholder="Placeholder">

### Prérempli
Input standard prérempli.
```html
<label for="input2">Label</label>
<input id="input2" name="input2" type="text" role="textbox" required value="Value">
```
<label for="input2">Label</label>
<input id="input2" name="input2" type="text" role="textbox" required value="Value">

### Readonly
Input standard prérempli et en readonly. Attention, si le `readonly` suffit à l’input pour changer son opacité, il faut une classe `su-disabled` sur le label pour le changer aussi.
```html
<label for="input3" class="su-disabled">Label</label>
<input id="input3" name="input3" type="text" role="textbox" required readonly aria-readonly="true" value="Value">
```
<label for="input2" class="su-disabled">Label</label>
<input id="input2" name="input3" type="text" role="textbox" required readonly aria-readonly="true" value="Value">

### Erreur
Input standard en erreur. **Pour pouvoir gérer les erreurs, chaque composant a besoin d’être inclus dans un parent qui portera la classe `su-error` si nécessaire**. Cette classe, absente par défaut, sera positionnée par le développeur (soit dynamiquement, soit par réponse serveur). Le message d’erreur sera identifé par la classe `su-error-message`.

```html
<div class="su-error">
	<label for="input4">Label</label>
	<input id="input4" name="input4" type="email" role="textbox" required value="Value">
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>
```
<div class="su-error">
	<label for="input4">Label</label>
	<input id="input4" name="input4" type="email" role="textbox" required value="Value">
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>

### RAZ (remise à zéro)

Il s'agit d’un input standard amélioré. L’utilisateur peut vider tout le champ d’un coup en cliquant sur un bouton «&nbsp;croix&nbsp;». Le bouton apparaît quand le champ est en focus ET qu'il a du contenu.

Classes à appliquer par défaut&nbsp;: `su-input-icon` sur l’input pour réserver la place à droite et `su-input-action` sur le bouton.

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

#### Interractivité à créer en JS
 
##### 1. Affichage du bouton
 
Le JS doit ajouter la classe `su-js-button` sur le `<div>` parent de l’input (qui a déjà la classe `su-input-icon`). Déclencheur&nbsp;: focus sur l’input + au moins un caractère dedans -> la croix apparaît lors de la saisie dans un champ vide, mais aussi au clic dans un champ pré-rempli (qui n’est pas en readonly bien sûr).

```html
<label for="input5">Label</label>
<div class="su-input-icon">
	<input id="input5" name="input5" type="text" data-oftoggleclass='{"parent":".su-input-icon","klass":"su-js-button"}' role="textbox" placeholder="Placeholder" required required value="Lorem ipsum">
	<button type="button" class="su-input-action">
		<span class="su-icon-close"></span>
	</button>
</div>
```

<div><!-- échappement markdown -->
<label for="input5">Label</label>
<div class="su-input-icon">
	<input id="input5" name="input5" type="text" data-oftoggleclass='{"parent":".su-input-icon","klass":"su-js-button"}' role="textbox" placeholder="Placeholder" required value="Lorem ipsum">
	<button type="button" class="su-input-action">
		<span class="su-icon-close"></span>
	</button>
</div>
</div>

##### 2. Vider le champ

Cliquer sur la croix supprime l’attribut `value` de l’ìnput.


### Exemple de champ complexe (complément de label, placeholder, RAZ et gestion d’erreur)

```html
<div class="su-error">
	<label for="input6">Label<span class="su-label-complement"> (facultatif)</span></label>
	<div class="su-relative">
		<input id="input6" name="input6" type="text" role="textbox" placeholder="Placeholder" class="su-input-icon" required value="Value">
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
		<input id="input6" name="input6" type="text" role="textbox" placeholder="Placeholder" class="su-input-icon" required value="Value">
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
- `su-disabled` (dépendant du composant *helpers*)
- `su-error`
- `su-error-message`

</div>
