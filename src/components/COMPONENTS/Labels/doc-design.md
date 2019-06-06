# Labels / Labels

Les labels permettent à l’utilisateur de savoir le type d’information du composant associé (champ texte, liste déroulante…). Ils se trouvent généralement dans un formulaire.


## États

Type | Illustration
------------ | ------------- |
**Standard** | ![label__default](components/COMPONENTS/Labels/design/label__default.png)
**Facultatif** | ![label__with-placeholder](components/COMPONENTS/Labels/design/label__facultatif.png)
**Inactif** | ![label__disabled](components/COMPONENTS/Labels/design/label__disabled.png)

## Spécifications

- Un label indique le type d’information demandée sous celui-ci.
- La 1re lettre est en majuscule, le reste est en minuscule.


  <div class="do-dont">
  <div class="do">

![label__ex__label__do](components/COMPONENTS/Labels/design/label__ex__label__do.png) |
  ------------ |
  **Do** <br/> Utiliser un texte court et précis. |

   </div>

   <div class="dont">

![label__ex__label__dont](components/COMPONENTS/Labels/design/label__ex__label__dont.png) |
  ------------ |
  **Don’t** <br/> Ne pas rédiger un label complexe. |

   </div>
   </div>

- Taille de caractère : 14px
- Line-height : 1,2
- Graisse de caractère : bold
- Police du thème
- Couleur : #333333
- Margin bottom : 3px
- Label pour champs obligatoires/facultatifs
  - Par défaut, tous les champs sont obligatoires.
  - «&nbsp;facultatif&nbsp;» est précisé entre parenthèse suite au label le cas échéant.
    - Graisse de caractère : regular
    - Color : #666666
    - Taille de caractère : 12px

![textfield__ex__champs-obligatoire-facultatif](components/COMPONENTS/Labels/design/textfield__ex__champs-obligatoire-facultatif.png)


- Champ non modifiable (readonly)
  - Opacité : 40 %
