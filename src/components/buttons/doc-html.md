# Buttons / Boutons

Comme le prévoit le HTML, chaque bouton a 4 états&nbsp;: **normal** (/ ou *link*), **survolé** (*hover*), **cliqué** (*active*) et avec **focus** (*focus*). Toutefois, la charte Ouest-France assigne la même apparence aux états *survolé*, *cliqué*, et avec *focus*.

Un bouton a besoin d’**au moins 2 classes**&nbsp;: `su-button` pour appliquer le design commun aux boutons et une seconde pour le design lié à sa fonction (comme `su-primary`).

Les *classes* de bouton peuvent être appliquées indifféremment sur des `<buttons>`, des `<input type="button">` ou des `<a>`.

<a href="#liste-classes" target="_self" class="su-link-button">Liste des classes disponibles</a>


**Accessibilité**

Règles minimales&nbsp;:
- Chaque bouton doit avoir un "nom" explicite (`value` sur un input, texte dans les les balises `<button>` ou `<a>`).
- Si le bouton ne peut avoir ce nom explicite, lui ajouter un `aria-label` (ie&nbsp;: `aria-label="Fermer"` sur un bouton qui ne comporte que le "X").
- Si votre bouton n’est pas un bouton au sens HTML (ie&nbsp;: une balise `<a>`) il faut lui adjoindre `role="button"`.

Cerise&nbsp;:
- utiliser l’attribut `aria-labelledby` (<a href="https://developer.mozilla.org/fr/docs/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-labelledby" target="_blank" rel="noopener" class="su-link">pour en savoir plus</a>)

<!-- STORY -->

## Types de boutons

### Bouton primaire
```html
<button class="su-button su-primary">Bouton primaire</button>
```
<button class="su-button su-primary">Bouton primaire</button>

### Bouton secondaire
```html
<button class="su-button su-secondary">Bouton secondaire</button>
```
<button class="su-button su-secondary">Bouton secondaire</button>

### Bouton abonnement
```html
<button class="su-button su-subscription">Bouton abonnement</button>
```
<button class="su-button su-subscription">Bouton abonnement</button>

### Bouton Premium
```html
<button class="su-button su-premium">Bouton premium</button>
```
<button class="su-button su-premium">Bouton premium</button>

## Contextes particuliers

### Boutons inactifs
L’aspect inactif peut être porté par la classe `su-disabled` (issu des *helpers*) ou par l’attribut `disabled`.
```html
<button class="su-button su-primary" disabled="disabled">Bouton primaire inactif</button>
<button class="su-button su-secondary su-disabled">Bouton secondaire inactif</button>
<button class="su-button su-subscription su-disabled">Bouton abonnement inactif</button>
```
<button class="su-button su-primary su-" disabled="disabled">Bouton primaire</button> <button class="su-button su-secondary su-disabled">Bouton secondaire inactif</button> <button class="su-button su-subscription su-disabled">Bouton abonnement inactif</button>

### Petits boutons
```html
<button class="su-button su-primary su-small">Bouton petit</button>
<button class="su-button su-secondary su-small">Bouton petit</button>
```
<button class="su-button su-primary su-small">Bouton petit</button> <button class="su-button su-secondary su-small">Bouton petit</button>

### Bouton pleine largeur
```html
<button class="su-button su-primary su-fullwidth">Bouton pleine largeur</button>
```
<button class="su-button su-primary su-fullwidth">Bouton pleine largeur</button>

### Bouton pleine largeur sur mobile
```html
<button class="su-button su-primary su-fullwidth-mobile">Bouton pleine largeur mobile</button>
```
<button class="su-button su-primary su-fullwidth-mobile">Bouton pleine largeur mobile</button>

<div id="liste-classes">

## Liste des classes disponibles
- `su-button`
- `su-primary`
- `su-secondary`
- `su-subscription`
- `su-premium`
- `su-small`
- `su-fullwidth` (issu des *helpers*)
- `su-fullwidth-mobile` (issu des *helpers*) 
- `su-disabled` (dépendant du composant *helpers*) 

</div>
