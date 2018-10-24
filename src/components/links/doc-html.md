# links

À terme, SipaUI proposera **au moins** 2 types de liens (lien standard, lien éditorial, lien neutre [?]…). Pour l’instant, ce composant ne présente que le lien standard.

Comme le prévoit le HTML, les liens ont 4 états&nbsp;: **normal** (/ ou *link*), **survolé** (*hover*), **cliqué** (*active*) et avec **focus** (*focus*). Toutefois, la charte Ouest-France assigne la même apparence aux états *survolé*, *cliqué*, et avec *focus*.

<!-- STORY -->

## Lien standard

Si vous utilisez SipaUI comme système de design de base de votre site, ou si vous faites un bloc qui s’insère dans un tel site, le simple fait de mettre une balise `<a>` devrait suffire à lui donner la bonne apparence. Dans le cas contraire, utiliser la classe `su-link`.

### Version avec la classe `su-link`
```html
<a href="javascript:;" class="su-link">Lien standard SipaUI</a>
```
<a href="javascript:;" class="su-link">Lien standard SipaUI</a>

