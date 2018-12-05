# Radio-buttons / Boutons-radio

Il y a 2 façons d’écrire un bouton radio en HTML&nbsp;:
- **Méthode 1&nbsp;:** `<input>` PUIS `<label>`
- **Méthode 2&nbsp;:** `<input>` DANS `<label>`

Toutefois, pour gérer l’affichage en colonne d’une suite de boutons-radio, ou le placement de texte entre ces boutons-radio la seconde méthode s'impose. **Par conséquent, SipaUI ne permettra que la seconde méthode**.

<a href="#liste-classes" target="_self" class="su-link-button">Liste des classes disponibles</a>

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
<div class="su-radio-area">
	<label for="radio1"><input type="radio" id="radio1" name="nom1" value="Valeur 1" checked>Valeur 1</label>
	<label for="radio2"><input type="radio" id="radio2" name="nom1" value="Valeur 2">Valeur 2</label>
</div>

### Sur une ligne, avec du texte entre les boutons-radio

```html
<div class="su-radio-area">
	<label for="radio3"><input type="radio" id="radio3" name="nom2" value="Valeur 1" checked>Valeur 1</label>
	<span>ou</span>
	<label for="radio4"><input type="radio" id="radio4" name="nom2" value="Valeur 2">Valeur 2</label>
</div>
```

<div class="su-radio-area">
	<label for="radio3"><input type="radio" id="radio3" name="nom2" value="Valeur 1" checked>Valeur 1</label>
	<span>ou</span>
	<label for="radio4"><input type="radio" id="radio4" name="nom2" value="Valeur 2">Valeur 2</label>
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
<div class="su-radio-area su-disabled">
	<label for="radio5"><input type="radio" id="radio5" name="nom3" value="Valeur 1" checked disabled>Valeur 1</label>
	<span>ou</span>
	<label for="radio6"><input type="radio" id="radio6" name="nom3" value="Valeur 2" disabled>Valeur 2</label>
</div>

### En colonne

Pour positionner les choix en colonnes il faut impérativement prendre la **méthode 2** et ajouter la classe `su-radio-column` sur le parent.

```html
<div class="su-radio-area su-radio-column">
	<label for="radio7"><input type="radio" id="radio7" name="nom4" value="Valeur 1" checked>Valeur 1</label>
	<label for="radio8"><input type="radio" id="radio8" name="nom4" value="Valeur 2">Valeur 2</label>
</div>
```
<div class="su-radio-area su-radio-column">
	<label for="radio7"><input type="radio" id="radio7" name="nom4" value="Valeur 1" checked>Valeur 1</label>
	<label for="radio8"><input type="radio" id="radio8" name="nom4" value="Valeur 2">Valeur 2</label>
</div>

## Gestion des erreurs

### Sur une ligne, basique

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
<div class="su-radio-area su-radio-column su-error">
	<label for="radio11"><input type="radio" id="radio11" name="nom6" value="Valeur 1" checked>Valeur 1</label>
	<label for="radio12"><input type="radio" id="radio12" name="nom6" value="Valeur 2">Valeur 2</label>
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>
```
<div class="su-radio-area su-radio-column su-error">
	<label for="radio11"><input type="radio" id="radio11" name="nom6" value="Valeur 1" checked>Valeur 1</label>
	<label for="radio12"><input type="radio" id="radio12" name="nom6" value="Valeur 2">Valeur 2</label>
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
