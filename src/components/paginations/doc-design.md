# Paginations / Paginations

La pagination aident les utilisateurs à naviguer dans de grandes quantités de données. Une ligne de boutons est présntée avec des numéros cliquables.

## Usage

- L'utilisateur navigue dans un grand nombre d'éléments répartis sur plusieurs pages.
- Chaque page indique à l'utilisateur où il se trouve parmi une quantité de page.
- Certaines pages ont un accès direct, par exemple la suivante.

## Spécifications

- Les pages sont numérotées à l'aide d'éléments graphiques.

### Élément graphique

Type | Illustration
------------ | ------------- |
**Current** | image
**Enabled** | image
**Focus** | image
**Disabled** | image

### La page courante

- en plein #E2001A (La position en cours est mise en évidence par (couleur, épaisseur de trait ou un fort contraste.) ???

### Enabled

- Hauteur : 44px (30px actuellement) ???
- Largeur : minimum 44px et padding 12px (30px actuellement) ???
- Couleur : #333333 (iso bouton secondaire)???
- Contour : angle 3px
- Texte : 16px (14px actuellement), line-height ?, regular, police du thème

### Hover / Focus / Pressed

- Couleur : #B40015

### Disabled

- Opacité : 40 %

## Bonnes pratiques

- L'ensemble de la pagination indique au minimum (sauf pour la page courante) :
  - la page suivante
  - la page précédente
- D'autres pages optimisent le référencement et leur accès (certaines pages peuvent être affichées via un select)
    - la page courante
    - 5 pages précédent la page courante (sauf en début de pagination)
    - 5 pages suivant la page courante (sauf fin de pagination)
    - toutes les dizaines, centaines et les milliers disponibles au delà de la 5ème page suivante
    - la dernière page
!!image!!illustration Pge 1 sur 508
- L'espace entre 2 points de navigation est constant XXpx ???
- La pagination est centrée horizontalement par rapport à la liste des éléments.
- Chaque page contient la même quantité d'éléments, à l'exception de la dernière page.
- Le nombre d'élément dans une page est défini en fonction de la taille de la page, l'élément et de leur temps de chargement.


 <div class="do-dont">
 <div class="dont">

? |
------------ |
**Don’t** <br/> Ne placez pas la pagination sur un fond de couleur similaire.

 </div>
 </div>


 - Cette technique nécessite plus d’actions qu'un scroll infini pour l’utilisateur et elle est moins agréable et fluide à utiliser.
