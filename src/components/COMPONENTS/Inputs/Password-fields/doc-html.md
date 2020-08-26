# Password fields / Champs de mot de passe

Ce composant regroupe les mots de passe pour la **connexionn** (mot de passe simple) et pour la **création d’un compte** (création du mot de passe obéissant aux règles de sécurité de SIPA).

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>


<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Text-fields**,
- composant **Helpers**,
- composant **Icons**,
- composant **Labels**,
- composant **Errors**

</div>


## Input password

### Simple (connexion)
Le mot de passe simple est utilisé dans les formulaires de *connexion*. Il sert à récupérer le mot de passe de l’utilisateur pour le comparer à celui stocké en base et vérifier l’identité. Ce composant ne vérifie pas la structure du mot de passe pour s'assurer de sa conformité avec les règles de sécurité SIPA. Pour des raisons de sécurité, ce composant **ne doit pas utiliser de placeholder**.

Le style visuel est celui appliqué par défaut sur les inputs de type texte dans un site SipaUI (dépendance au composant *text-fields*), auquel est ajouté un bouton pour afficher en clair le texte du mot de passe ou le masquer. Nota bene, le composant prend en compte la zone nécessaire à l’affichage du picto de gestion des mots de passe sur macOS et iOS pour Safari.

Pour les labels (obligatoires), prendre le composant *Labels*.

```html
<label for="input1">Label</label>
<div class="su-password su-input-actions-1">
	<input id="input1" name="input1" type="password" role="textbox" required>
	<div class="su-input-actions-area">
		<button type="button" class="su-input-action su-password-toggle">
			<i class="su-icon">montrer</i>
		</button>
	</div>
</div>
```
<div class="sipaui">
	<label for="input1">Label</label>
	<div class="su-password su-input-actions-1">
		<input id="input1" name="input1" type="password" role="textbox" required>
		<div class="su-input-actions-area">
			<button type="button" class="su-input-action su-password-toggle">
				<i class="su-icon">montrer</i>
			</button>
		</div>
	</div>
</div>

### Avec gestion des règles de sécurité (création de compte)
Ce composant est utilisé dans les formulaires de *création d’un compte*. Il sert à l’utilisateur pour enregistrer son mot de passe en base. Contrairement à la version «&nbsp;connexion&nbsp;», ce composant vérifie la structure du mot de passe pour s'assurer de sa conformité avec les règles de sécurité SIPA. Pour des raisons de sécurité, ce composant **ne doit pas utiliser de placeholder**.

Il est identique à celui ci-dessus (dépendance au composant *text-fields*), mais on lui a ajouté la liste des règles à respecter. Quand l’utilisateur saisi son mot de passe, il y a une vérification dynamique qui coche les règles respectées au fur et à mesure.

Pour les labels (obligatoires), prendre le composant *Labels*.

```html
<label for="input2">Label</label>
<div class="su-password su-input-actions-1">
	<input id="input2" name="input2" type="password" role="textbox" required>
	<div class="su-input-actions-area">
		<button type="button" class="su-input-action su-password-toggle">
			<i class="su-icon">montrer</i>
		</button>
	</div>
	<div class="su-error-message">Ce mot de passe n'est pas conforme aux exigences minimales.</div>
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
	<div class="su-password su-input-actions-1">
		<input id="input2" name="input2" type="password" role="textbox" required>
		<div class="su-input-actions-area">
			<button type="button" class="su-input-action su-password-toggle">
				<i class="su-icon">montrer</i>
			</button>
		</div>
		<div class="su-error-message">Ce mot de passe n'est pas conforme aux exigences minimales.</div>
		<div class="su-conditions">
			<span class="su-condition-character-length"><i class="su-icon">valid</i>Au moins 8 caractères</span>	
			<span class="su-condition-uppercase"><i class="su-icon">valid</i>Au moins 1 majuscule</span>	
			<span class="su-condition-lowercase"><i class="su-icon">valid</i>Au moins 1 minuscule</span>	
			<span class="su-condition-number"><i class="su-icon">valid</i>Au moins 1 chiffre</span>	
		</div>
	</div>
</div>


### Readonly

Mot de passe standard en readonly. Attention, si le readonly suffit à l’input pour changer son opacité, il faut une classe su-disabled sur le label pour le changer aussi. Cette classe est dépendante du composant Helpers.

```html
<label for="input3" class="su-disabled">Label</label>
<div class="su-password su-input-actions-1">
	<input id="input3" name="input3" type="password" role="textbox" required readonly aria-readonly="true">
	<div class="su-input-actions-area">
		<button type="button" class="su-input-action su-password-toggle">
			<i class="su-icon">montrer</i>
		</button>
	</div>
