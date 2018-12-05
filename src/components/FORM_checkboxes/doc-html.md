# Checkboxes / Case à cocher

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

```
<div class="su-checkbox-area">
	<label for="checkbox1"><input type="checkbox" id="checkbox1" name="nom1" value="Valeur 1" checked>Valeur 1</label>
	<label for="checkbox2"><input type="checkbox" id="checkbox2" name="nom1" value="Valeur 2">Valeur 2</label>
</div>

### Sur une ligne, avec du texte entre les cases à cocher

Dans ce contexte (**méthode 2**), la classe `su-radio-area` est indispensable.

```html

```
