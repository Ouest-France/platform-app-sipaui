# Radio-buttons / Boutons-radio

Il y a 2 façons d’écrire un bouton radio en HTML&nbsp;:
- **Méthode 1&nbsp;:** `<input>` PUIS `<label>`
- **Méthode 2&nbsp;:** `<input>` DANS `<label>`

Toutefois, pour gérer l’affichage en colonne d’une suite de boutons-radio, ou le placement de texte entre ces boutons-radio la seconde méthode s'impose. **Par conséquent, SipaUI ne permettra que la seconde méthode**.

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Helpers**,
- composant **Errors**

</div>

<!-- STORY -->

## Boutons-radio standards

La classe `su-radio-area` est nécessaire pour encadrer la zone de boutons-radio. Dans un site utilisant SipaUI, les balises `<input type="radio">` et `<label>` s'affichent comme attendu. Toutefois, il est possible de forcer l’affichage charté avec les classes `su-input-radio` sur l’input et `su-label-radio` sur le label.


### Sur une ligne, basique

```html
<div class="su-radio-area">
	<label for="radio1"><input type="radio" id="radio1" name="nom1" value="Valeur 1" checked>Valeur 1</label>
	<label for="radio2"><input type="radio" id="radio2" name="nom1" value="Valeur 2">Valeur 2</label>
</div>
```
<div class="sipaui">
	<div class="su-radio-area">
		<label for="radio1"><input type="radio" id="radio1" name="nom1" value="Valeur 1" checked>Valeur 1</label>
		<label for="radio2"><input type="radio" id="radio2" name="nom1" value="Valeur 2">Valeur 2</label>
	</div>
</div>

### Sur une ligne, avec du texte entre les boutons-radio

```html
<div class="su-radio-area">
	<label for="radio3"><input type="radio" id="radio3" name="nom2" value="Valeur 1" checked>Valeur 1</label>
	<span>ou</span>
	<label for="radio4"><input type="radio" id="radio4" name="nom2" value="Valeur 2">Valeur 2</label>
</div>
```
<div class="sipaui">
	<div class="su-radio-area">
		<label for="radio3"><input type="radio" id="radio3" name="nom2" value="Valeur 1" checked>Valeur 1</label>
		<span>ou</span>
		<label for="radio4"><input type="radio" id="radio4" name="nom2" value="Valeur 2">Valeur 2</label>
	</div>
</div>

### Sur une ligne, inactif

Mettre la classe `su-disabled` sur `su-radio-area` et la valeur `disabled` sur l’input.

```html
<div class="su-radio-area su-disabled">
	<label for="radio5"><input type="radio" id="radio5" name="nom3" value="Valeur 1" checked disabled>Valeur 1</label>
	<span>ou</span>
	<label for="radio6"><input type="radio" id="radio6" name="nom3" value="Valeur 2" disabled>Valeur 2</label>
</div>
```
<div class="sipaui">
	<div class="su-radio-area su-disabled">
		<label for="radio5"><input type="radio" id="radio5" name="nom3" value="Valeur 1" checked disabled>Valeur 1</label>
		<span>ou</span>
		<label for="radio6"><input type="radio" id="radio6" name="nom3" value="Valeur 2" disabled>Valeur 2</label>
	</div>
</div>


### En colonne

Pour positionner les choix en colonnes il faut impérativement prendre la **méthode 2** et ajouter la classe `su-radio-column` sur le parent.

```html
<div class="su-radio-area su-radio-column">
	<label for="radio7"><input type="radio" id="radio7" name="nom4" value="Valeur 1" checked>Valeur 1</label>
	<label for="radio8"><input type="radio" id="radio8" name="nom4" value="Valeur 2">Valeur 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
</div>
```
<div class="sipaui">
	<div class="su-radio-area su-radio-column">
		<label for="radio7"><input type="radio" id="radio7" name="nom4" value="Valeur 1" checked>Valeur 1</label>
		<label for="radio8"><input type="radio" id="radio8" name="nom4" value="Valeur 2">Valeur 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
	</div>
</div>

## Gestion des erreurs

### Sur une ligne, basique

```html
<div class="su-error">
	<div class="su-radio-area">
		<label for="radio9"><input type="radio" id="radio9" name="nom5" value="Valeur 1">Valeur 1</label>
		<label for="radio10"><input type="radio" id="radio10" name="nom5" value="Valeur 2">Valeur 2</label>
	</div>
	<div class="su-error-message">Message d’erreur</div>
</div>
```
<div class="sipaui">
	<div class="su-error">
		<div class="su-radio-area">
			<label for="radio9"><input type="radio" id="radio9" name="nom5" value="Valeur 1">Valeur 1</label>
			<label for="radio10"><input type="radio" id="radio10" name="nom5" value="Valeur 2">Valeur 2</label>
		</div>
		<div class="su-error-message">Message d’erreur</div>
	</div>
</div>


### En colonne

```html
<div class="su-error">
	<div class="su-radio-area su-radio-column">
		<label for="radio11"><input type="radio" id="radio11" name="nom6" value="Valeur 1">Valeur 1</label>
		<label for="radio12"><input type="radio" id="radio12" name="nom6" value="Valeur 2">Valeur 2</label>
	</div>
	<div class="su-error-message">Message d’erreur</div>
</div>
```
<div class="sipaui">
	<div class="su-error">
		<div class="su-radio-area su-radio-column">
			<label for="radio11"><input type="radio" id="radio11" name="nom6" value="Valeur 1">Valeur 1</label>
			<label for="radio12"><input type="radio" id="radio12" name="nom6" value="Valeur 2">Valeur 2</label>
		</div>
		<div class="su-error-message">Message d’erreur</div>
	</div>
</div>


<div id="liste-classes">

## Liste des classes disponibles
- `su-radio-area`
- `su-label-radio` (si besoin de surcharge)
- `su-input-radio` (si besoin de surcharge)
- `su-radio-column`

### Classes annexes
- `su-error` (dépendant du composant *Errors*)
- `su-error-message` (dépendant du composant *Errors*)
- `su-disabled` (dépendant du composant *Helpers*)

</div>
