# Radio buttons/Boutons radio

Les boutons radio affichent un ensemble d’options parmi lesquelles l’utilisateur peut en sélectionner une seule.

## Usage

- Les boutons radio permettent de choisir entre deux à cinq options, par exemple une civilité.
- L’utilisateur peut sélectionner une seule des options.
- La sélection des boutons radio s’exclut mutuellement. Dans une liste, si l’un des boutons radio est activé, tous les autres sont désactivés.


## Spécifications

Désactivé / Hover | Activé / Focus | Inactif
------------ | ------------- | ------------- |
![button-radio__desactivated](design/button-radio__desactivated.png)|![button-radio__activated](design/button-radio__activated.png)|![button-radio__disabled](design/button-radio__disabled.png)
Hauteur : 20px <br> Largeur : 20px <br> Fond : #FAFAFA <br> Contour : épaisseur 2px, radius 100 % et #D4D4D4 <br> Texte : 16px, regular, police du thème #333333 <br> Padding : 6px | -  <br> - <br> Fond : #FFFFFF <br> Contour : épaisseur interne 7px, radius 100 % et #E2001A <br> - <br> - | Opacité : 40 %

- La zone de touch contient le radio bouton et le texte associé. Sa hauteur est de 34px !!!à tester!!!


### Quantité

!!image 1 bouton radio!!! Don’t N’utilisez jamais un seul bouton radio, une case à cocher est appropriée.

!!image!!! Don’t Si plusieurs éléments peuvent être choisis en même temps, utiliser plutôt des cases à cocher. https://www.audi.com/ci/en/guides/user-interface/components/selections-controls.html

Don't !!! image !!!Si le nombre d’option est strictement supérieur à 3, utilisez un autre composant, par exemple un select.https://design.firefox.com/photon/components/radio-buttons.html


### Gestion des erreurs

Si aucun bouton radio est coché par défaut, les erreurs/oublis sont possibles → idem text field

!!!image!!! Civilité Mme M. Vous devez indiquer votre civilité.

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
