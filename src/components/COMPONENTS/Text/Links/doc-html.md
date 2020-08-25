# Links / Liens

SipaUI propose 2 types de liens&nbsp;: les **liens éditoriaux** et les **liens boutons**.

Comme le prévoit le HTML, les liens ont 4 états&nbsp;: **normal** (/ ou *link*), **survolé** (*hover*), **cliqué** (*active*) et avec **focus** (*focus*). Toutefois, la charte Ouest-France assigne la même apparence aux états *survolé*, *cliqué*, et avec *focus*.

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Helpers**

</div>


## Lien par défaut

Le lien par défaut est celui affiché avec une simple balise `<a>`, hors d’un contenu rédactionnel (càd hors d’un conteneur avec la classe `su-article`).

```html
<p>Etiam Venenatis Bibendum <a href="javascript:;">Lien article SipaUI</a> Tortor Cursus.</p>
```
<div class="sipaui">
		<p>Etiam Venenatis Bibendum <a href="javascript:;" class="surcharge-storybook">Lien article SipaUI</a> Tortor Cursus.</p>
</div>


## Lien léger

Pour appliquer un style de lien léger, utilisez la classe `su-link-light` le lien sera alors souligné et de la couleur de son contexte. Par contre, la couleur hover est la même que pour les autres liens, quel que soit le contexte

```html
<p><a href="javascript:;" class="su-link-light">Lien léger</a><p>
<p style="background: #bbb; color: #fff"><a href="javascript:;" class="su-link-light">Lien léger</a></p>
```
<div class="sipaui">
	<p><a href="javascript:;" class="su-link-light">Lien léger</a></p>
	<p style="background: #bbb; color: #fff"><a href="javascript:;" class="su-link-light">Lien léger</a></p>
</div>

Cela fonctionne aussi dans une zone éditoriale (avec la classe `su-article` sur un parent)&nbsp;:
 
```html
<section class="su-article">
	<p>Etiam Venenatis Bibendum <a href="javascript:;" class="su-link-light">Lien léger</a> Tortor Cursus.</p>
</section>
```
<div class="sipaui">
	<section class="su-article">
		<p>Etiam Venenatis Bibendum <a href="javascript:;" class="su-link-light">Lien léger</a> Tortor Cursus.</p>
	</section>
</div>


## Lien éditorial ou lien article

Il s'agit du lien dans un article, s’intégrant dans du contenu textuel. Sa police, sa taille, sa graisse sont dépendants du texte dans lequel il est inclus.

Ce lien est le lien à utiliser dans du contenu éditorial comme un article. On l’applique en ajoutant la classe `su-article` sur un bloc parent (par exemple&nbsp;: la balise `<article>`). On peut aussi le forcer ponctuellement (si besoin, comme l’absence d’accès à un bloc parent du `<a>`) en appliquant la classe `su-link` directement sur le lien.

### Version avec la classe `su-article` sur un parent
```html
<section class="su-article">
	<p>Etiam Venenatis Bibendum <a href="javascript:;">Lien article</a> Tortor Cursus.</p>
</section>
```
<div class="sipaui">
	<section class="su-article">
		<p>Etiam Venenatis Bibendum <a href="javascript:;">Lien article</a> Tortor Cursus.</p>
	</section>
</div>

### Version avec la classe `su-link`
```html
<a href="javascript:;" class="su-link">Lien article</a>
```
<div class="sipaui">
	<a href="javascript:;" class="su-link">Lien article</a>
</div>


## Lien non stylé

Il peut arriver qu'il soit nécessaire de supprimer le style de lien sur un élément. Par exemple avec un lien sur un bloc. Pour supprimer ce style, utilisez la classe `su-not-link`.

```html
<section class="su-article">
	<a href="javascript:;" class="su-not-link" style="display: block; width: 100px; text-align: center;">
    	<p style="background: rgba(0,0,0, .6); color: white;">Purus Lorem Pellentesque.</p>
    </a>
</section>
```
<div class="sipaui">
	<section class="su-article">
		<a href="javascript:;" class="su-not-link" style="display: block; width: 100px; text-align: center;">
        	<p style="background: rgba(0,0,0, .6); color: white;">Purus Lorem Pellentesque.</p>
        </a>
	</section>
</div>


## Lien bouton

Utiliser la classe `su-link-button`.

### Version standard
```html
<a href="javascript:;" class="su-link-button">Lien bouton SipaUI</a>
```
<div class="sipaui">
	<a href="javascript:;" class="su-link-button">Lien bouton SipaUI</a>
</div>

### Version inactive
```html
<a href="javascript:;" class="su-link-button su-disabled" aria-disabled="true">Lien bouton SipaUI</a>
```
<div class="sipaui">
	<a href="javascript:;" class="su-link-button su-disabled" aria-disabled="true">Lien bouton SipaUI</a>
</div>

<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-article`
- `su-link` (si besoin de surcharge)
- `su-link-light`
- `su-link-button`
- `su-not-link`

### Classes annexes
- `su-disabled` (dépendant du composant *Helpers*)

</div>
