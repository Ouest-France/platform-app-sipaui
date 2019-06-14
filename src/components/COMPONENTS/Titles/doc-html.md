# Titles / Titres

Les titres sont normalement définis par leur balise HTML (`<h1>` à `<h3>`). Toutefois, dans certains cas, il sera nécessaire que **ces niveaux d’importance soient différents entre le rendu visuel et le SEO**, afin que certains titres aient du poids SEO mais pas visuel et vice-versa… C’est pourquoi, des classes simulant l’apparence de ces balises ont été crées. Ainsi, il est possible de créer un texte qui aura l’apparence d’un titre de niveau 1 soit avec `<h1>Titre</h1>`, soit avec la classe `su-h1`.

Dans SipaUI, il existe 3 déclinaisons de titres, en fonction de leur "univers" d’affichage&nbsp;: les titres éditoriaux à l’intérieur d’un article complet (les pages d’article), les titres éditoriaux des articles dans une liste d’articles et tous les autres (essentiellement de contenu non éditorial&nbsp;: rubriques, titres de listes d’articles, blocs partenaires…).

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>


<div class="dependances">
																							
## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`)

</div>

<!------------------–------------------–------------------–------------------–------------------–------------------–------------------–------------------–------------------– -->

## `<h1>` ou `su-h1` ?

**Les balises `<h1>` à `<h3>`**, en tant que balises HTML, ont un poids SEO. Elles indiquent **aux moteurs de recherche** quelle est **l’importance de chaque titre**.

Elles doivent donc **encadrer chaque titre qui a une valeur éditoriale** sur une page web. Cette valeur éditoriale peut parfois être *contradictoire* avec la logique du lecteur. Par exemple une page **Une Sport** va avoir un titre principal «&nbsp;Sport&nbsp;» (**`<h1>`**), plusieurs titres secondaires de rubrique comme «&nbsp;Foot&nbsp;» (**`<h2>`**), «&nbsp;Tennis&nbsp;» (**`<h2>`**), «&nbsp;En continu&nbsp;» (**pas de `<h2>`**car pas intéressant pour les moteurs de recherche)…) et les titres de chaque article de chaque liste (**`<h2>`** ou **pas de `<h2>`** en fonction des circonstances)… **C'est le SEO qui doit décider de l’utilisation de balises `<h>` ou non**.

Illustration&nbsp;:

<div class="flex">
 <div>
 
![Titre vu par utilisateur](components/COMPONENTS/Titles/design/titraille__utilisateur.png)
<p class="legende">Exemple de hiérarchisation possible des titres vus par un lecteur.</p>

 </div>
 
 <div>

![Titre vu par moteur de recherche](components/COMPONENTS/Titles/design/titraille__robot.png)
<p class="legende">Exemple de hiérarchisation possible des titres vus par un moteur de recherche.</p>

 </div>
</div>


## Titres de contenu non éditorial

Le style des titres de contenu non éditorial est le style de titre par défaut. Il n’y a que 3 niveaux de titres gérés (`h1`à `h3`). Afin de ne pas donner de poids SEO à ces titres, il est possible d’utiliser les classes `su-h1`…

```html
<article>
    <h1>Titre de niveau 1</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h2>Titre de niveau 2</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h3>Titre de niveau 3</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</article>
```

<div class="sipaui">
	<article>
	    <h1 class="su-h1">Titre de niveau 1</h1>
	    <p class="su-text-standard">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	    <h2 class="su-h2">Titre de niveau 2</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	    <h3 class="su-h3">Titre de niveau 3</h3>
	    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</article>
</div>


<!------------------–------------------–------------------–------------------–------------------–------------------–------------------–------------------–------------------– -->


## Titres de contenu éditorial - liste d’articles

Placer la classe `su-articles-list` sur le parent direct de la liste d’articles. Ici, en fonction du contexte, on utilisera au choix la balise `h2>` ou la classe `su-h2` pour le titre de la liste. Par contre, **il ne faut absolument pas utiliser la balise `<h2>`si on utilise cette même balise pour identifier les titres des articles dans la liste**.

### Cas où le `<h2>` est sur le titre de rubrique

```html
<h2 class="su-h2">Titre de rubrique - H2</h2>
<div class="su-articles-list">
	<article>
    	<p class="su-h2">Titre de l’article 1</p>
	</article>
	<article>
    	<p class="su-h2">Titre de l’article 2</p>
    </article>
</div>
```

<div class="sipaui">
    <h2 class="su-h2">Titre de rubrique - H2</h2>
    <div class="su-articles-list">
    	<article>
	    	<p class="su-h2">Titre de l’article 1</p>
    	</article>
    	<article>
	    	<p class="su-h2">Titre de l’article 2</p>
	    </article>
    </div>
</div>

### Cas où le `<h2>` est sur les titres d’article

```html
<span class="su-h2">Titre de rubrique</span>
<div class="su-articles-list">
	<article>
    	<h2>Titre de l’article 1 - H2</h2>
	</article>
	<article>
    	<h2>Titre de l’article 2 - H2</h2>
    </article>
</div>
```

<div class="sipaui">
    <span class="su-h2">Titre de rubrique</span>
    <div class="su-articles-list">
    	<article>
	    	<h2>Titre de l’article 1 - H2</h2>
    	</article>
    	<article>
	    	<h2>Titre de l’article 2 - H2</h2>
	    </article>
    </div>
</div>

<!------------------–------------------–------------------–------------------–------------------–------------------–------------------–------------------–------------------– -->


## Titres de contenu éditorial - article complet

Le style des titres dans les articles est lié à la présence de la classe `su-article` sur un parent. Pour le SEO, il est très important d’utiliser ici les balises HTML `<h1>`&nbsp;->&nbsp;`<h3>`.

```html
<article class="su-article">
    <h1>Titre de niveau 1</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h2>Titre de niveau 2</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h3>Titre de niveau 3</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</article>
```

<div class="sipaui">
	<article class="su-article">
	    <h1>Titre de niveau 1</h1>
	    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	    <h2>Titre de niveau 2</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<h3>Titre de niveau 3</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</article>
</div>


<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-article` (pour les titres sur les pages d’article)
- `su-articles-list` (pour les articles dans une liste d’articles)
- `su-h1` (si besoin de surcharge)
- `su-h2` (si besoin de surcharge)
- `su-h3` (si besoin de surcharge)

</div>
