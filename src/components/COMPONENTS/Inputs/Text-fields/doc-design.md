# Text fields / Champs de texte

Les champs de texte permettent à l'utilisateur de saisir et de modifier du texte. Ils se trouvent généralement dans un formulaire. Ce composant regroupe les champs texte standards (input text, input number… et le text area).

## États

Etat |Enabled | With placeholder | With default value | Focus | Error | Disabled | With action
------------ | ------------- |------------ | ------------- |------------ | ------------- | ------------- |---------- |
Illustration | ![textfield__default](components/COMPONENTS/Inputs/Text-fields/design/textfield__default.png) | ![textfield__with-placeholder](components/COMPONENTS/Inputs/Text-fields/design/textfield__with-placeholder.png) | ![textfield__with-default-value](components/COMPONENTS/Inputs/Text-fields/design/textfield__with-default-value.png) | ![textfield__focus](components/COMPONENTS/Inputs/Text-fields/design/textfield__focus.png) | ![textfield__error](components/COMPONENTS/Inputs/Text-fields/design/textfield__error.png) | ![textfield__disabled](components/COMPONENTS/Inputs/Text-fields/design/textfield__disabled.png) | ![textfield__with-icon-right](components/COMPONENTS/Inputs/Text-fields/design/textfield__with-icon-right.png)
Container | Hauteur : 44px <br> Largeur : celle de son container parent moins le padding de celui-ci, 140px minimum <br> Fond : #FAFAFA <br> Contour : épaisseur 1px, #D4D4D4 | - <br> - <br> - <br> - <br> | - <br> - <br> - <br> - <br> |  - <br> - <br> Fond : #FFFFFF <br> Contour : épaisseur 1px, #333333 | - <br> - <br> - <br> Contour : épaisseur 1px, #B40015 | Opacité : 40 %  | Hauteur : 44px <br> Largeur : celle de son container parent moins le padding de celui-ci, 140px minimum <br> Fond : #FAFAFA <br> Contour : épaisseur 1px, #D4D4D4
Texte |   | Padding à gauche et à droite : 10px du container (11px avec le contour) <br> Taille de caractère : 16px <br> Graisse de caractère : regular <br> Police du thème <br> Couleur : #878787 | - <br> - <br> - <br> - <br> Couleur : #333333 |  | Padding à gauche et à droite : 10px du container (11px avec le contour) <br> Taille de caractère : 16px <br> Graisse de caractère : regular <br> Police du thème <br> Couleur : #333333 |  Opacité : 40 %  | Padding à gauche : 10px du container (11px avec le contour) <br> Taille de caractère : 16px <br> Graisse de caractère : regular <br> Police du thème <br> Couleur : #878787
Icône  |  |  |  |  |  |  | Taille maximale : 34x34px <br> Zone de tap : 44x44px <br> Couleur enabled : #878787, hover, focus et pressed : #333333

## Spécifications

#### Label
- Le composant "Label" indique le type d’information demandée sous celui-ci.
- Il obligatoire sauf dans certains cas très particiliers.
- Ses spécifications sont disponibles dans son doc design.

#### Container
- Un container indique à l'utilisateur où saisir l'information.
- Il est aligné à gauche avec le label.

#### Texte du placeholder
- Le texte du placeholder est une description facultative et supplémentaire au label. En aucun cas, il ne le substitue ou est identique. Il doit guider l’utilisateur sur le format de données attendu. On peut ainsi présenter un exemple (&nbsp;prenom.nom@domaine.fr&nbsp;) ou un pattern (date&nbsp;: &nbsp;jj/mm/aaaa&nbsp;).
- Il se trouve dans le container et n'est plus visible dès la saisie.

#### Champ non modifiable (readonly)
  - Opacité : 40 %

### Icône
- En cas de besoin, une icône peut être intégerée directement dans le champ de texte.
- Celle-ci permet une **action** spécifique.
- Elle est située à droite dans le container.
- L’icône est centrée dans la zone de tap.
- Cas particulier : la croix
 - Une croix permet la suppression totale et directe du champ.
 - Elle est présente lorsque l’input est en focus et qu'un contenu est présent.

## Gestion des erreurs
- Un champ obligatoire est défini comme ko lorsque le texte n'est pas correct ou est absent.
- Les spécifications du message d'erreur sont disponibles dans le doc design du composant Error.
