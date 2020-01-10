# Accordion / Accordéon

- Les accordéons sont des composants dynamiques qui permettent d’**optimiser l’affichage d’un contenu** dans un espace réduit grâce à un système de « plier/déplier » appliqué sur un groupe de panneaux.

- L'un des principaux avantages est que les accordéons permettent aux utilisateurs d'**avoir une vue d'ensemble avant de se concentrer sur les détails**.

## Usage

- Les accordéons sont utilisés pour gérer de grande quantité de contenus. Ce contenu est divisé et réduit en sections logiques disposés verticalement.

- L'utilisateur peut afficher le contenu de chaque section suite à un tape sur celle-ci. Ce contenu s’étend en poussant le reste de la page vers le bas. Lors d'un nouveau tape sur la section ouverte,le contenu déployé est masqué.

## Accrodéon de selection

- L'accordéon de sélection permet en plus de choisir une seule des section.

### Spécifications

- L'accordéon est **auto-fermant** : une seule des sections est ouverte à la fois. Quand une nouvelle section s'ouvre, la dernière ouverte est fermée.
- Lors de l'ouverture d'une page, aucune ou une seule des section peut être ouverte.
- Les sections sont composées de contenus regroupés et organisés tels que du texte standard, des liens, etc.
- La distance entre chaque section est 10px.
- Les spécifications du radio button sont décrites dans son doc design.

Etat | Enabled close | Hover / Focus / Pressed close | Select | Disabled
------------ | ------------- |------------ | ------------- |------------ |
Illustration | image 1 | image 2 | image 3 | image 4 |
Container | Hauteur : minimum 60px et padding de ??px <br> Largeur : celle de son container parent moins le padding de celui-ci, 140px minimum <br> Fond : #FFFFFF <br> Contour : épaisseur 1px, #D4D4D4 | - <br> - <br> Fond : #FFFFFF <br> Contour : épaisseur 1px, #333333 <br> | - <br> - <br> - <br> - | Opacité : 40 % | - <br> - <br> - <br> Contour : épaisseur 1px, #B40015 | Opacité : 40 % | Hauteur : 44px <br> Largeur : celle de son container parent moins le padding de celui-ci, 140px minimum <br> Fond : #FAFAFA <br> Contour : épaisseur 1px, #D4D4D4
Radio button | Marges : 20x10x20x20px | - | - | Opacité : 40 %

## Bonnes pratiques

- Les accordéons sont particulièrement utiles pour des interfaces Mobile first car ils réduisent les contenus volumineux dans de petits espaces.
- Le contenu doit être organisé de manière à simplifier la navigation.
- Cacher un contenu via un accordéon n'améliore pas nécessairement l'expérience utilisateur. Ils peuvent provoquer une désorientation. Aussi, le nombre d'interaction augmente.
- N'utilisez pas d'accordéons lorsque tout le contenu doit être vu sur une même page.
Si les pages sont extrêmement longues, l'accordéon n'est peut-être pas approprié. Une approche différente de la navigation et de la mise en page devront être pensée.
