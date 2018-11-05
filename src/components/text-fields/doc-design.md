# Text field/champs de texte

Les champs de texte permettent à l'utilisateur de saisir et de modifier du texte. Il se trouve généralement dans un formulaire.


## États

Type | Simple
------------ | ------------- | ------------- | ------------- |
**Default** | text-field-default design/text-field-default.png
**Focus** | text-field-focus design/text-field-focus.png
**With default value** |  text-field-with-default-value design/text-field-with-default-value.png
**Error** | text-field-error design/text-field-error.png
**Disabled** | text-field-disabled design/text-field-disabled.png
**With icon** | text-field-with-icon design/text-field-with-icon.png

## Spécifications


#### Label
- Un label indique le type d’information demandé
- La 1re lettre est en majuscule, le reste est en minuscule
- Il doit être court, précis et entièrement visible sur une seule ligne

**!!! image !!!** don't entrée, tour, bâtiment, immeuble, résidence
- Taille de caractère : 14px ou 16 ?
- Graisse de caractère
  - Texte standard : bold
  - Texte d'aide ou "facultatif" : régular
- Police du thème
- Couleur : #333333


- Champs obligatoires/facultatifs
  - Par défaut, tous les champs sont obligatoires
  - “facultatif” est précisé entre parenthèse suite au label

**!!! image !!!** des champs obligatoires et 1 facultatif



#### Container
- Un container indique à l'utilisateur où saisir l'information
- Il est aligné à gauche avec le label
- Padding bottom : 2px sous le label
- Hauteur : 44px
- Largeur : celle son parent moins le padding de celui-ci
- Largueur minimale : 140px
- Couleur par défaut : #FAFAFA ou FFFFFF ?
- Couleur en focus et press : #FFFFFF
- Présente un contour
  - Couleur par défaut : #D4D4D4
  - Couleur en focus et press : #878787
  - Epaisseur : 1px

#### Text
  - Texte saisi par l'utilisateur
  - Padding gauche : 15px du container
  - Taille de caractère : 16px
  - Graisse de caractère : regular
  - Police du thème
  - Couleur : #333333

#### Champ non modifiable (readonly)
  - Opacité : 40 %


## Gestion des erreurs
- Un champ est défini comme ko lorsque le texte n'est pas correct ou est absent.

#### Message d'erreur
- Le message d'error s’affiche lorsque le champ est ko
- Il guide l’utilisateur sur la manière de résoudre le problème
- Il pparait sur une seule ligne
- Celui-ci est présent sous la ligne de saisie
- Il est affiché tant que l'erreur n'est pas corrigée. Dans un formulaire, l'état d’erreur disparait suite à la validation de l’ensemble du formulaire.
- Taille de caractère : 14px
- Graisse de caractère : regular
- Police du thème
- Couleur : #B40015
- Une icône d'erreur précède le message d'erreur
  - Couleur : #B40015
  - Title : error

#### Contour du container
  - Epaisseur : 1px
  - Couleur : #B40015


## Icônes
- Est un bouton intégré dans le container qui permet une action spécifique
- Situé à droite dans le container
- Taille maximale : 34x34px
- Zone de tap : 44x44px
- L’icône est centrée dans la zone de tap avec une marge minimale : 5px
- Couleur : #878787

#### Cas particulier : la croix
  - Une croix permet la suppression totale et directe d'un champ.
  - Elle apparait uniquement dans un champs focus et pré-saisi.


## Autres composants
- Champs de recherche
- “ Votre adresse email OK ”
- Mot de passe
- Tooltip
- Sélecteur de date
