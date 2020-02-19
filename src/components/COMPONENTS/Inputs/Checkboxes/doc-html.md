# Checkboxes / Case à cocher

Il y a 2 façons d’écrire une case à cocher en HTML&nbsp;:
- **Méthode 1&nbsp;:** `<input>` PUIS `<label>`
- **Méthode 2&nbsp;:** `<input>` DANS `<label>`

Toutefois, pour gérer l’affichage en colonne d’une suite de cases à cocher, ou le placement de texte entre ces cases à cocher la seconde méthode s'impose. **Par conséquent, SipaUI ne permettra que la seconde méthode**.

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Helpers**,
- composant **Errors**

</div>




## Cases à cocher standards

La classe `su-checkbox-area` est nécessaire pour encadrer la zone des case à cocher. Dans un site utilisant SipaUI, les balises `<input type="checkbox">` et `<label>` s'affichent comme attendu. Toutefois, il est possible de forcer l’affichage charté avec les classes `su-input-checkbox` sur l’input et `su-label-checkbox` sur le label.

### Sur une ligne, basique

```html
<div class="su-checkbox-area">
	<label for="checkbox1"><input type="checkbox" id="checkbox1" name="nom1" value="Valeur 1" checked>Valeur 1</label>
	<label for="checkbox2"><input type="checkbox" id="checkbox2" name="nom1" value="Valeur 2">Valeur 2</label>
</div>
```
<div class="sipaui">
	<div class="su-checkbox-area">
		<label for="checkbox1"><input type="checkbox" id="checkbox1" name="nom1" value="Valeur 1" checked>Valeur 1</label>
		<label for="checkbox2"><input type="checkbox" id="checkbox2" name="nom1" value="Valeur 2">Valeur 2</label>
	</div>
</div>

### Sur une ligne, avec du texte entre les cases à cocher


```html
<div class="su-checkbox-area">
	<label for="checkbox3"><input type="checkbox" id="checkbox3" name="nom2" value="Valeur 1" checked>Valeur 1</label>
	<span>ou</span>
	<label for="checkbox4"><input type="checkbox" id="checkbox4" name="nom2" value="Valeur 2">Valeur 2</label>
</div>
```
<div class="sipaui">
	<div class="su-checkbox-area">
		<label for="checkbox3"><input type="checkbox" id="checkbox3" name="nom2" value="Valeur 1" checked>Valeur 1</label>
		<span>ou</span>
		<label for="checkbox4"><input type="checkbox" id="checkbox4" name="nom2" value="Valeur 2">Valeur 2</label>
	</div>
</div>

### Sur une ligne, inactif

Mettre la classe `su-disabled` sur `su-checkbox-area` ainsi que la valeur `disabled` et `aria-readonly="true"` sur l’input.

```html
<div class="su-checkbox-area su-disabled">
	<label for="checkbox5"><input type="checkbox" id="checkbox5" name="nom3" value="Valeur 1" checked disabled aria-readonly="true">Valeur 1</label>
	<span>ou</span>
	<label for="checkbox6"><input type="checkbox" id="checkbox6" name="nom3" value="Valeur 2" disabled aria-readonly="true">Valeur 2</label>
</div>
```
<div class="sipaui">
	<div class="su-checkbox-area su-disabled">
		<label for="checkbox5"><input type="checkbox" id="checkbox5" name="nom3" value="Valeur 1" checked disabled aria-readonly="true">Valeur 1</label>
		<span>ou</span>
		<label for="checkbox6"><input type="checkbox" id="checkbox6" name="nom3" value="Valeur 2" disabled aria-readonly="true">Valeur 2</label>
	</div>
</div>

### En colonne

Pour positionner les choix en colonnes il faut impérativement prendre la **méthode 2** et ajouter la classe `su-checkbox-column` sur le parent.

```html
<div class="su-checkbox-area su-checkbox-column">
	<label for="checkbox7"><input type="checkbox" id="checkbox7" name="nom4" value="Valeur 1" checked>Valeur 1</label>
	<label for="checkbox8"><input type="checkbox" id="checkbox8" name="nom4" value="Valeur 2">Valeur 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
</div>
```
<div class="sipaui">
	<div class="su-checkbox-area su-checkbox-column">
		<label for="checkbox7"><input type="checkbox" id="checkbox7" name="nom4" value="Valeur 1" checked>Valeur 1</label>
		<label for="checkbox8"><input type="checkbox" id="checkbox8" name="nom4" value="Valeur 2">Valeur 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
	</div>
</div>

## Gestion des erreurs

### Sur une ligne, basique

```html
<div class="su-error">
	<div class="su-checkbox-area">
		<label for="checkbox9"><input type="checkbox" id="checkbox9" name="nom5" value="Valeur 1">Valeur 1</label>
		<label for="checkbox10"><input type="checkbox" id="checkbox10" name="nom5" value="Valeur 2">Valeur 2</label>
	</div>
	<div class="su-error-message">Message d’erreur</div>
</div>
```
<div class="sipaui">
	<div class="su-error">
		<div class="su-checkbox-area">
			<label for="checkbox9"><input type="checkbox" id="checkbox9" name="nom5" value="Valeur 1">Valeur 1</label>
			<label for="checkbox10"><input type="checkbox" id="checkbox10" name="nom5" value="Valeur 2">Valeur 2</label>
		</div>
		<div class="su-error-message">Message d’erreur</div>
	</div>
</div>

### En colonne

