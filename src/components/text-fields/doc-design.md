# Text fields

Les champs de texte permettent aux utilisateurs de saisir et de modifier du texte. Ils se trouvent généralement dans des formulaires.



## 1- États !!!en cours !!!

Type | Simple
------------ | ------------- | ------------- | ------------- |
**Default** | ![text-field-default](design/text-field-default.png)
**Focus** | ![text-field-focus](design/text-field-focus.png)
**With default value** |  ![text-field-with-default-value](design/text-field-with-default-value.png)
**Error** | ![text-field-error](design/text-field-error.png)
**Disabled** | ![text-field-disabled](design/text-field-disabled.png)
**With icon** | ![text-field-with-icon](design/text-field-with-icon.png)

## 2- Spécifications


#### Label
- Indique le type d’information demandé
- La 1re lettre est en majuscule, le reste est en minuscule
- Doit être court, clair et entièrement visible sur une seule ligne

**!!! image !!!** don't entrée, tour, bâtiment, immeuble, résidence
- Couleur : #333333
- Police du thème
- Taille de caractère : 14px
- Graisse de caractère
  - Texte standard : bold
  - Texte d'aide ou "facultatif" : régular
- Champs obligatoires/facultatifs
  - Par défaut tous les champs sont obligatoires
  - “facultatif” est précisé entre parenthèse suite au label

**!!! image !!!** des champs obligatoires et 1 facultatif



#### Container
- Indique à l'utilisateur où saisir l'information
- Aligné à gauche avec le label
- Padding bottom : 2px sous le label
- Hauteur : 44px
- Largeur : celle son parent moins le padding de celui-ci
- Largueur minimale : 140px
- Couleur : #EFEFEF
- Présente un contour
  - Couleur par défaut : #D4D4D4
  - Couleur en focus et press : #878787
  - Epaisseur : 1px

#### Input text
  - Texte saisi
  - Padding gauche : 15px du container
  - Couleur : #333333
  - Police du thème
  - Taille de caractère : 14px
  - Graisse de caractère : regular

#### Champ non modifiable
  - Opacité (su-disabled) : 40 %


## 3-Gestion des erreurs
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

#### Contour du container
  - Couleur : #B40015
  - Epaisseur : 1px


## 4-Icônes
- Est un bouton intégré dans le container qui permet une action spécifique
- Situé à droite dans le container
- Taille maximale : 34x34px
- Zone de tap : 44x44px
- L’icône est centrée dans la zone de tap avec une marge minimale : 5px
- Couleur : #878787

#### Cas particulier : la croix
  - Une croix permet la suppression totale et directe d'un champ.
  - Elle apparait uniquement dans un champs focus et pré-saisi.

## 5- Autres composants
- Champs de recherche
- “ Votre adresse email OK ”
- Mot de passe
- Tooltip
- Select
