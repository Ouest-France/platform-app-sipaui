# Selects / Listes déroulantes

Les listes déroulantes `<select>` proposent une liste d’options à l’utilisateur. Cette liste peut-être *mono* ou *multi-choix*. **Ce composant ne présente pour l’instant que la version mono-choix**.

<a href="#liste-classes" target="_self" class="su-link-button">Liste des classes disponibles</a>

<!-- STORY -->

## Standard

Liste déroulante standard. Le style est appliqué par défaut sur les `select` dans un site SipaUI. Il est possible de forcer cet affichage avec la classes `su-select`.

NB si l’on veut que la liste déroulante soit vide au départ, la première option doit être vide, ainsi que sa `value`. Il faut aussi lui mettre les attributs `disabled`, `selected` et `hidden` pour empêcher la sélection de cette option par l’utilisateur.

```html
<label for="select1">Label</label>
<div class="su-select">
	<select id="select1" name="select1" required>
	    <option value="" disabled selected hidden></option>
	    <option value="option1">Option 1</option>
	    <option value="option2">Option 2</option>
	    <option value="option3">Option 3</option>
	    <option value="option4">Option 4</option>
	    <option value="option5">Option 5</option>
	    <option value="option6">Option 6</option>
	</select>
</div>
```
<div><!-- échappement markdown -->
	<label for="select1">Label</label>
	<div class="su-select">
		<select id="select1" name="select1" required>
		    <option value="" disabled selected hidden></option>
		    <option value="option1">Option 1</option>
		    <option value="option2">Option 2</option>
		    <option value="option3">Option 3</option>
		    <option value="option4">Option 4</option>
		    <option value="option5">Option 5</option>
		    <option value="option6">Option 6</option>
		</select>
	</div>
</div>

## Prérempli

```html
<label for="select2">Label</label>
<div class="su-select">
	<select id="select2" name="select2" required>
	    <option value="option1" selected>Option 1</option>
	    <option value="option2">Option 2</option>
	    <option value="option3">Option 3</option>
	    <option value="option4">Option 4</option>
	    <option value="option5">Option 5</option>
	    <option value="option6">Option 6</option>
	</select>
</div>
```
<div><!-- échappement markdown -->
	<label for="select2">Label</label>
	<div class="su-select">
		<select id="select2" name="select2" required>
		    <option value="option1" selected>Option 1</option>
		    <option value="option2">Option 2</option>
		    <option value="option3">Option 3</option>
		    <option value="option4">Option 4</option>
		    <option value="option5">Option 5</option>
		    <option value="option6">Option 6</option>
		</select>
	</div>
</div>

## Pseudo-Placeholder

Le pseudo-placeholder se fait en utilisant la première option à laquelle on n’aura pas mis de `value`. Il faut lui mettre les attributs `disabled`, `selected` et `hidden` pour empêcher la sélection de cette option par l’utilisateur.

```html
<label for="select3">Label</label>
<label for="select3">Label</label>
<div class="su-select">
	<select id="select3" name="select3" required>
	    <option value="" disabled selected hidden>Placeholder</option>
	    <option value="option1">Option 1</option>
	    <option value="option2">Option 2</option>
	    <option value="option3">Option 3</option>
	    <option value="option4">Option 4</option>
	    <option value="option5">Option 5</option>
	    <option value="option6">Option 6</option>
	</select>
</div>
```
<div><!-- échappement markdown -->
	<label for="select3">Label</label>
	<div class="su-select">
		<select id="select3" name="select3" required>
		    <option value="" disabled selected hidden>Placeholder</option>
		    <option value="option1">Option 1</option>
		    <option value="option2">Option 2</option>
		    <option value="option3">Option 3</option>
		    <option value="option4">Option 4</option>
		    <option value="option5">Option 5</option>
		    <option value="option6">Option 6</option>
		</select>
	</div>
</div>

## Erreur

Select standard en erreur. **Pour pouvoir gérer les erreurs, chaque composant a besoin d’être inclus dans un parent qui portera la classe `su-error` si nécessaire**. Cette classe, absente par défaut, sera positionnée par le développeur (soit dynamiquement, soit par réponse serveur). Le message d’erreur sera identifié par la classe su-error-message.

```html
<div class="su-error">
	<label for="select4">Label</label>
	<div class="su-select">
		<select id="select4" name="select4" required>
			<option value="" disabled selected hidden></option>
		    <option value="option1">Option 1</option>
		    <option value="option2">Option 2</option>
		    <option value="option3">Option 3</option>
		    <option value="option4">Option 4</option>
		    <option value="option5">Option 5</option>
		    <option value="option6">Option 6</option>
		</select>
	</div>
	<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
</div>
```
<div><!-- échappement markdown -->
	<div class="su-error">
		<label for="select4">Label</label>
		<div class="su-select">
			<select id="select4" name="select4" required>
				<option value="" disabled selected hidden></option>
			    <option value="option1">Option 1</option>
			    <option value="option2">Option 2</option>
			    <option value="option3">Option 3</option>
			    <option value="option4">Option 4</option>
			    <option value="option5">Option 5</option>
			    <option value="option6">Option 6</option>
			</select>
		</div>
		<div class="su-error-message"><span class="su-icon-alert"></span> Message d’erreur</div>
	</div>
</div>

## Inactif

Liste déroulant inactive. Attention, si le disabled suffit à rendre le select inopérant, il faut une classe `su-disabled` **sur le label et sur le select** pour changer son apparence.

```html
<label for="select5" class="su-disabled">Label</label>
<div class="su-select">
	<select id="select5" name="select5" disabled class="su-disabled">
	    <option value="" disabled selected hidden>Placeholder</option>
	    <option value="option1">Option 1</option>
	    <option value="option2">Option 2</option>
	    <option value="option3">Option 3</option>
	    <option value="option4">Option 4</option>
	    <option value="option5">Option 5</option>
	    <option value="option6">Option 6</option>
	</select>
</div>
```
<div><!-- échappement markdown -->
	<label for="select5" class="su-disabled">Label</label>
	<div class="su-select">
		<select id="select5" name="select5" disabled class="su-disabled">
		    <option value="" disabled selected hidden>Placeholder</option>
		    <option value="option1">Option 1</option>
		    <option value="option2">Option 2</option>
		    <option value="option3">Option 3</option>
		    <option value="option4">Option 4</option>
		    <option value="option5">Option 5</option>
		    <option value="option6">Option 6</option>
		</select>
	</div>
</div>


<div id="liste-classes">

## Liste des classes disponibles
- `su-label` (si besoin de surcharge, dépendant du composant *FORM_text-fields*)
- `su-label-complement`(dépendant du composant *FORM_text-fields*)
- `su-select`
- `su-disabled` (dépendant du composant *helpers*)
- `su-error` (dépendant du composant *FORM_text-fields*)
- `su-error-message` (dépendant du composant *FORM_text-fields*)

</div>
