# Links/liens

SipaUI propose 2 types de liens&nbsp;: les **liens éditoriaux** et les **liens boutons**.

Comme le prévoit le HTML, les liens ont 4 états&nbsp;: **normal** (/ ou *link*), **survolé** (*hover*), **cliqué** (*active*) et avec **focus** (*focus*). Toutefois, la charte Ouest-France assigne la même apparence aux états *survolé*, *cliqué*, et avec *focus*.

<!-- STORY -->

## Lien éditorial

Le lien éditorial s'intégrant dans du contenu textuel sa police, sa taille, sa graisse sont dépendants du texte dans lequel il est inclus.

Ce lien est le lien par défaut pour toute balise `<a>` dans un site utilisant SipaUI. Il peut être forcé en intégrant la classe `su-editorial` sur un bloc parent ou la classe `su-link` directement sur un lien.

### Version avec la classe `su-editorial` sur un parent
```html
<setion class="su-editorial">
	<a href="javascript:;">Lien éditorial SipaUI</a>
</section>
```
<section class="su-editorial">
	<a href="javascript:;">Lien éditorial SipaUI</a>
</section>

### Version avec la classe `su-link`
```html
<a href="javascript:;" class="su-link">Lien éditorial SipaUI</a>
```
<a href="javascript:;" class="su-link">Lien éditorial SipaUI</a>


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


