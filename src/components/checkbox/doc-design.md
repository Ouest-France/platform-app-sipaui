# Checkboxes/cases à cocher

Les checkboxes permettent à l’utilisateur de sélectionner ou désélectionner des éléments.

## Usage

- Une case à cocher permet un choix binaire.
!!!image!!! Do Par exemple, accepter ou non des conditions générales.
- Elle est considérée comme «activée» lorsqu’elle est cochée et désactivée lorsqu’elle est vide.


## Spécifications

- Aucune, une ou plusieurs options peuvent être choisies.
- Les cases à cocher sont indépendantes les unes des autres.


Activée / Focus | Désactivée / Hover  | Inactif
------------ | ------------- | ------------- |
![à compléter](design/à compléter.png)| ![à compléter](design/à compléter.png)| ![à compléter](design/à compléter.png)
Hauteur : 20px  <br> Largeur : 20px  <br> Fond : #E2001A ?  <br> Contour : épaisseur 2px, angle 3px ? et #E2001A ?  <br> Border radius : 3px, à définir <br> Icône : épaisseur 3px, #FFFFFF ? <br> Texte : 16px, regular, police du thème #333333 ? <br> Padding : 8px ?| - <br> - <br> Fond : opacité 0% ou #FFFFFF ? <br> Contour : épaisseur 2px, angle 3px et #878787 ? <br> Icône : opacité 0% ?  <br> - <br> - <br> _ | Opacité : 40 % + message d'explication

Zone de touch contient le radio bouton et le texte associé. Sa hauteur est de 34px !!!à tester!!!

#### Variation
Lorsque les options peuvent être regroupées, une case à cocher parent permet de regrouper l'ensemble des cases à cocher.
La case à cocher parent est utilisée pour activer et désactiver toutes les cases à cocher enfants.

!!!image!!! Lorsque les enfants ne sont pas tous dans le même état, elle affiche un état mixte (représenté par un tiret).

### Gestion des erreurs

!!!image!!! Abonnement Vous devez accepter les Conditions Générales de Vente.

### Bonnes pratiques

- La 1re lettre du bouton est en majuscule, le reste est en minuscule.
- Le texte du bouton est limité à une ligne.
- N'utilisez pas de point en la fin du texte.
- Le texte du bouton doit être explicite, positif et actif.

!!!image!!!Don’t Le libellé ne doit pas être négatif. Eviter “Ne m'envoyez plus d’email", ce qui signifierait que l'utilisateur devrait cocher la case pour que quelque chose ne se produise pas.

- Lorsqu’il y a plusieurs case à cocher, les présenter dans un ordre logique, par exemple : les plus susceptibles d’être sélectionnées en premier.
- Dans le cas de plus de deux case à cocher, elles sont disposées verticalement, avec une case à cocher par ligne. (illustration https://uxplanet.org/radio-buttons-ux-design-588e5c0a50dc)

- Si les options s’excluent mutuellement, utilisez des radio boutons.
- Lorsque l’utilisateur doit activer / désactiver une option ou pour exécuter une commande ; un switch est recommandé.


## Autres composants
- Checkboxes imbriquées
