# Lists / Listes

Une liste peut correspondre à un besoin d’affichage de texte, ou à un besoin d'une suite d’éléments dans le code HTML. **Dans ce second cas, la liste ne doit pas avoir une apparence de liste texte**. Le premier cas est une *liste éditoriale* (ordonnée ou non) et le second est une *liste non éditoriale*.

Par défaut, si elles sont incluses dans un bloc défini avec la classe `sipaui` les listes HTML `<ul>` et `<ol>` **ne sont pas stylées comme une liste texte**. Cela permet donc d’utiliser des listes d’objets dans les pages sans avoir besoin de les surcharger à chaque fois en CSS pour leur enlever leur style de liste de texte. Si l’on a quand même besoin de rendre une liste texte, on peut utiliser la classe  `su-list` pour forcer cet affichage.

À l’inverse, ces mêmes balises HTML **généreront bien une liste texte si elles sont dans une zone éditoriale** (avec la classe `su-article`). On peut alors utiliser avec la classe `su-not-list` sur les balises de liste dans le cas où l’on voudrait contourner ce comportement.

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>


<div class="dependances">
																							
## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`)

</div>

## Zone non éditoriale
En dehors d’un article utilisant la classe `su-article`.

### Liste non ordonnée
```html
<ul>
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>
```

<div class="sipaui">
	<ul>
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>
</div>

### Liste ordonnée
```html
<ol>
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ol>
```
<div class="sipaui">
	<ol>
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ol>
</div>

### Liste non ordonnée avec une apparence de liste texte
Utiliser la classe `su-list` sur la liste.

```html
<ul class="su-list">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>
```

<div class="sipaui">
	<ul class="su-list">
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>
</div>

### Liste ordonnée  avec une apparence de liste texte
Utiliser la classe `su-list` sur la liste.

```html
<ol class="su-list">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ol>
```

<div class="sipaui">
	<ol class="su-list">
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ol>
</div>


## Zone éditoriale
Dans un article avec la classe `su-article`.

### Liste non ordonnée


```html
<div class="su-article">
	<ul>
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>
</div>
```

<div class="sipaui">
	<div class="su-article">
		<ul>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>
	</div>
</div>

### Liste ordonnée

```html
<div class="su-article">
	<ol>
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ol>
</div>
```

<div class="sipaui">
	<div class="su-article">
		<ol>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ol>
	</div>
</div>

### Liste non ordonnée sans affichage en liste texte.
Utiliser la classe `su-not-list` sur la liste.

```html
<div class="su-article">
	<ul class="su-not-list">
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>
</div>
```

<div class="sipaui">
	<div class="su-article">
		<ul class="su-not-list">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>
	</div>
</div>





<div id="liste-classes">

## Liste des classes disponibles
- `su-article` (pour les listes éditoriales dans les articles)
- `su-list` (si besoin de surcharge hors article)
- `su-not-list` (si besoin de surcharge dans un article)

</div>
