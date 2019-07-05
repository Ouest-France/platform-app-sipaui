# Password fields / Champs de mot de passe

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

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Helpers**,
- composant **Labels**,
- composant **Errors**

</div>

<!-- STORY -->

## Input password


### Standard
Input standard avec un placeholder. Le style est appliqué par défaut sur les inputs dans un site SipaUI. Il est possible de forcer cet affichage avec la classe `su-input-text`. Pour les labels (obligatoires), prendre le composant *Labels*.

```html
<label for="input1">Label</label>
<div class="su-password">
	<div class="su-fake-field">
		<input id="input1" name="input1" type="password" required>
	</div>
	<div class="su-input-actions-area">
		<button type="button" class="su-input-action su-password-toggle">
			<i class="su-icon">montrer</i>
		</button>
	</div>
</div>
```
<div class="sipaui">
	<label for="input1">Label</label>
	<div class="su-password">
		<div class="su-fake-field">
			<input id="input1" name="input1" type="password" required>
		</div>
		<div class="su-input-actions-area">
			<button type="button" class="su-input-action su-password-toggle">
				<i class="su-icon">montrer</i>
			</button>
		</div>
	</div>
</div>

### Inscription
Input standard avec un placeholder. Le style est appliqué par défaut sur les inputs dans un site SipaUI. Il est possible de forcer cet affichage avec la classe `su-input-text`. Pour les labels (obligatoires), prendre le composant *Labels*.

```html
<label for="input2">Label</label>
<div class="su-password">
	<div class="su-fake-field">
		<input id="input2" name="input2" type="password" required>
	</div>
	<div class="su-input-actions-area">
		<button type="button" class="su-input-action su-password-toggle">
			<i class="su-icon">montrer</i>
		</button>
	</div>
	<div class="su-conditions">
		<span class="su-condition-character-length"><i class="su-icon">valid</i>Au moins 8 caractères</span>	
		<span class="su-condition-uppercase"><i class="su-icon">valid</i>Au moins 1 majuscule</span>	
		<span class="su-condition-lowercase"><i class="su-icon">valid</i>Au moins 1 minuscule</span>	
		<span class="su-condition-number"><i class="su-icon">valid</i>Au moins 1 chiffre</span>	
	</div>
</div>
```
<div class="sipaui">
	<label for="input2">Label</label>
	<div class="su-password">
		<div class="su-fake-field">
			<input id="input2" name="input2" type="password" required>
		</div>
		<div class="su-input-actions-area">
			<button type="button" class="su-input-action su-password-toggle">
				<i class="su-icon">montrer</i>
			</button>
		</div>
		<div class="su-conditions">
			<span class="su-condition-character-length"><i class="su-icon">valid</i>Au moins 8 caractères</span>	
			<span class="su-condition-uppercase"><i class="su-icon">valid</i>Au moins 1 majuscule</span>	
			<span class="su-condition-lowercase"><i class="su-icon">valid</i>Au moins 1 minuscule</span>	
			<span class="su-condition-number"><i class="su-icon">valid</i>Au moins 1 chiffre</span>	
		</div>
	</div>
</div>


### Erreur
Input standard avec un placeholder. Le style est appliqué par défaut sur les inputs dans un site SipaUI. Il est possible de forcer cet affichage avec la classe `su-input-text`. Pour les labels (obligatoires), prendre le composant *Labels*.

```html
<label for="input3">Label</label>
<div class="su-password">
	<div class="su-fake-field">
		<input id="input3" name="input3" type="password" required>
	</div>
</div>
```
<div class="sipaui">
	<label for="input2">Label</label>
	<div class="su-password su-error">
		<div class="su-fake-field">
			<input id="input3" name="input3" type="password" required value="Erreur">
		</div>
		<div class="su-input-actions-area">
			<button type="button" class="su-input-action su-password-toggle">
				<i class="su-icon">montrer</i>
			</button>
		</div>
		<div class="su-conditions">
			<span class="su-condition-character-length su-conditions-error"><i class="su-icon">invalid</i>Au moins 8 caractères</span>	
			<span class="su-condition-uppercase su-conditions-success"><i class="su-icon">valid</i>Au moins 1 majuscule</span>	
			<span class="su-condition-lowercase su-conditions-success"><i class="su-icon">valid</i>Au moins 1 minuscule</span>	
			<span class="su-condition-number su-conditions-error"><i class="su-icon">invalid</i>Au moins 1 chiffre</span>	
		</div>
	</div>
</div>