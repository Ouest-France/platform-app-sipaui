# Checkboxes / Case à cocher

<p class="alerte"><span class="su-icon-alert"></span> <em>Un point structurant d’architecture concernant la gestion des assets (polices, images) n’étant réglé, ce composant n’est pas stabilisé. En effet, la coche (✔) devant être une image en asset est temporairement gérée via une image base 64 intégrée dans le CSS.</em></p>

Il y a 2 façons d’écrire une case à cocher en HTML&nbsp;:
- **Méthode 1&nbsp;:** `<input>` PUIS `<label>`
- **Méthode 2&nbsp;:** `<input>` DANS `<label>`

Toutefois, pour gérer l’affichage en colonne d’une suite de cases à cocher, ou le placement de texte entre ces cases à cocher la seconde méthode s'impose. **Par conséquent, SipaUI ne permettra que la seconde méthode**.

<a href="#liste-classes" target="_self" class="su-link-button">Liste des classes disponibles</a>


<!-- STORY -->

## Cases à cocher standards

La classe `su-checkbox-area` est nécessaire pour encadrer la zone des case à cocher. Dans un site utilisant SipaUI, les balises `<input type="checkbox">` et `<label>` s'affichent comme attendu. Toutefois, il est possible de forcer l’affichage charté avec les classes `su-input-checkbox` sur l’input et `su-label-checkbox` sur le label.

### Sur une ligne, basique

```html
<div class="su-checkbox-area">
	<label for="checkbox1"><input type="checkbox" id="checkbox1" name="nom1" value="Valeur 1" checked>Valeur 1</label>
	<label for="checkbox2"><input type="checkbox" id="checkbox2" name="nom1" value="Valeur 2">Valeur 2</label>
</div>
```
<div class="su-checkbox-area">
	<label for="checkbox1"><input type="checkbox" id="checkbox1" name="nom1" value="Valeur 1" checked>Valeur 1</label>
	<label for="checkbox2"><input type="checkbox" id="checkbox2" name="nom1" value="Valeur 2">Valeur 2</label>
</div>

### Sur une ligne, avec du texte entre les cases à cocher


```html
<div class="su-checkbox-area">
	<label for="checkbox3"><input type="checkbox" id="checkbox3" name="nom2" value="Valeur 1" checked>Valeur 1</label>
	<span>ou</span>
	<label for="checkbox4"><input type="checkbox" id="checkbox4" name="nom2" value="Valeur 2">Valeur 2</label>
</div>
```

<div class="su-checkbox-area">
	<label for="checkbox3"><input type="checkbox" id="checkbox3" name="nom2" value="Valeur 1" checked>Valeur 1</label>
	<span>ou</span>
	<label for="checkbox4"><input type="checkbox" id="checkbox4" name="nom2" value="Valeur 2">Valeur 2</label>
</div>

### Sur une ligne, inactif

Mettre la classe `su-disabled` sur `su-checkbox-area` et la valeur `disabled` sur l’input.

```html
<div class="su-checkbox-area su-disabled">
	<label for="checkbox5"><input type="checkbox" id="checkbox5" name="nom3" value="Valeur 1" checked disabled>Valeur 1</label>
	<span>ou</span>
	<label for="checkbox6"><input type="checkbox" id="checkbox6" name="nom3" value="Valeur 2" disabled>Valeur 2</label>
</div>
```
<div class="su-checkbox-area su-disabled">
	<label for="checkbox5"><input type="checkbox" id="checkbox5" name="nom3" value="Valeur 1" checked disabled>Valeur 1</label>
	<span>ou</span>
	<label for="checkbox6"><input type="checkbox" id="checkbox6" name="nom3" value="Valeur 2" disabled>Valeur 2</label>
</div>

### En colonne

Pour positionner les choix en colonnes il faut impérativement prendre la **méthode 2** et ajouter la classe `su-checkbox-column` sur le parent.

```html
<div class="su-checkbox-area su-checkbox-column">
	<label for="checkbox7"><input type="checkbox" id="checkbox7" name="nom4" value="Valeur 1" checked>Valeur 1</label>
	<label for="checkbox8"><input type="checkbox" id="checkbox8" name="nom4" value="Valeur 2">Valeur 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
</div>
```
<div class="su-checkbox-area su-checkbox-column">
	<label for="checkbox7"><input type="checkbox" id="checkbox7" name="nom4" value="Valeur 1" checked>Valeur 1</label>
	<label for="checkbox8"><input type="checkbox" id="checkbox8" name="nom4" value="Valeur 2">Valeur 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
</div>

## Gestion des erreurs

### Sur une ligne, basique

```html
<div class="su-checkbox-area su-error">
	<label for="checkbox9"><input type="checkbox" id="checkbox9" name="nom5" value="Valeur 1">Valeur 1</label>
	<label for="checkbox10"><input type="checkbox" id="checkbox10" name="nom5" value="Valeur 2">Valeur 2</label>
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>
```
<div class="su-checkbox-area su-error">
	<label for="checkbox9"><input type="checkbox" id="checkbox9" name="nom5" value="Valeur 1">Valeur 1</label>
	<label for="checkbox10"><input type="checkbox" id="checkbox10" name="nom5" value="Valeur 2">Valeur 2</label>
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>


### En colonne

```html
<div class="su-checkbox-area su-checkbox-column su-error">
	<label for="checkbox11"><input type="checkbox" id="checkbox11" name="nom6" value="Valeur 1">Valeur 1</label>
	<label for="checkbox12"><input type="checkbox" id="checkbox12" name="nom6" value="Valeur 2">Valeur 2</label>
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>
```
<div class="su-checkbox-area su-checkbox-column su-error">
	<label for="checkbox11"><input type="checkbox" id="checkbox11" name="nom6" value="Valeur 1">Valeur 1</label>
	<label for="checkbox12"><input type="checkbox" id="checkbox12" name="nom6" value="Valeur 2">Valeur 2</label>
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>


<div id="liste-classes">

## Liste des classes disponibles
- `su-checkbox-area`
- `su-label-checkbox` (si besoin de surcharge)
- `su-input-checkbox` (si besoin de surcharge)
- `su-checkbox-column`
- `su-disabled` (dépendant du composant *helpers*)
- `su-error-message` (dépendant du composant *text-fields*)

</div>
