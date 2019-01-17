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
<div style="border: 1px solid #ccc;" class="su-clearfix">
	Bloc parent comportant le clearfix.
	<div style="float: right; background: #efefef; height: 70px">Bloc flotant de 70px de haut.</div>
</div>
<div style="border: 1px solid #ccc;">Autre contenu</div>

## Masquage
SipaUI propose 2 classes pour masquer un objet&nbsp;:
- `su-hidden`,
- `su-visually-hidden`.

La première supprime l’objet de la page pour tous les navigateurs (combinaison de `display: none` et de `visibility: hidden`). La seconde le rend juste invisible pour les navigateurs visuels&nbsp;; l’objet reste accessible aux lecteurs d’écran (pour les personnes avec handicap visuel).

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
Il y a 3 classes d’alignement&nbsp;; deux pour du texte et une pour un block&nbsp;:
- `su-text-center`&nbsp;: centre le texte dans son parent,
- `su-text-justify`&nbsp;: justifie le texte dans son parent,
- `su-block-center`&nbsp;: centre un bloc dans son parent. 

```html
<p class="su-text-center">Paragraphe avec texte centré. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
```
<p class="su-text-center">Paragraphe avec texte centré. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

```html
<p class="su-text-justify">Paragraphe avec texte justifié. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
```
<p class="su-text-justify">Paragraphe avec texte justifié. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

```html
<p style="width: 60%;" class="su-block-center">Paragraphe à largeur fixée et centré. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
```
<p style="width: 60%;" class="su-block-center">Paragraphe à largeur fixée et centré. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

## Tailles
Deux classes permettent de forcer la largeur d’un composant à 100%&nbsp;;
- `su-fullwidth`
- `su-fullwidth-mobile`

La seconde n’applique la largeur à 100% que sous le palier mobile.

```html
<button class="su-button su-secondary su-fullwidth-mobile">Bouton en pleine largeur sur mobile</button>
```
<button class="su-button su-secondary su-fullwidth-mobile">Bouton en pleine largeur sur mobile</button>

## Incapacité
Classe permettant de rendre visuellement l’incapacité&nbsp;/ l’indisponibilté d’un objet en le rendant en partie transparent&nbsp;:
- `su-disabled`

```html
<p class="su-disabled">Paragraphe utilisant cette classe.</p>
```
<p class="su-disabled">Paragraphe utilisant cette classe.</p>


<div id="liste-classes">

## Liste des classes disponibles
- `su-clearfix` ou `su-cf`
- `su-hidden`
- `su-visually-hidden`
- `su-block`
- `su-inline-block`
- `su-relative`
- `su-absolute`
- `su-fixed`
- `su-text-center`
- `su-text-justify`
- `su-block-center`
- `su-fullwidth`
- `su-fullwidth-mobile`
- `su-disabled`

</div>
