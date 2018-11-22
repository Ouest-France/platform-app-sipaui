# Links/liens

SipaUI propose 2 types de liens&nbsp;: les **liens éditoriaux** et les **liens boutons**.

Comme le prévoit le HTML, les liens ont 4 états&nbsp;: **normal** (/ ou *link*), **survolé** (*hover*), **cliqué** (*active*) et avec **focus** (*focus*). Toutefois, la charte Ouest-France assigne la même apparence aux états *survolé*, *cliqué*, et avec *focus*.

<a href="#liste-classes" target="_self" class="su-link">Liste des classes disponibles</a>

<!-- STORY -->

## Lien éditorial

Le lien éditorial s’intégrant dans du contenu textuel sa police, sa taille, sa graisse sont dépendants du texte dans lequel il est inclus.

Ce lien est le lien par défaut pour toute balise `<a>` dans un site utilisant SipaUI. Il peut être forcé en intégrant la classe `su-editorial` sur un bloc parent ou la classe `su-link` directement sur un lien.

### Version avec la classe `su-editorial` sur un parent
```html
<setion class="su-editorial">
	<p>Etiam Venenatis Bibendum <a href="javascript:;">Lien éditorial SipaUI</a> Tortor Cursus.</p>
</section>
```
<section class="su-editorial">
	<p>Etiam Venenatis Bibendum <a href="javascript:;">Lien éditorial SipaUI</a> Tortor Cursus.</p>
</section>

### Version avec la classe `su-link`
```html
<a href="javascript:;" class="su-link">Lien éditorial SipaUI</a>
```
<p>Etiam Venenatis Bibendum <a href="javascript:;" class="su-link">Lien éditorial SipaUI</a> Tortor Cursus. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor.</p>


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
- `su-editorial`
- `su-link` (si besoin de surcharge)
- `su-link-button`
- `su-disabled`

</div>
