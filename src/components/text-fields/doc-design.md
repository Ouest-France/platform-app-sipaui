# Text fields

Les champs de texte permettent aux utilisateurs de saisir et de modifier du texte. Ils se trouvent généralement dans des formulaires mais aussi dans des modales.



## 2- États !!!en cours !!!

Type | Class | Declinaison 1 | Declinaison 2 | Remarque
------------ | ------------- | ------------- | ------------- | ------------- |
**etat 1** | classes | exemple | exemple | description
**etat 2** | classes | exemple | exemple | description
**etat 3** | classes | exemple | exemple | description

**naming ????** Stéphane pas pour le moment
## 1- Spécifications

- Hauteur : 44px
- Largeur : celle son parent moins le padding de celui-ci
- Largueur minimale : 140px
- Couleur : #333333
- Police du thème
- L’opacité d’un champ non modifiable (su-disabled) : 40 %

#### Label
- Indique le type d’information demandé
- La 1re lettre est en majuscule, le reste est en minuscule
- Doit être court, clair et entièrement visible sur une seule ligne

!**!! image !!!** don't entrée, tour, bâtiment, immeuble, résidence
- Taille de caractère : 14px
- Graisse de caractère : bold
- Champs obligatoires/facultatifs
  - Par défaut tous les champs sont obligatoires
  - “facultatif” est précisé entre parenthèse suite au label

**!! image !!!** des champs obligatoires et 1 facultatif

#### Input text
- Lieu où le texte est saisi
- Padding gauche : 15px
- Taille de caractère : 14px
- Graisse de caractère : regular

#### Container
- Aligné à gauche avec le label
- Se situe à 2px sous le label
- Couleur : #EFEFEF
- Présente un contour
  - Couleur par défaut : #D4D4D4
  - Couleur en focus et press : #878787
  - Epaisseur : 1px

## 2-Gestion des erreurs
- Un champ est défini comme ko lorsque le texte n'est pas correct ou est absent.
#### Message d'erreur
- S’affiche lorsque le champ est ko
- Guide l’utilisateur sur la manière de résoudre le problème
- Apparait sur une seule ligne
- Présent sous la ligne de saisie
- Est affiché tant que l'erreur n'est pas corrigée. Dans un formulaire, l'état d’erreur disparait suite à la validation de l’ensemble du formulaire.
- Couleur : #B40015
- Une icône d'erreur précède le message d'erreur
  - Couleur : #B40015
  - Title : error

  #### Container
  - Lorsque le champ est ko, le contour devient rouge #B40015.

## Les icônes
- Taille maximale : 34x34px
- Zone de tap : 44x44px
- L’icône est centrée dans la zone de tap avec une marge minimale : 5px
- Couleur : #878787


#### Icône bouton
- Permet une action spécifique Par ex : une icône de calendrier permet d’afficher un sélecteur de date
- Situé à droite dans le container
- Cas particulier : la croix apparait uniquement sur les champs focus et pré-saisis

#### Icône d'information

- Apporte une information supplémentaire au label
- Situé à gauche dans le container

## 5- Autres composants
- Champs de recherche
- “ Votre adresse email OK ”
- Mot de passe
- Téléphone
- Tooltip
- Drop-down menu
