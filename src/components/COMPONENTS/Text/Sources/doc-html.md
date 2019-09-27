# Sources / Sources

Le composant *sources* est une des informations (métadonnées) associées à un article. Il est généralement utilisé dans 2 cas&nbsp;:
- en accompagnement d’un article affiché dans une liste d’articles
- dans la page d’un article complet.

Il est lui-même composé de 2 éléments&nbsp;: la **cocarde** illustrant la marque (composant *Cockades*) et le **nom** de la marque. Il peut toutefois arriver que pour des raisons graphiques le texte ne soit pas présent.


<div class="dependances"
																							
## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`)
- composant **Cockades**

</div>


## Source dans un article

Pour l’utilisation normale de la source il faut utiliser les classes `su-source` pour styler le texte et `su-cockade-xx` (où  «&nbsp;xx&nbsp;» représente la marque) pour afficher la cocarde.
```html
<span class="su-source su-cockade-of">Ouest-France</span>
```
<div class="sipaui">
	<span class="su-source su-cockade-of">Ouest-France</span>
</div>


## Source dans une liste d’articles

Pour un article dans une liste d’article, la taille du texte s'adapte grâce à la classe `su-articles-list` positionnée sur une balise parente.

```html
<ul class="su-articles-list">
	<li>
		<span class="su-source su-cockade-of">Ouest-France</span>
	</li>
</ul>
```
<div class="sipaui">
	<ul class="surcharge-storybook su-articles-list">
		<li>
			<span class="su-source su-cockade-of">Ouest-France</span>
		</li>
	</ul>
</div>

## Source sans texte dans une liste d’articles


```html
<ul class="su-articles-list">
	<li>
		<span class="su-source su-cockade-of">/span>
	</li>
</ul>
```
<div class="sipaui">
	<ul class="surcharge-storybook su-articles-list">
		<li>
			<span class="su-source su-cockade-of"></span>
		</li>
	</ul>
</div>


<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-source`
- `su-cockade-of` (dépendant du composant *Cockades*)
- `su-cockade-po` (dépendant du composant *Cockades*)
- `su-cockade-ml` (dépendant du composant *Cockades*)
- `su-cockade-co` (dépendant du composant *Cockades*)
- `su-cockade-vv` (dépendant du composant *Cockades*)


### Classes annexes
- `su-articles-list`


</div>
