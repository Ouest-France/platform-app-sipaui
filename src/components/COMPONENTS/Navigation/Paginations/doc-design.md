# Paginations / Paginations

La pagination aide les utilisateurs à **naviguer dans de grandes quantités de données.**

## Usage

- L’utilisateur consulte un grand nombre d’éléments répartis sur plusieurs pages.
- La pagination indique à l’utilisateur où il se trouve parmi ces pages.
- Certaines pages ont un accès direct, contrairement à d’autres.

## La pagination
- L’ensemble de la pagination est composé de la première page, la page précédente, la page courante, la page suivante et la dernière page. Une liste de page est présente le cas échéant.

## Élément de base

- Un élément de base est une représentation graphique non présente dans la liste de pages et qui donne un accès direct à une page.

### Spécifications

Enabled | Hover / Focus / Pressed | Disabled
------------ | ------------- | ------------- |
![element__base__enabled](components/COMPONENTS/Navigation/Paginations/design/element__base__enabled.png) | ![element__base__hover](components/COMPONENTS/Navigation/Paginations/design/element__base__hover.png) | ![element__base__disabled](components/COMPONENTS/Navigation/Paginations/design/element__base__disabled.png)
Hauteur&nbsp;: 44px  <br> Largeur&nbsp;: 50px <br> Fond&nbsp;: #FFFFFF  <br> Contour&nbsp;: #D4D4D4 <br> Chiffre&nbsp;: texte standard | -  <br> - <br> - <br> Contour&nbsp;: #B40015 <br> Chiffre&nbsp;: texte standard #B40015 | Opacité&nbsp;: 40&nbsp;%

- Le chiffre est centré dans le conteneur.

## Types de pages

### Page courante

- La position actuelle est toujours mise en évidence afin que l’utilisateur puisse se repérer dans l’ensemble de la pagination.

Enabled | Hover / Focus / Pressed | Disabled
------------ | ------------- | ------------- |
![element__courant__enabled](components/COMPONENTS/Navigation/Paginations/design/element__courant__enabled.png) | ![element__courant__hover](components/COMPONENTS/Navigation/Paginations/design/element__courant__hover.png) | ![element__courant__disabled](components/COMPONENTS/Navigation/Paginations/design/element__courant__disabled.png)
Hauteur&nbsp;: 44px  <br> Largeur&nbsp;: 72px <br> Fond&nbsp;: #FFFFFF  <br> Contour&nbsp;: #D4D4D4 <br> Chiffre&nbsp;: texte standard bold <br> Chevron&nbsp;: #333333 et à 5px à droite du dernier chiffre | -  <br> - <br> -  <br> Contour&nbsp;: #B40015 <br> Chiffre&nbsp;: texte standard bold #B40015 <br> Chevron&nbsp;: #B40015 et à 5px à droite du dernier chiffre | Opacité du chevron&nbsp;: 40 %

- Le couple chiffre - chevron est centré dans le container.
- Dans l’état disabled, seule la liste de pages est inactive.

### Liste des pages

- Un tape sur l’ensemble de l’élément Page courante permet d’afficher une liste de pages.
- Cette liste s'affiche verticalement sous l’ensemble de la pagination.
- La hauteur visible de la liste est fixée à 297px.
- Sa largeur est celle de l'ensemble de la pagination.
- Elle est composée de certains numéros de pages&nbsp;:
  - **Toutes les unités de la dizaine en cours.**
  - **Les dizaines suivantes jusqu’à la centaine suivante exclue.**
  - **Les centaines suivantes jusqu’au millier suivant exclue.**
  - **Les milliers suivants.**
  - Une ligne de séparation de 1px et #E4E3E1 permet de dissocier les unités.
  - Une ligne de séparation de 2px et #E4E3E1 permet de dissocier les dizaines, les centaines et les milliers.
- La hauteur de chaque zone est de 34px sans les lignes de séparation.
- Tous les chiffres sont des textes standards sauf la page courante qui en bold.
- Un dégradé est présent en bas de la liste. Il disparaît dès que le dernier chiffre de la liste est visible.
- Un tape sur toute la zone d'une des pages ouvre la page correspondante dans le même onglet.


### Page suivante

- La page suivante est toujours située avant la dernière page.
- Elle est symbolisée par le composant Flèche droite disponible dans Icons.
- L’accès à la page suivante est désactivé lorsque la page courante est la dernière.

### Dernière page

- La dernière page est toujours le dernier élément graphique de la pagination.
- Elle est symbolisée par son numéro de page.
- L’accès à la dernière page est désactivé lorsque la page courante est la dernière.

### Page précédente

- La page précédente est toujours le deuxième élément de la pagination.
- Elle est symbolisée par le composant Flèche gauche disponible dans Icons.
- l’accès à la page précédente est désactivé lorsque la page courante est la première.

### Première page

- La première page est toujours le premier élément graphique de la pagination.
- Elle est symbolisée par le numéro&nbsp;1.
- l’accès à la première page est désactivé lorsque la page courante est la première.

## L’ensemble de la pagination

Taille de l’écran | De 320 à 359px | De 360px ou plus
------------ | ------------- |------------- |
Marge entre les éléments de base | 5px | 10px |
Largeur totale | 280px | 300px |
Illustration | ![default](components/COMPONENTS/Navigation/Paginations/design/default.png) |![large](components/COMPONENTS/Navigation/Paginations/design/large.png)

### Exemples

Pagination **visible par l’utilisateur**&nbsp;:

Page 1 sur 2 318 | Page 2 318 sur 2 318
------------- | ------------- |
![select-active](components/COMPONENTS/Navigation/Paginations/design/select-active.png)| ![select-active-full__2318-to-2318](components/COMPONENTS/Navigation/Paginations/design/select-active-full__2318-to-2318.png)


 Pagination **pour information**&nbsp;:

Page 1 sur 2 318 | Page 1 505 sur 2 318
------------- | ------------- |
  ![select-active-full](components/COMPONENTS/Navigation/Paginations/design/select-active-full.png) |  ![select-active-full__1505-to-2318](components/COMPONENTS/Navigation/Paginations/design/select-active-full__1505-to-2318.png)

## Bonnes pratiques

- L’ensemble de la pagination se trouve après les données.
- La pagination est centrée dans son parent.
- Chaque page contient la même quantité de données, à l’exception de la dernière page.
- Le nombre d’éléments dans une page est défini en fonction des tailles des pages, des données et de leur temps de chargement.
- La pagination doit être placée sur un fond de couleur compatible, cf Bonnes pratiques du doc design de Colors
