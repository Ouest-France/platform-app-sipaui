# Radio buttons / Boutons radio

Les boutons radio affichent un ensemble d’options parmi lesquelles l’utilisateur peut en sélectionner une seule.

## Usage

- Les boutons radio permettent de **choisir entre deux à cinq options**, par exemple une civilité.
- L’utilisateur peut **sélectionner une seule des options**.
- La sélection des boutons radio s’exclut mutuellement. Dans une liste, si l’un des boutons radio est activé, tous les autres sont désactivés.


## Spécifications

Desactivated / Hover | Actived / Focus | Error | Disabled
------------ | ------------- | ------------- | ------------- |
![button-radio__desactivated](components/COMPONENTS/Inputs/Radio-buttons/design/button-radio__desactivated.png)|![button-radio__activated](components/COMPONENTS/Inputs/Radio-buttons/design/button-radio__activated.png)| ![button-radio__error](components/COMPONENTS/Inputs/Radio-buttons/design/button-radio__error.png) | ![button-radio__disabled](components/COMPONENTS/Inputs/Radio-buttons/design/button-radio__disabled.png)
Taille : 20x20px <br> Fond : #FAFAFA <br> Contour : épaisseur 1px, radius 100 % et #D4D4D4 <br> Texte : 16px, regular, police du thème #333333 <br> Margin right : 6px | -  <br> Fond : #FFFFFF <br> Contour : épaisseur interne 7px, radius 100 % et #E2001A <br> - <br> - | - <br> Fond : #FAFAFA <br> Contour : épaisseur 1px, radius 100 % et #B40015  <br> - <br> - | Opacité&nbsp;:&nbsp;40%

- La zone de touch contient le radio bouton et le texte associé. Sa hauteur est de 34px.


### Quantité

<div class="do-dont">
<div class="dont">

![button-radio__ex__dont-only-one](components/COMPONENTS/Inputs/Radio-buttons/design/button-radio__ex__dont-only-one.png)  |
------------ |
**Don’t**
<p class="legende">N’utilisez jamais un seul bouton radio, une case à cocher est appropriée.</p> |

</div>
</div>


<div class="do-dont">
<div class="dont">

![button-radio__ex__dont-multiple-activaton](components/COMPONENTS/Inputs/Radio-buttons/design/button-radio__ex__dont-multiple-activaton.png) |
------------ |
**Don't**
<p class="legende">Si plusieurs éléments peuvent être choisis en même temps, utiliser des cases à cocher.</p> |

</div>
</div>


<div class="do-dont">
<div class="dont">

![button-radio__ex__dont-greater-than-3](components/COMPONENTS/Inputs/Radio-buttons/design/button-radio__ex__dont-greater-than-3.png) |
------------ |
**Don't**
<p class="legende">Si le nombre d’option est supérieur ou égal à 4, utilisez un autre composant, par exemple un select.</p> |

</div>
</div>


### Gestion des erreurs

Lorsqu’aucun bouton radio n’est coché par défaut et qu’un choix est obligatoire, un message d’erreur s’affiche 20px sous le dernier radio bouton.


![button-radio__exemples__error](components/COMPONENTS/Inputs/Radio-buttons/design/button-radio__exemples__error.png)


### Bonnes pratiques

- La 1<sup>re</sup> lettre du texte est en majuscule, le reste est en minuscule.
- N’utilisez pas de point à la fin du texte.
- Le texte doit décrire le choix de manière claire et distincte.
- Afficher les options dans un ordre logique, par ex&nbsp;: les plus susceptibles d’être sélectionnées en premier.
- Lorsque l’espace est suffisant et que la lisibilité est optimale, les boutons radio sont disposés horizontalement. L’espacement entre chaque élément est constant.

![button-radio__ex__opposite](components/COMPONENTS/Inputs/Radio-buttons/design/button-radio__ex__opposite.png)
- Par défaut, les boutons radio peuvent être désactivés ou bien activés. Cependant, il est préférable d’activer une des options, la plus probable ou la première.
- Si un état non sélectionné est nécessaire, ajoutez simplement un bouton radio “Aucun”.
- L’indicateur de groupe (composant Label) qui accompagne des boutons radio n’est pas obligatoire, ex : civilité.