</div>
```
<div class="sipaui">
	<label for="input3" class="su-disabled">Label</label>
	<div class="su-password su-input-actions-1">
		<input id="input3" name="input3" type="password" role="textbox" required readonly aria-readonly="true" >
		<div class="su-input-actions-area">
			<button type="button" class="su-input-action su-password-toggle">
				<i class="su-icon">montrer</i>
			</button>
		</div>
	</div>
</div>


## Gestion des erreurs

Nous mettons à disposition les classes nécessaires à l’affichage des erreurs&nbsp;: `su-error` (dépendance au composant *error*) et `su-conditions-error`. Par contre, la méthode de remontée de ces erreurs est au choix de chacun.

### Sur mot de passe de connexion

```html
<label for="input4">Label</label>
<div class="su-password su-input-actions-1 su-error">
	<input id="input4" name="input4" type="password" role="textbox" required value="Erreur">
	<div class="su-input-actions-area">
		<button type="button" class="su-input-action su-password-toggle">
			<i class="su-icon">montrer</i>
		</button>
	</div>
	<div class="su-error-message">Message d’erreur</div>
</div>
```
<div class="sipaui">
	<label for="input4">Label</label>
	<div class="su-password su-input-actions-1 su-error">
		<input id="input4" name="input4" type="password" role="textbox" required value="Erreur">
		<div class="su-input-actions-area">
			<button type="button" class="su-input-action su-password-toggle">
				<i class="su-icon">montrer</i>
			</button>
		</div>
		<div class="su-error-message">Message d’erreur.</div>
	</div>
</div>


### Sur mot de passe de création de compte

```html
<label for="input5">Label</label>
<div class="su-password su-input-actions-1 su-error">
	<input id="input5" name="input5" type="password" role="textbox" required value="Erreur">
	<div class="su-input-actions-area">
		<button type="button" class="su-input-action su-password-toggle">
			<i class="su-icon">montrer</i>
		</button>
	</div>
	<div class="su-error-message">Ce mot de passe n'est pas conforme aux exigences minimales.</div>
	<div class="su-conditions">
		<span class="su-condition-character-length su-conditions-error"><i class="su-icon">invalid</i>Au moins 8 caractères</span>	
		<span class="su-condition-uppercase su-conditions-success"><i class="su-icon">valid</i>Au moins 1 majuscule</span>	
		<span class="su-condition-lowercase su-conditions-success"><i class="su-icon">valid</i>Au moins 1 minuscule</span>	
		<span class="su-condition-number su-conditions-error"><i class="su-icon">invalid</i>Au moins 1 chiffre</span>	
	</div>
</div>
```
<div class="sipaui">
	<label for="input5">Label</label>
	<div class="su-password su-input-actions-1 su-error">
		<input id="input5" name="input5" type="password" role="textbox" required value="Erreur">
		<div class="su-input-actions-area">
			<button type="button" class="su-input-action su-password-toggle">
				<i class="su-icon">montrer</i>
			</button>
		</div>
		<div class="su-error-message">Ce mot de passe n'est pas conforme aux exigences minimales.</div>
		<div class="su-conditions">
			<span class="su-condition-character-length su-conditions-error"><i class="su-icon">invalid</i>Au moins 8 caractères</span>	
			<span class="su-condition-uppercase su-conditions-success"><i class="su-icon">valid</i>Au moins 1 majuscule</span>	
			<span class="su-condition-lowercase su-conditions-success"><i class="su-icon">valid</i>Au moins 1 minuscule</span>	
			<span class="su-condition-number su-conditions-error"><i class="su-icon">invalid</i>Au moins 1 chiffre</span>	
		</div>
	</div>
</div>


## Accessibilité

Règles minimales&nbsp;:
- Chaque champ mot de passe doit avoir un rôle `role="textbox"`.
- Si le champ est en `readonly` mettre l’attribut `aria-readonly="true"`.
- Si le champ n’a pas de label, lui ajouter un `aria-label=""`.

Possibilité supplémentaire&nbsp;:
- Utiliser l’attribut `aria-labelledby` (<a href="https://developer.mozilla.org/fr/docs/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-labelledby" target="_blank" rel="noopener">«&nbsp;Utiliser l'attribut aria-labelledby&nbsp;» chez MDN Web docs [moz://a]</a>).



<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-password`
- `su-password-toggle`
- `su-conditions`
- `su-condition-character-length`
- `su-condition-uppercase`
- `su-condition-lowercase`
- `su-condition-number`
- `su-conditions-error`
- `su-conditions-success`


### Classes annexes
- `su-input-text` (si besoin de surcharge, dépendant du composant *Text-fields*)
- `su-input-actions-area` (dépendant du composant *Text-fields*))
- `su-input-actions-1` (dépendant du composant *Text-fields*)
- `su-input-action` (dépendant du composant *Text-fields*)
- `su-icon` (dépendant du composant *Icons*)
- `su-error` (dépendant du composant *Errors*)
- `su-error-message` (dépendant du composant *Errors*)
- `su-disabled` (dépendant du composant *Helpers*)

</div>

