# Radio buttons / Boutons radio

Les boutons radio affichent un ensemble d’options parmi lesquelles l’utilisateur peut en sélectionner une seule.

## Usage

- Les boutons radio permettent de choisir entre deux à cinq options, par exemple une civilité.
- L’utilisateur peut sélectionner une seule des options.
- La sélection des boutons radio s’exclut mutuellement. Dans une liste, si l’un des boutons radio est activé, tous les autres sont désactivés.


## Spécifications

Desactivated / Hover | Actived / Focus | Disabled
------------ | ------------- | ------------- |
![button-radio__desactivated](design/button-radio__desactivated.png)|![button-radio__activated](design/button-radio__activated.png)|![button-radio__disabled](design/button-radio__disabled.png)
Hauteur : 20px <br> Largeur : 20px <br> Fond : #FAFAFA <br> Contour : épaisseur 2px, radius 100 % et #D4D4D4 <br> Texte : 16px, regular, police du thème #333333 <br> Padding : 6px | -  <br> - <br> Fond : #FFFFFF <br> Contour : épaisseur interne 7px, radius 100 % et #E2001A <br> - <br> - | Contour : épaisseur interne 7px, radius 100 % et #E2001A

- La zone de touch contient le radio bouton et le texte associé. Sa hauteur est de 34px.


### Quantité

<div class="do-dont">
 <div class="dont">

![button-radio__ex__dont-only-one](design/button-radio__ex__dont-only-one.png) |
------------ |
**Don't** <br/> N’utilisez jamais un seul bouton radio, une case à cocher est appropriée. |

 </div>

 <div class="dont">

![button-radio__ex__dont-multiple-activaton](design/button-radio__ex__dont-multiple-activaton.png) |
 ------------ |
 **Don't** <br/> Si plusieurs éléments peuvent être choisis en même temps, utiliser des cases à cocher. |

  </div>

  <div class="dont">

![button-radio__ex__dont-greater-than-3](design/button-radio__ex__dont-greater-than-3.png) |
  ------------ |
  **Don't** <br/> Si le nombre d’option est strictement supérieur à 3, utilisez un autre composant, par exemple un select. |

   </div>
</div>


### Gestion des erreurs

Lorsqu'aucun bouton radio est coché par défaut et qu'un choix est obligatoire, un message d'erreur s'affiche 20px sous le dernier radio bouton.


![button-radio__ex__error](design/button-radio__ex__error.png)


### Bonnes pratiques

- La 1re lettre du texte est en majuscule, le reste est en minuscule.
- N'utilisez pas de point à la fin du texte.
Le texte doit décrire le choix de manière claire et distincte.
- Afficher les options dans un ordre logique, par ex : les plus susceptibles d’être sélectionnées en premier.
- Lorsque les boutons radio sont disposés horizontalement, utiliser un espacement constant.
- Par défaut, les boutons radio peuvent être désactivés ou bien activés. Cependant, il est préférable d'activer une des options, la plus probable ou la première.
- Si un état non sélectionné est nécessaire, ajoutez simplement un bouton radio “Aucun”.
- Une fois qu'une option est sélectionnée, l'état initiale ne peut plus être atteint par l'utilisateur.
- Le label qui accompagne des boutons radio n’est pas obligatoire.

## Autres composants

- Switch
- Checkbox
- Select
- Etc.