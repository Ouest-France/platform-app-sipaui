# Cockades / Cocardes


<div class="dependances">
																							
## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`)

</div>



## Cocarde dans la source d’un article

Pour l’utilisation normale de la cocarde il faut utiliser les classes `su-source` pour styler le texte et `su-cockade-xx` (où  «&nbsp;xx&nbsp;» représente la marque) pour afficher la cocarde.
```html
<span class="su-source su-cockade-of">Ouest-France</span>
```
<div class="sipaui">
	<span class="su-source su-cockade-of">Ouest-France</span>
</div>


## Cocarde dans la source d’une liste d’articles

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


## Cocarde seule

Comme précisé sur la page *design*, cette pratique est normalement prohibée. Toutefois, si exceptionnellement vous utilisez la cocarde sans la marque à côté, il est impératif de la rendre accessible aux robots et lecteurs d’écrans en précisant par un attribut `title` le nom de la marque.

```html
<span class="su-cockade-of" title="Ouest-France"></span>
<span class="su-cockade-of" title="Ouest-France" style="width: 50px; height: 50px"></span>
```
<div class="sipaui">
	<span class="su-cockade-of" title="Ouest-France"></span>
	<span class="su-cockade-of" title="Ouest-France" style="width: 50px; height: 50px"></span>
</div>


## Catalogue

```html
<span class="su-source su-cockade-of">Ouest-France</span>
<span class="su-source su-cockade-po">Presse Océan</span>
<span class="su-source su-cockade-ml">Le Maine Libre</span>
<span class="su-source su-cockade-co">Le Courrier de l’Ouest</span>
<span class="su-source su-cockade-vv">Voiles et Voiliers</span>
```
<div class="sipaui">
	<ul class="surcharge-storybook">
		<li>
			<span class="su-source su-cockade-of">Ouest-France</span>
		</li>
		<li>
			<span class="su-source su-cockade-po">Presse Océan</span>
		</li>
		<li>
			<span class="su-source su-cockade-ml">Le Maine Libre</span>
		</li>
		<li>
			<span class="su-source su-cockade-co">Le Courrier de l’Ouest</span>
		</li>
		<li>
			<span class="su-source su-cockade-vv">Voiles et Voiliers</span>
		</li>
	</ul>
</div>



<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-source`
- `su-cockade-of`
- `su-cockade-po`
- `su-cockade-ml`
- `su-cockade-co`
- `su-cockade-vv`

### Classes annexes
- `su-articles-list`

</div>
