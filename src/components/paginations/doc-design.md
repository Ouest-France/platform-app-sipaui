# Paginations / Paginations

La pagination aident les utilisateurs à naviguer dans de grandes quantités de données.

## Usage

- L'utilisateur navigue dans un grand nombre d'éléments répartis sur plusieurs pages.
- Chaque page indique à l'utilisateur où il se trouve parmi une quantité de page.
- Certaines pages ont un accès direct, par exemple la suivante.

## Spécifications

- Chaque page contient la même quantité d'éléments, à l'exception de la dernière page.
- L'espace entre 2 points de navigation est constant XXpx ?
- Les pages sont numérotées à l'aide d'éléments graphiques.

### Élément graphique

Enabled | Hover / Focus / Pressed | Disabled
------------ | ------------- | ------------- |
image La page suivante seule Enabled | image La page suivante seule Hover / Focus / Pressed | La page suivante seule Disabled si 40 %
Hauteur : 44px ??  <br> Largeur minimum 44px et padding 12px ?? <br> Couleur : #E2001A ??  <br> Contour : angle 3px <br> Taille de caractère : 16px ? <br> Graisse : bold ? <br> Police du thème | - <br> - <br> Couleur : #B40015  <br> - <br> - <br> - <br> | Opacité : 40 %

### Exemple

#### La page courante

- La position actuelle est toujours mise en évidence afin que l'utilisateur puissent se repérer dans l'ensemble de la pagination.

#### La liste des pages

- Suite à un tape sur le chevron, une liste de page s'ouvre :
  - Toutes les unités de la dizaine en cours s'affiche.
  - La page courante est affichée mais inactive.
  - Les dizaines, centaines et millièmes suivantes est listées le cas échéant.

#### La page suivante

- L'accès à la page suivante est absent lorsque la page courante est la dernière.

#### La dernière page

- L'accès à la dernière page est absent lorsque la page courante est la dernière.
- quid avant dernière ?

#### La page précédente

- L'accès à la page précédente est absent lorsque la page courante est la première.

#### La première page

- L'accès à la première page est absent lorsque la page courante est la dernière.
- quid avant dernière ?

## Bonnes pratiques

- L'ensemble de la pagination se trouve après les données.
- La pagination est centrée dans son parent.
- Le nombre d'élément dans une page est défini en fonction de la taille de la page, l'élément et de leur temps de chargement.


 <div class="do-dont">
 <div class="dont">

image |
------------ |
**Don’t** <br/> Ne placez pas la pagination sur un fond de couleur similaire.

 </div>
 </div>
