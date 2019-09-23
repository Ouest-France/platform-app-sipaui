# Paginations / Paginations

La pagination aident les utilisateurs à **naviguer dans de grandes quantités de données.**

## Usage

- L'utilisateur navigue dans un grand nombre d'éléments répartis sur plusieurs pages.
- Chaque page indique à l'utilisateur où il se trouve parmi une quantité de page.
- Certaines pages ont un accès direct, contrairement à l'autres.

## Élément graphique de base

Les pages qui ont un accès direct sont représentées en tant qu'élément graphique. Celui-ci est normé.

### Spécifications

Enabled | Hover / Focus / Pressed | Disabled
------------ | ------------- | ------------- |
image La page 2 seule Enabled | image La page 2 seule Hover / Focus / Pressed | La page 2 seule Disabled si 40 %
Hauteur : 44px  <br> Largeur minimum 44px et padding ?px <br> Couleur du fond : #FFFFFF  <br> Contour : #D4D4D4 angle 3px <br> Numéro : texte standard ? | -  <br> - <br> Couleur du fond : #?  <br> Contour : #D4D4D4 angle 3px <br> - <br> Graisse : bold <br> Police du thème <br> Couleur : #333333 | Opacité : 40 %

- L'espace entre 2 points de navigation est constant 10px.

## Types de pages

### Page courante

- La position actuelle est toujours mise en évidence afin que l'utilisateur puisse se repérer dans l'ensemble de la pagination.
- en plein #E2001A (La position en cours est mise en évidence par (couleur, épaisseur de trait ou un fort contraste.)  ?

#### Nombre de page inférieur à 3 ?

Enabled | Hover / Focus / Pressed ? | Disabled ?
------------ | ------------- | ------------- |
image 4 | image 5 (chiffre souligné?)| image 6
D | f | Opacité : 40 %

#### Nombre de page supérieure ou égale à 3 et la page courante n'est pas la dernière ?

- Dans ce cas, un chevron est présent dans l'élément gaphique de la page courante.
- La distance entre le dernier chiffre et le chevron est : ?px. ?
- L'élément graphique Page courante avec chevron :
  - Il est toujours centré dans son container.
  - Sa largeur varie en fonction de celle de la liste de pages.

Enabled | Hover / Focus | Pressed
------------ | ------------- | ------------- |
image 7 | image 8 | image 9
D | f | n

### Liste des pages

- Un tape sur l'ensemble de l'élément graphique Page courante avec chevron permet d'afficher une liste de pages de manière verticale sous celui-ci.
- Cette liste est composée de certains numéros de pages :
  - **Toutes les unités de la dizaine en cours.
  - La page courante inactive.
  - Les dizaines suivantes jusqu'à la centaine suivante exclut.
  - Les centaines suivantes jusqu'au millier suivant exclut.
  - Les milliers suivants.**
  - Le composant ligne permet de séparer les ensembles de dizaines, centaines et milliers.
- La page suivante et celle précédente ont la même représentation que toutes les autres pages de cette liste.
- Cette liste s'affiche directement sur le contenu existant.

### Page suivante

- L'accès à la page suivante est désactivé ou non affiché lorsque la page courante est la dernière. ?
- La page suivante est toujours située avant la dernière page.
- Elle est symbolisée par un chevron spécifique.

### Dernière page

- L'accès à la dernière page est désactivé lorsque la page courante est la dernière. ?
- La dernière page est toujours le dernier élémnents graphiques de la pagination.
- Elle est symbolisée par son numéro de page.

### Page précédente

- L'accès à la page précédente est désactivé ou non affiché lorsque la page courante est la première. ?
- La page précédente est toujours le deuxième élément graphique de la pagination.
- Elle est symbolisée par un chevron spécifique.

### Première page

- L'accès à la première page est désactivé lorsque la page courante est la première. ?
- La première page est toujours le premier élément graphique de la pagination.
- Elle est symbolisée par son numéro de page.

### Exemples

Ci-dessous la pagination de 2 318 pages :

Page 1 sur 2 318 | Page 2 sur 2 318 | Page 10 sur 2 318 | Page 100 sur 2 318 | Page 333 sur 2 318
------------ | ------------- | ------------- | ------------- | ------------- |
image 9 | image 10 | image 11 | image 10 | image 11

Page 789 sur 2 318 | Page 1 505 sur 2 318 | Page 2 316 sur 2 318 | Page 2 317 sur 2 318| Page 2 318 sur 2 318
------------ | ------------- | ------------- | ------------- | ------------- |
image 9 | image 10 | image 11 | image 10 | image 11

## Bonnes pratiques

- L'ensemble de la pagination se trouve après les données.
- La pagination est centrée dans son parent.
- Chaque page contient la même quantité d'éléments, à l'exception de la dernière page.
- Le nombre d'élément dans une page est défini en fonction de la taille de la page, l'élément et de leur temps de chargement.
- Ne placez pas la pagination sur un fond de couleur similaire.
