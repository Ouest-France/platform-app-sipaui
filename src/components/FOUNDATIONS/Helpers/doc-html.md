# Helpers / Classes d’aide

Les classes d’aide permettent d’appliquer des styles CSS particuliers à des objets qui ne sont pas des composants ou à des composants qui n’ont pas ces styles spécifiques (ie&nbsp;: mettre une position relative, faire un clearfix…).

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

<!-- STORY -->

## Clearfix
Le clearfix est un hack CSS permettant de faire en sorte que des objets flottants (avec la propriété CSS `float`) puissent prendre leur place dans la page et ainsi pousser le contenu suivant en dessous d’eux, plutôt que de passer par-dessus. La classe de clearfix doit être posée sur le parent du/des bloc(s) flottant(s). SipaUI propose 2 classes pour le clearfix&nbsp;: `su-clearfix` et `su-cf` qui font la même chose (la seconde est une version courte).

```html
<div style="border: 1px solid #ccc;" class="su-clearfix">
	Bloc parent comportant le clearfix.
	<div style="float: right; background: #efefef; height: 70px">Bloc flotant de 70px de haut.</div>
</div>
<div style="border: 1px solid #ccc;">Autre contenu</div>
```
<div class="sipaui">
	<div style="border: 1px solid #ccc;" class="su-clearfix">
		Bloc parent comportant le clearfix.
		<div style="float: right; background: #efefef; height: 70px">Bloc flotant de 70px de haut.</div>
	</div>
	<div style="border: 1px solid #ccc;">Autre contenu</div>
</div>

## Masquage
SipaUI propose 2 classes génériques et 20 classes liées au points de ruptures pour masquer un objet.

### Classes génériques

- `su-hidden`,
- `su-visually-hidden`.

La première supprime l’objet de la page pour tous les navigateurs (combinaison de `display: none` et de `visibility: hidden`). La seconde le rend juste invisible pour les navigateurs visuels&nbsp;; l’objet reste accessible aux lecteurs d’écran (pour les personnes avec handicap visuel).

### Classes de point de rupture

- `su-hidden-xs`,
- `su-hidden-sm`,
- `su-hidden-md`,
- `su-hidden-lg`,
- `su-hidden-xl`,
- `su-visible-xs`,
- `su-visible-sm`,
- `su-visible-md`,
- `su-visible-lg`,
- `su-visible-xl`,
- `su-visible-inline-block-xs`,
- `su-visible-inline-block-sm`,
- `su-visible-inline-block-md`,
- `su-visible-inline-block-lg`,
- `su-visible-inline-block-xl`,
- `su-visible-table-cell-xs`,
- `su-visible-table-cell-sm`,
- `su-visible-table-cell-md`,
- `su-visible-table-cell-lg`,
- `su-visible-table-cell-xl`.

Avec les classes `su-hidden-..` les objets normalement visibles sont masqués pour le point de rupture spécifié en fin de nom de classe.

```html
<div class="su-hidden-xs">1. su-hidden-xs</div>
<div class="su-hidden-sm">2. su-hidden-sm</div>
<div class="su-hidden-md">3. su-hidden-md</div>
<div class="su-hidden-lg">4. su-hidden-lg</div>
<div class="su-hidden-xl">5. su-hidden-xl</div>
```
<div class="sipaui">
	<div class="su-hidden-xs" style="background-color: #70b2ff">1. su-hidden-xs</div>
	<div class="su-hidden-sm" style="background-color: #74ef37">2. su-hidden-sm</div>
	<div class="su-hidden-md" style="background-color: #fdff2e">3. su-hidden-md</div>
	<div class="su-hidden-lg" style="background-color: #ffc850">4. su-hidden-lg</div>
	<div class="su-hidden-xl" style="background-color: #ff5858">5. su-hidden-xl</div>
</div>

Avec les classes `su-visible-..` les objets sont invisibles par défaut et visibles en mode *display: block* pour le point de rupture spécifié en fin de nom de classe.

```html
<div class="su-visible-xs">1. su-visible-xs</div>
<div class="su-visible-sm">2. su-visible-sm</div>
<div class="su-visible-md">3. su-visible-md</div>
<div class="su-visible-lg">4. su-visible-lg</div>
<div class="su-visible-xl">5. su-visible-xl</div>
```
<div class="sipaui">
	<div class="su-visible-xs" style="background-color: #70b2ff">1. su-visible-xs</div>
	<div class="su-visible-sm" style="background-color: #74ef37">2. su-visible-sm</div>
	<div class="su-visible-md" style="background-color: #fdff2e">3. su-visible-md</div>
	<div class="su-visible-lg" style="background-color: #ffc850">4. su-visible-lg</div>
	<div class="su-visible-xl" style="background-color: #ff5858">5. su-visible-xl</div>
