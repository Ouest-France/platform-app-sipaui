# Checkboxes / Cases à cocher

Les checkboxes permettent à l’utilisateur de sélectionner ou désélectionner des éléments.

## Usage

- Une case à cocher, quand elle est unique, permet un choix binaire. Par exemple, accepter ou non des conditions générales.
- Elle est considérée comme « activée » lorsqu’elle est cochée et « désactivée » lorsqu’elle est vide.


## Spécifications

- Aucune, une ou plusieurs options peuvent être choisies.
- Les cases à cocher sont indépendantes les unes des autres.
- La zone de touch contient la case à cocher et le texte associé. Sa hauteur est de 34px.

Desactivated / Hover | Activated / Focus | Error | Disabled
------------ | ------------- | ------------- | ------------- |
![checkboxes__desactivated](design/checkboxes__desactivated.png)|![checkboxes__activated](design/checkboxes__activated.png)|![checkboxes__error](design/checkboxes__error.png)|![checkboxes__desactivated__disabled](design/checkboxes__desactivated__disabled.png)
Taille : 20x20px <br> Fond : #FAFAFA <br> Contour : épaisseur 1px, border radius 3px et #D4D4D4 <br> Icône : absent  <br> Texte : 16px, regular, police du thème #333333 <br> Margin right : 6px | -  <br> Fond : #E2001A <br> Contour : épaisseur 1px, border radius 3px et #E2001A <br> Icône : épaisseur 1px, #FFFFFF <br> - <br> - | - <br> -  <br>  Contour : épaisseur 1px, border radius 3px et #B40015 <br> - <br> -  | Opacité&nbsp;:&nbsp;40 %



#### Variation

- Lorsque les options peuvent être regroupées, une case à cocher parent permet de rassembler l’ensemble de ces cases à cocher.
- La case à cocher parent est utilisée pour activer et désactiver toutes les cases à cocher enfants.
- Lorsque les enfants ne sont pas tous dans le même état, elle affiche un état «&nbsp;indéterminé&nbsp;» (représenté par un tiret).

Multiple désactivated / over | Multiple activated / focus | Multiple indeterminate
------------ | ------------- | ------------- |
![checkboxes__multiple__desactived](design/checkboxes__multiple__desactived.png)|![checkboxes__multiple__activated](design/checkboxes__multiple__activated.png)|![checkboxes__multiple__partial](design/checkboxes__multiple__partial.png)


### Gestion des erreurs

La gestion des erreurs est identique au champ de texte.

![checkboxes__ex__error-with-message](design/checkboxes__ex__error-with-message.png)

### Bonnes pratiques

- La 1<sup>re</sup> lettre du bouton est en majuscule, le reste est en minuscule.
- Le texte du bouton devrait être limité à une ligne (attention sur mobile). 
- N’utilisez pas de point à la fin du texte.
- Le texte doit être explicite, actif et positif.


 <div class="do-dont">
 <div class="dont">

![checkboxes__ex__dont](design/checkboxes__ex__dont.png)|
------------ |
**Don’t** <br/> Eviter le terme négatif. Ici, l’utilisateur devrait cocher la case pour que quelque chose ne se produise pas.

 </div>
 </div>


- On ne peut mettre un lien dans un label de case à cocher. Il y aurait concurrence de clic entre ce lien et l’activation de la case sur le label.
- Lorsqu’il y a plusieurs cases à cocher, les présenter dans un ordre logique, par exemple&nbsp;: les plus susceptibles d’être sélectionnées en premier.
- Dans le cas de plus de deux case à cocher, elles sont disposées verticalement, une case à cocher par ligne.
- Si les options s’excluent mutuellement, utilisez des radio boutons.
- Lorsque l’utilisateur doit activer / désactiver une option ou pour exécuter une commande, un switch est recommandé.
- Suite à un clic sur une case à cocher inactive, un message explique les raisons de cet état.

## Autres composants

- Checkboxes imbriquées
- Etc.
