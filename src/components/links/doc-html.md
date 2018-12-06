# Links / Liens

SipaUI propose 2 types de liens&nbsp;: les **liens éditoriaux** et les **liens boutons**.

Comme le prévoit le HTML, les liens ont 4 états&nbsp;: **normal** (/ ou *link*), **survolé** (*hover*), **cliqué** (*active*) et avec **focus** (*focus*). Toutefois, la charte Ouest-France assigne la même apparence aux états *survolé*, *cliqué*, et avec *focus*.

<a href="#liste-classes" target="_self" class="su-link-button">Liste des classes disponibles</a>

<!-- STORY -->

## Lien article

Le lien article s’intégrant dans du contenu textuel, sa police, sa taille, sa graisse sont dépendants du texte dans lequel il est inclus.

Ce lien est le lien à utiliser dans du contenu éditorial comme un article. On l’applique en ajoutant la classe `su-article` sur un bloc parent (par exemple&nbsp;: la balise `<article>`). On peut aussi le forcer ponctuellement (si besoin, comme l’absence d’accès à un bloc parent du `<a>`) en appliquant la classe `su-link` directement sur le lien.

### Version avec la classe `su-article` sur un parent
```html
<setion class="su-article">
	<p>Etiam Venenatis Bibendum <a href="javascript:;">Lien article SipaUI</a> Tortor Cursus.</p>
</section>
```
<section class="su-article">
	<p>Etiam Venenatis Bibendum <a href="javascript:;">Lien article SipaUI</a> Tortor Cursus.</p>
</section>

### Version avec la classe `su-link`
```html
<a href="javascript:;" class="su-link">Lien article SipaUI</a>
```
<a href="javascript:;" class="su-link">Lien article SipaUI</a>


## Lien bouton

Utiliser la classe `su-link-button`.

### Version standard
```html
<a href="javascript:;" class="su-link-button">Lien bouton SipaUI</a>
```
<a href="javascript:;" class="su-link-button">Lien bouton SipaUI</a>

### Version inactive
```html
<a href="javascript:;" class="su-link-button su-disabled">Lien bouton SipaUI</a>
```
<a href="javascript:;" class="su-link-button su-disabled">Lien bouton SipaUI</a>

<div id="liste-classes">

## Liste des classes disponibles
- `su-article`
- `su-link` (si besoin de surcharge)
- `su-link-button`
- `su-disabled` (dépendant du composant *helpers*)

</div>
