# Standfirst / Chapeau


Le chapeau est réservé au contenu éditorial. Il est donc lié aux classes `su-article` et `su-articles-list` qui englobent ces zones. Il est identifié par la classe `su-standfirst`. L’essentiel de son style est porté par cette classe unique `su-standfirst`. Toutefois, **la taille du texte dépend de la situation du chapeau**, (liste d’articles ou article complet).

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>


<div class="dependances">
																							
## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`)

</div>

<!------------------–------------------–------------------–------------------–------------------–------------------–------------------–------------------–------------------– -->

## Chapeau dans une liste d’articles

```html
<div class="su-articles-list">
	<article>
	    <p class="su-standfirst">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</article>
</div>
```

<div class="sipaui">
	<div class="su-articles-list">
		<article>
		    <p class="su-standfirst">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</article>
	</div>
</div>


<!------------------–------------------–------------------–------------------–------------------–------------------–------------------–------------------–------------------– -->

## Chapeau dans un article complet

```html
<article class="su-article">
    <p class="su-standfirst">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</article>
```

<div class="sipaui">
	<article class="su-article">
	    <p class="su-standfirst">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</article>
</div>




<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-standfirst`
- `su-articles-list` (zone éditoriale d’une liste d’article)
- `su-article` (zone éditoriale d’un article complet)

</div>
