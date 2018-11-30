# Radio-buttons / Boutons-radio

Il y a 2 façons d’écrire un bouton radio en HTML&nbsp;:
- **Méthode 1&nbsp;:** `<input>` PUIS `<label>`
- **Méthode 2&nbsp;:** `<input>` DANS `<label>`

SipaUI permet les 2, mais il est préférable d’utiliser la seconde version, notamment quand on veut les aligner en colonne.

<a href="#liste-classes" target="_self" class="su-link">Liste des classes disponibles</a>

<!-- STORY -->

## Boutons-radio standards

Dans le cadre de la **méthode 2**, la classe `su-radio-area` est nécessaire pour encadrer la zone de boutons-radio. Dans un site utilisant SipaUI les balises `<input type="radio">` et `<label>` s'affichent comme attendu. Toutefois, il est possible de forcer l’affichage charté avec les classes `su-input-radio` sur l’input et `su-label-radio` sur le label.


### Sur une ligne, basique en méthode 1

Dans ce contexte (**méthode 1**), la classe `su-radio-area` est inutile.

```html
<input type="radio" id="radio1" name="nom1" value="Valeur 1" checked>
<label for="radio1">Valeur 1</label>
<input type="radio" id="radio2" name="nom1" value="Valeur 2">
<label for="radio2">Valeur 2</label>
```
<input type="radio" id="radio1" name="nom1" value="Valeur 1" checked>
<label for="radio1">Valeur 1</label>
<input type="radio" id="radio2" name="nom1" value="Valeur 2">
<label for="radio2">Valeur 2</label>

### Sur une ligne, avec du texte entre les boutons-radio en méthode 2

Dans ce contexte (**méthode 2**), la classe `su-radio-area` est indispensable.

```html
<div class="su-radio-area">
	<label for="radio3">
		<input type="radio" id="radio3" name="nom2" value="Valeur 1" checked>
		Valeur 1
	</label>
	<span> ou </span>
	<label for="radio4">
		<input type="radio" id="radio4" name="nom2" value="Valeur 2">
		Valeur 2
	</label>
</div>
```

<div class="su-radio-area">
	<label for="radio3">
		<input type="radio" id="radio3" name="nom2" value="Valeur 1" checked>
		Valeur 1
	</label>
	<span> ou </span>
	<label for="radio4">
		<input type="radio" id="radio4" name="nom2" value="Valeur 2">
		Valeur 2
	</label>
</div>

### Sur une ligne, inactif

```html
<div class="su-disabled">
	<input type="radio" id="radio5" name="nom3" value="Valeur 1" checked>
	<label for="radio5">Valeur 1</label>
	<input type="radio" id="radio6" name="nom3" value="Valeur 2">
	<label for="radio6">Valeur 2</label>
</div>
```
<div class="su-disabled">
	<input type="radio" id="radio5" name="nom3" value="Valeur 1" checked>
	<label for="radio5">Valeur 1</label>
	<input type="radio" id="radio6" name="nom3" value="Valeur 2">
	<label for="radio6">Valeur 2</label>
</div>

### En colonne

Pour positionner les choix en colonnes il faut impérativement prendre la **méthode 2** et ajouter la classe `su-radio-column` sur le parent.

```html
<div class="su-radio-area su-radio-column">
	<label for="radio3">
		<input type="radio" id="radio3" name="nom2" value="Valeur 1" checked>
		Valeur 1
	</label>
	<label for="radio4">
		<input type="radio" id="radio4" name="nom2" value="Valeur 2">
		Valeur 2
	</label>
</div>
```
<div class="su-radio-area su-radio-column">
	<label for="radio3">
		<input type="radio" id="radio3" name="nom2" value="Valeur 1" checked>
		Valeur 1
	</label>
	<label for="radio4">
		<input type="radio" id="radio4" name="nom2" value="Valeur 2">
		Valeur 2
	</label>
</div>


## Gestion des erreurs

### Sur une ligne, basique en méthode 2

```html
<div class="su-radio-area su-error">
	<label for="radio9"><input type="radio" id="radio9" name="nom5" value="Valeur 1" checked>Valeur 1</label>
	<label for="radio10"><input type="radio" id="radio10" name="nom5" value="Valeur 2">Valeur 2</label>
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>
```
<div class="su-radio-area su-error">
	<label for="radio9"><input type="radio" id="radio9" name="nom5" value="Valeur 1" checked>Valeur 1</label>
	<label for="radio10"><input type="radio" id="radio10" name="nom5" value="Valeur 2">Valeur 2</label>
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>

### En colonne

```html
<div class="su-radio-area su-error">
	<label for="radio9"><input type="radio" id="radio9" name="nom5" value="Valeur 1" checked>Valeur 1</label>
	<label for="radio10"><input type="radio" id="radio10" name="nom5" value="Valeur 2">Valeur 2</label>
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>
```
<div class="su-radio-area su-radio-column su-error">
	<label for="radio3">
		<input type="radio" id="radio3" name="nom2" value="Valeur 1" checked>
		Valeur 1
	</label>
	<label for="radio4">
		<input type="radio" id="radio4" name="nom2" value="Valeur 2">
		Valeur 2
	</label>
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>


<div id="liste-classes">

## Liste des classes disponibles
- `su-radio-area`
- `su-label-radio` (si besoin de surcharge)
- `su-input-radio` (si besoin de surcharge)
- `su-radio-column`
- `su-disabled` (dépendant du composant *helpers*)
- `su-error-message` (dépendant du composant *text-fields*)

</div>
