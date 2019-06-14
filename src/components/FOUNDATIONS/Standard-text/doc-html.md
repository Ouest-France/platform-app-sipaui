# Standard texts / Textes standards

Le texte standard est réservé au contenu éditorial. Il est donc lié aux classes `su-article` et `su-articles-list` qui englobent ces zones. Son utilisation peut être forcée en-dehors de ces zones éditoriales avec la classe `su-text-standard`.

<br />

Ce formatage de texte accepte 2 variations en fonction de l’importance du texte&nbsp;:
- importance moyenne&nbsp;= italique (via la balise `<em>`),
- importance forte&nbsp;= gras (via la balise `<strong>`).

<div class="alerte">
	<p>Le texte standard n’est pas un composant en tant que tel, il fait partie du «&nbsp;core&nbsp;», c'est à dire des éléments obligatoires.</p>
</div>

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Helpers**</li>

</div>

<!-- STORY -->

## Texte standard

### Avec la classe su-article
 
```html
<article class="su-article">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</article>
```

<div class="sipaui">
	<article class="su-article">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</article>
</div>






### Avec la classe su-text-standard

Dans l’exemple ci-dessous, les 2 paragraphes sont stylés par des CSS de la page. La classe `su-text-standard` permet de forcer l’apparence standard sur le second paragraphe.
 
```html
<article>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	<p class="su-text-standard">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</article>
```

<div class="sipaui">
	<article class="surcharge-paragraphe">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p class="su-text-standard">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</article>
</div>





## Variation d’importance

### Importance moyenne

Utilisation de la balise `<em>`.
 
```html
<article class="su-article">
	<p>Lorem ipsum dolor sit amet, <em>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</em>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</article>
```

<div class="sipaui">
	<article class="su-article">
		<p>Lorem ipsum dolor sit amet, <em>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</em>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	</article>
</div>

### Importance forte

Utilisation de la balise `<strong>`.

```html
<article class="su-article">
	<p>Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</strong>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</article>
```

<div class="sipaui">
	<article class="su-article">
		<p>Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</strong>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	</article>
</div>



## Variation de taille
### Petit texte

Pour afficher un texte légèrement plus petit que le texte standard, vous pouvez utilisez la classe `su-text-small`. Cette classe n’est pas liée aux zones éditoriales (`su-article`).

```html
<p class="su-text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```
<div class="sipaui">
	<p class="su-text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>



## Variation de justification

Par défaut, le texte standard est ferré (aligné) à gauche.

D'autres justifications sont possibles. SipaUI intègre les classes nécessaires, via le composant **Helpers**.

### Ferrage à gauche forcé
 
Utilisation de la classe `su-text-left`.

```html
<article class="su-article">
	<p class="su-text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</article>
```

<div class="sipaui">
	<article class="su-article">
		<p class="su-text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	</article>
</div>


### Ferrage à droite

Utilisation de la classe `su-text-right`.

 
```html
<article class="su-article">
	<p class="su-text-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</article>
```

<div class="sipaui">
	<article class="su-article">
		<p class="su-text-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	</article>
</div>


### Justification

Utilisation de la classe `su-text-justify`.

```html
<article class="su-article">
	<p class="su-text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</article>
```

<div class="sipaui">
	<article class="su-article">
		<p class="su-text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	</article>
</div>


### Centrage

Utilisation de la classe `su-text-center`.

 
```html
<article class="su-article">
	<p class="su-text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</article>
```

<div class="sipaui">
	<article class="su-article">
		<p class="su-text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	</article>
</div>



<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-article` (zone éditoriale d’un article complet)
- `su-articles-list` (zone éditoriale d’une liste d’article)
- `su-text-standard` (si besoin de surcharge)
- `su-text-small`

### Classes annexes
- `su-text-center` (dépendant du composant *Helpers*)
- `su-text-justify` (dépendant du composant *Helpers*)
- `su-text-left` (dépendant du composant *Helpers*)
- `su-text-right` (dépendant du composant *Helpers*)

</div>