```html
<div class="su-error">
	<div class="su-checkbox-area su-checkbox-column su-error">
		<label for="checkbox11"><input type="checkbox" id="checkbox11" name="nom6" value="Valeur 1">Valeur 1</label>
		<label for="checkbox12"><input type="checkbox" id="checkbox12" name="nom6" value="Valeur 2">Valeur 2</label>
	</div>
	<div class="su-error-message">Message d’erreur</div>
</div>
```
<div class="sipaui">
	<div class="su-error">
		<div class="su-checkbox-area su-checkbox-column su-error">
			<label for="checkbox11"><input type="checkbox" id="checkbox11" name="nom6" value="Valeur 1">Valeur 1</label>
			<label for="checkbox12"><input type="checkbox" id="checkbox12" name="nom6" value="Valeur 2">Valeur 2</label>
		</div>
		<div class="su-error-message">Message d’erreur</div>
	</div>
</div>


### Cases à cocher indéterminées

Les cases à cocher indéterminées servent à montrer un état semi-sélectionné pour une case regroupant plusieurs autres cases dans un sous-niveau dont seulement certaines de ces cases sont sélectionnées. 

Pour la gestion des cases à cocher indéterminées en JS, cf. <a href="https://css-tricks.com/indeterminate-checkboxes/" target="_blank" rel="noopener">css-tricks.com</a>.

```html
<div class="su-checkbox-area su-checkbox-column">
	<label for="checkbox13"><input type="checkbox" id="checkbox13" name="nom7" value="Valeur 1" class="su-indeterminate">Valeur 1</label>
		<div class="su-checkbox-area su-checkbox-column">
			<label for="checkbox13a"><input type="checkbox" id="checkbox13a" name="nom7" value="Valeur A" class="su-indeterminate">Valeur A</label>
				<div class="su-checkbox-area su-checkbox-column">
					<label for="checkbox13aa"><input type="checkbox" id="checkbox13aa" name="nom7" value="Valeur a" checked>Valeur a</label>
					<label for="checkbox13ab"><input type="checkbox" id="checkbox13ab" name="nom7" value="Valeur b">Valeur b</label>
				</div>
			<label for="checkbox13b"><input type="checkbox" id="checkbox13b" name="nom7" value="Valeur B">Valeur B</label>
		</div>
	<label for="checkbox14"><input type="checkbox" id="checkbox14" name="nom7" value="Valeur 2">Valeur 2</label>
</div>
```
<div class="sipaui">
	<div class="su-checkbox-area su-checkbox-column">
		<label for="checkbox13"><input type="checkbox" id="checkbox13" name="nom7" value="Valeur 1" class="su-indeterminate">Valeur 1</label>
			<div class="su-checkbox-area su-checkbox-column">
				<label for="checkbox13a"><input type="checkbox" id="checkbox13a" name="nom7" value="Valeur A" class="su-indeterminate">Valeur A</label>
					<div class="su-checkbox-area su-checkbox-column">
						<label for="checkbox13aa"><input type="checkbox" id="checkbox13aa" name="nom7" value="Valeur a" checked>Valeur a</label>
						<label for="checkbox13ab"><input type="checkbox" id="checkbox13ab" name="nom7" value="Valeur b">Valeur b</label>
					</div>
				<label for="checkbox13b"><input type="checkbox" id="checkbox13b" name="nom7" value="Valeur B">Valeur B</label>
			</div>
		<label for="checkbox14"><input type="checkbox" id="checkbox14" name="nom7" value="Valeur 2">Valeur 2</label>
	</div>
</div>



## Accessibilité

Les cases-à-cocher sont généralement groupées et liées à un choix multiple pour une question, un sujet… Dans ce cas le design permet de faire visuellement cette association. Toutefois, pour les rendre plus accessibles aux handicapés visuels, il faut les associer aussi au niveau du DOM avec l’attribut `aria-labelledby`&nbsp;:
```html
<div id="checkboxes_label" class="su-label">Choix multiple</div>
<div class="su-checkbox-area su-checkbox-column su-error" aria-labelledby="checkboxes_label">
	<label for="checkbox15"><input type="checkbox" id="checkbox15" name="nom8" value="Valeur 1">Valeur 1</label>
	<label for="checkbox16"><input type="checkbox" id="checkbox16" name="nom8" value="Valeur 2">Valeur 2</label>
</div>
```
<div class="sipaui">
	<div id="checkboxes_label" class="su-label">Choix multiple</div>
	<div class="su-checkbox-area su-checkbox-column su-error" aria-labelledby="checkboxes_label">
		<label for="checkbox15"><input type="checkbox" id="checkbox15" name="nom8" value="Valeur 1">Valeur 1</label>
		<label for="checkbox16"><input type="checkbox" id="checkbox16" name="nom8" value="Valeur 2">Valeur 2</label>
	</div>
</div>


Pour les cases-à-cocher inactives, il y a l’attribut `aria-readonly="true"` à positionner sur l’input (cf. «&nbsp;Sur une ligne, inactif&nbsp;» ci-dessus).



<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-checkbox-area`
- `su-label-checkbox` (si besoin de surcharge)
- `su-input-checkbox` (si besoin de surcharge)
- `su-checkbox-column`

### Classes annexes
- `su-error` (dépendant du composant *Errors*)
- `su-error-message` (dépendant du composant *Errors*)
- `su-disabled` (dépendant du composant *Helpers*)

</div>
