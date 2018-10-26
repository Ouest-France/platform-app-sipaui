# Links

SipaUI propose 2 types de liens&nbsp;: les **liens éditoriaux** et les **liens boutons**.

Comme le prévoit le HTML, les liens ont 4 états&nbsp;: **normal** (/ ou *link*), **survolé** (*hover*), **cliqué** (*active*) et avec **focus** (*focus*). Toutefois, la charte Ouest-France assigne la même apparence aux états *survolé*, *cliqué*, et avec *focus*.

<!-- STORY -->

## Lien éditorial

Le lien éditorial est le **lien intégré dans du contenu textuel** (article ou tout autre texte). À ce titre, sa police, sa taille, sa graisse sont dépendants du texte dans lequel il est inclus.

Ce lien est le lien par défaut pour toute balise `<a>` dans un site utilisant SipaUI. Il peut être forcé sur un bloc de texte ayant la classe `su-editorial` ou sur un lien ayant la classe `su-link`.

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

Le lien bouton sert pour un **lien isolé qui a une fonctionnalité proche du bouton, sans en avoir le poids** (ie&nbsp;: un lien «&nbsp;Créer un compte&nbsp;» dans un formulaire de connexion). Il ne peut donc être inclus dans un texte.

Utiliser la classe `su-link-button`.

### Version avec la classe `su-link`
```html
<a href="javascript:;" class="su-link-button">Lien bouton SipaUI</a>
```
<a href="javascript:;" class="su-link-button">Lien bouton SipaUI</a>


