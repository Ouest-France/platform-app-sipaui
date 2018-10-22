# Boutons

Comme le prévoit le HTML, chaque bouton a 4 états&nbsp;: **normal** (/ ou *link*), **survolé** (*hover*), **cliqué** (*active*) et avec **focus** (*focus*). Toutefois, la charte Ouest-France assigne la même apparence aux états *survolé*, *cliqué*, et avec *focus*.

Un bouton a besoin d’**au moins 2 classes**&nbsp;: `su-button` pour appliquer le design commun aux boutons et une seconde pour le design lié à sa fonction (comme `su-primary`).

Les *classes* de bouton peuvent être appliquées indifférement sur des `<buttons>`, des `<input type="button">` ou des `<a>`.

<!-- STORY -->

## Primaire
```html
<button class="su-button su-primary">Bouton primaire</button>
```
<button class="su-button su-primary">Bouton primaire</button>

## Secondaire
```html
<button class="su-button su-secondary">Bouton secondaire</button>
```
<button class="su-button su-secondary">Bouton secondaire</button>

## Abonnement
```html
<button class="su-button su-subscription">Bouton abonnement</button>
```
<button class="su-button su-subscription">Bouton abonnement</button>

## Premium
```html
<button class="su-button su-premium">Bouton premium</button>
```
<button class="su-button su-premium">Bouton premium</button>

## Inactif
L’aspect inactif peut être porté par la classe `su-disabled` ou par l’attribut `disabled`.
```html
<button class="su-button su-primary" disabled="disabled">Bouton primaire inactif</button>
<button class="su-button su-secondary su-disabled">Bouton secondaire inactif</button>
<button class="su-button su-subscription su-disabled">Bouton abonnement inactif</button>
```
<button class="su-button su-primary su-" disabled="disabled">Bouton primaire</button> <button class="su-button su-secondary su-disabled">Bouton secondaire inactif</button> <button class="su-button su-subscription su-disabled">Bouton abonnement inactif</button>

## Petit
```html
<button class="su-button su-primary su-small">Bouton petit</button>
<button class="su-button su-secondary su-small">Bouton petit</button>
```
<button class="su-button su-primary su-small">Bouton petit</button> <button class="su-button su-secondary su-small">Bouton petit</button>

## Pleine largeur
```html
<button class="su-button su-primary su-fullwidth">Bouton pleine largeur</button>
```
<button class="su-button su-primary su-fullwidth">Bouton pleine largeur</button>

## Petit pleine largeur sur mobile
```html
<button class="su-button su-primary su-fullwidth-mobile">Bouton pleine largeur mobile</button>
```
<button class="su-button su-primary su-fullwidth-mobile">Bouton pleine largeur mobile</button>