</div>

Il vous est par ailleurs possible de choisir un autre type de *display* lors de l’affichage de l’objet avec les classes `su-visible-inline-block-..` et `su-visible-table-cell-..`.

## Display
Deux classes sont disponibles pour forcer un mode d’affichage&nbsp;:
- `su-block`,
- `su-inline-block`.

Elles peuvent bien sûr servir à changer l’implantation d’un objet dans son environnement, mais elles sont surtout utiles pour rendre visible via JS un objet qui était préalablement invisible.

## Position
Le framework offre 3 classes pour forcer une position&nbsp;:
- `su-relative`,
- `su-absolute`,
- `su-fixed`.

## Alignement
Il y a 5 classes d’alignement&nbsp;; 4 pour du texte et une pour un block&nbsp;:
- `su-text-center`&nbsp;: centre le texte dans son parent,
- `su-text-justify`&nbsp;: justifie le texte dans son parent,
- `su-text-left`&nbsp;: fer (aligne) le texte à gauche dans son parent,
- `su-text-right`&nbsp;: fer (aligne) le texte à droite dans son parent,
- `su-block-center`&nbsp;: centre un bloc dans son parent. 

```html
<p class="su-text-center">Paragraphe avec texte centré. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
```
<div class="sipaui">
	<p class="su-text-center">Paragraphe avec texte centré. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
</div>

```html
<p class="su-text-justify">Paragraphe avec texte justifié. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
```
<div class="sipaui">
	<p class="su-text-justify">Paragraphe avec texte justifié. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
</div>

```html
<p class="su-text-left">Paragraphe avec texte féré à gauche. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
```
<div class="sipaui">
	<p class="su-text-left">Paragraphe avec texte féré à gauche. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
</div>

```html
<p class="su-text-right">Paragraphe avec texte féré à gauche. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
```
<div class="sipaui">
	<p class="su-text-right">Paragraphe avec texte féré à gauche. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
</div>

```html
<p style="width: 60%;" class="su-block-center">Paragraphe à largeur fixée et centré. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
```
<div class="sipaui">
	<p style="width: 60%;" class="su-block-center">Paragraphe à largeur fixée et centré. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
</div>

## Tailles
Deux classes permettent de forcer la largeur d’un composant à 100%&nbsp;;
- `su-fullwidth`
- `su-fullwidth-mobile`

La seconde n’applique la largeur à 100% que sous le palier mobile.

```html
<button class="su-button su-secondary su-fullwidth-mobile">Bouton en pleine largeur sur mobile</button>
```
<div class="sipaui">
	<button class="su-button su-secondary su-fullwidth-mobile">Bouton en pleine largeur sur mobile</button>
</div>

## Incapacité
Classe permettant de rendre visuellement l’incapacité&nbsp;/ l’indisponibilté d’un objet en le rendant en partie transparent&nbsp;:
- `su-disabled`

```html
<p class="su-disabled">Paragraphe utilisant cette classe.</p>
```
<div class="sipaui">
	<p class="su-disabled">Paragraphe utilisant cette classe.</p>
</div>


<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-clearfix` ou `su-cf`
- `su-hidden`
- `su-visually-hidden`
- `su-hidden-xs`
- `su-hidden-sm`
- `su-hidden-md`
- `su-hidden-lg`
- `su-hidden-xl`
- `su-visible-xs`
- `su-visible-sm`
- `su-visible-md`
- `su-visible-lg`
- `su-visible-xl`
- `su-visible-inline-block-xs`
- `su-visible-inline-block-sm`
- `su-visible-inline-block-md`
- `su-visible-inline-block-lg`
- `su-visible-inline-block-xl`
- `su-visible-table-cell-xs`
- `su-visible-table-cell-sm`
- `su-visible-table-cell-md`
- `su-visible-table-cell-lg`
- `su-visible-table-cell-xl`
- `su-block`
- `su-inline-block`
- `su-relative`
- `su-absolute`
- `su-fixed`
- `su-text-center`
- `su-text-justify`
- `su-text-left`
- `su-text-right`
- `su-block-center`
- `su-fullwidth`
- `su-fullwidth-mobile`
- `su-disabled`

</div>
