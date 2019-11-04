# Paginations / Paginations

La pagination aident les utilisateurs à **naviguer dans de grandes quantités de données.**

## Usage

- L'utilisateur consulte un grand nombre d'éléments répartis sur plusieurs pages.
- Chaque page indique à l'utilisateur où il se trouve parmi une quantité de page.
- Certaines pages ont un accès direct, contrairement à d'autres.

## La pagination
- L'ensemble de la pagination est composée de la première page, la page précédente, la page courante, la page suivante et la dernière page. La liste de page est présente le cas échéant.
- La largeur totale de l'ensemble de la pagination est de 280px maximum.

## Élément de base

Les pages qui ont un accès direct sont représentées en tant qu'élément de base.

### Spécifications

Enabled | Hover / Focus / Pressed | Disabled
------------ | ------------- | ------------- |
image La page 2 seule Enabled | image La page 2 seule Hover / Focus / Pressed | La page 2 seule Disabled si 40 %
Hauteur : 44px  <br> Largeur : 44px minimum et padding 10?px de chaque côté <br> Couleur du fond : #FFFFFF  <br> Contour : #D4D4D4 <br> Chiffre : texte standard | -  <br> - <br> -  <br> Contour : #B40015 <br> - <br> Chiffre : texte standard #B40015 | Opacité : 40 %

- L'espace entre 2 éléments est constant : 10px.

## Types de pages

### Page courante

- La position actuelle est toujours mise en évidence afin que l'utilisateur puisse se repérer dans l'ensemble de la pagination.

Enabled | Hover / Focus / Pressed | Disabled
------------ | ------------- | ------------- |
image 4 | image 5 | image 6 (uniquement chevron)
Hauteur : 44px  <br> Largeur : paddings 20px à gauche du chiffre et à droite de la flèche, et 10px entre ces 2 éléments <br> Couleur du fond : #FFFFFF  <br> Contour : #D4D4D4 <br> Chiffre : texte standard bold <br> Chevron : #333333 | -  <br> - <br> -  <br> Contour : #B40015 <br> Chiffre : texte standard bold #B40015 <br> Chevron : #B40015  | Opacité du chevron : 40 %

Dans l'état Disabled, seule l'affichage de la liste de pages est inactif.

### Liste des pages

- Un tape sur l'ensemble de l'élément Page courante permet d'afficher une liste de pages de manière verticale sous celui-ci.
- Cette liste est composée de certains numéros de pages :
  - **Toutes les unités de la dizaine en cours.
  - La page courante inactive.
  - Les dizaines suivantes jusqu'à la centaine suivante exclue.
  - Les centaines suivantes jusqu'au millier suivant exclue.
  - Les milliers suivants.**
  - Le composant Ligne de séparation permet de dissocier les dizaines, les centaines et les milliers.
- Les chiffres sont des textes standards.
- Cette liste s'affiche directement sur le contenu existant.

### Page suivante

- La page suivante est toujours située avant la dernière page.
- Elle est symbolisée par le composant Flèche droite disponible dans Icons.
- L'accès à la page suivante est désactivé lorsque la page courante est la dernière.

### Dernière page

- La dernière page est toujours le dernier élémnents graphique de la pagination.
- Elle est symbolisée par son numéro de page.
- L'accès à la dernière page est désactivé lorsque la page courante est la dernière.

### Page précédente

- La page précédente est toujours le deuxième élément de la pagination.
- Elle est symbolisée par le composant Flèche gauche disponible dans Icons.
- L'accès à la page précédente est désactivé lorsque la page courante est la première.

### Première page

- La première page est toujours le premier élément graphique de la pagination.
- Elle est symbolisée par le numéro 1.
- L'accès à la première page est désactivé lorsque la page courante est la première.

### Exemples

Ci-dessous la pagination de 2 318 pages :

Page 1 sur 2 318 | Page 1 505 sur 2 318 | Page 2 318 sur 2 318
------------ | ------------- | ------------- |
image 9 | image 10 | image 11 | image 10

## Bonnes pratiques

- L'ensemble de la pagination se trouve après les données.
- La pagination est centrée dans son parent.
- Chaque page contient la même quantité de données, à l'exception de la dernière page.
- Le nombre d'élément dans une page est défini en fonction des tailles des pages et des données, et de leur temps de chargement.
- Ne placez pas la pagination sur un fond de couleur similaire à celles qui constituent la pagination (sauf #FFFFFF).
