# Buttons / Boutons

Comme le prévoit le HTML, chaque bouton a 4 états&nbsp;: **normal** (/ ou *link*), **survolé** (*hover*), **cliqué** (*active*) et avec **focus** (*focus*). Toutefois, la charte Ouest-France assigne la même apparence aux états *survolé*, *cliqué*, et avec *focus*.

Un bouton a besoin d’**au moins 2 classes**&nbsp;: `su-button` pour appliquer le design commun aux boutons et une seconde pour le design lié à sa fonction (comme `su-primary`).

Les *classes* de bouton peuvent être appliquées indifféremment sur des `<button>`, des `<input type="button">` ou des `<a>`.

<div class="alerte">

Un composant `<button>` est de type `submit` par défaut. Par conséquent, sur une page contenant un formulaire, si ce bouton ne doit pas le soumettre, il faut lui préciser `type="button"`.

</div>


<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>


**Accessibilité**

Règles minimales&nbsp;:
- Chaque bouton doit avoir un "nom" explicite (`value` sur un input, texte dans les les balises `<button>` ou `<a>`).
- Si le bouton ne peut avoir ce nom explicite, lui ajouter un `aria-label` (ie&nbsp;: `aria-label="Fermer"` sur un bouton qui ne comporte que le "X").
- Si votre bouton n’est pas un bouton au sens HTML (ie&nbsp;: une balise `<a>`) il faut lui adjoindre `role="button"`.

Cerise&nbsp;:
- utiliser l’attribut `aria-labelledby` (<a href="https://developer.mozilla.org/fr/docs/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-labelledby" target="_blank" rel="noopener">pour en savoir plus</a>)

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Helpers**

</div>


<!-- STORY -->

## Types de boutons

### Bouton primaire
```html
<button class="su-button su-primary">Bouton primaire</button>
```
<div class="sipaui">
	<button class="su-button su-primary">Bouton primaire</button>
</div>

### Bouton secondaire
```html
<button class="su-button su-secondary">Bouton secondaire</button>
```
<div class="sipaui">
	<button class="su-button su-secondary">Bouton secondaire</button>
</div>

### Bouton abonnement
```html
<button class="su-button su-subscription">Bouton abonnement</button>
```
<div class="sipaui">
	<button class="su-button su-subscription">Bouton abonnement</button>
</div>

## Contextes particuliers

### Boutons inactifs
L’aspect inactif peut être porté par la classe `su-disabled` (issu des *Helpers*) ou par l’attribut `disabled`.
```html
<button class="su-button su-primary" disabled="disabled">Bouton primaire inactif</button>
<button class="su-button su-secondary su-disabled">Bouton secondaire inactif</button>
<button class="su-button su-subscription su-disabled">Bouton abonnement inactif</button>
```
<div class="sipaui">
	<button class="su-button su-primary" disabled="disabled">Bouton primaire</button> <button class="su-button su-secondary su-disabled">Bouton secondaire inactif</button> <button class="su-button su-subscription su-disabled">Bouton abonnement inactif</button>
</div>

### Petits boutons
```html
<button class="su-button su-primary su-small">Bouton petit</button>
<button class="su-button su-secondary su-small">Bouton petit</button>
```
<div class="sipaui">
	<button class="su-button su-primary su-small">Bouton petit</button> <button class="su-button su-secondary su-small">Bouton petit</button>
</div>

### Bouton pleine largeur
```html
<button class="su-button su-primary su-fullwidth">Bouton pleine largeur</button>
```
<div class="sipaui">
	<button class="su-button su-primary su-fullwidth">Bouton pleine largeur</button>
</div>

### Bouton pleine largeur sur mobile
```html
<button class="su-button su-primary su-fullwidth-mobile">Bouton pleine largeur mobile</button>
```
<div class="sipaui">
	<button class="su-button su-primary su-fullwidth-mobile">Bouton pleine largeur mobile</button>
</div>

<div id="liste-classes">

## Liste des classes disponibles
- `su-button`
- `su-primary`
- `su-secondary`
- `su-subscription`
- `su-premium`
- `su-small`

### Classes annexes
- `su-fullwidth` (dépendant du composant *Helpers*)
- `su-fullwidth-mobile` (dépendant du composant *Helpers*) 
- `su-disabled` (dépendant du composant *Helpers*) 
</div>
