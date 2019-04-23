# Buttons / Boutons

Les boutons indiquent à l'utilisateur une action qui est accessible par le tap ou le clic. Le texte des boutons aide l'utilisateur à comprendre l'action produite.

## Usage

Les boutons rendent les actions visibles et permettent aux utilisateurs d'effectuer une action. Par exemple, utilisez un bouton pour permettre aux utilisateurs de souscrire à un abonnement.

## Types de boutons

### Bouton primaire

Le bouton principal, sur fond de couleur, met en évidence une action importante dans une page. Il est utilisé principalement sur une action spécifique ou dans un formulaire. Son utilisation dans une page doit être limitée.

Enabled | Hover / Focus / Pressed | Inactif
------------ | ------------- | ------------- |
![button__primary__enabled](design/button__primary__enabled.png)| ![button__primary__hover](design/button__primary__hover.png)| ![button__primary__disabled](design/button__primary__disabled.png)
Hauteur : 44px  <br> Largeur : minimum 120px et padding 20px <br> Contour : angle 3px  <br> Couleur : #E2001A  <br> Texte : 16px, bold, police du thème, #FFFFFF | - <br> - <br> - <br> - <br> Couleur : #B40015 <br> - | Opacité : 40 %


#### Cas spécifiques

##### Bouton pleine largeur

Le bouton pleine largeur s'adapte à la largeur du container (Mobile et Desktop).

![button__primary__full-width](design/button__primary__full-width.png)


##### Bouton primaire, hauteur 34px

Le bouton primaire de 34px de haut est utilisé dans des cas spécifiques et principalement sur Desktop.

  Enabled | Hover / Focus / Pressed | Inactif
  ------------ | ------------- | ------------- |
  ![button__primary__small__enabled](design/button__primary__small__enabled.png)|![button__primary__small__hover](design/button__primary__small__hover.png)| ![button__primary__small__disabled](design/button__primary__small__disabled.png)
  Hauteur : 34px  <br> Largeur : minimum 100px et padding 15px  <br> Contour : angle 3px <br> Couleur : #E2001A <br> Texte : 14px, regular, police du thème, #FFFFFF | - <br> - <br> - <br> Couleur : #B40015 <br> - | Opacité : 40 %

##### Bouton primaire Abonnement

Dans un contexte d'abonnement, la couleur de fond du bouton primaire devient #DBA504.

  Enabled | Hover / Focus / Pressed
  ------------ | -------------
![button__primary__subscription__enabled](design/button__primary__subscription__enabled.png)|   ![button__primary__subscription__hover](design/button__primary__subscription__hover.png)
Couleur : #FFCC33 <br> Texte : #000000 |  Couleur : #E7AF07 <br> -

##### Bouton primaire Premium

Dans un contexte Premium, la couleur de fond du bouton primaire devient #DBA504.

 Enabled | Hover / Focus / Pressed
  ------------ | -------------
![sbutton__primary__premium__enabled](design/button__primary__premium__enabled.png)|   ![button__primary__premium__hover](design/button__primary__premium__hover.png)
Couleur : #DBA504  <br> Texte : #FFFFFF |  Couleur : #C2940C <br> -

### Bouton secondaire

Le bouton secondaire transparent avec un cadre fin est utilisé pour des actions de moindre importance. Il est souvent associé avec le bouton primaire.


Enabled | Hover / Focus / Pressed | Inactif
------------ | ------------- | ------------- |
![button__secondary__enabled](design/button__secondary__enabled.png)| ![button__secondary__hover](design/button__secondary__hover.png)| ![button__secondary__disabled](design/button__secondary__disabled.png)
Hauteur : 44px  <br> Largeur : minimum 120px et padding 20px  <br> Contour : angle 3px <br> Couleur : #333333 et transparent  <br> Texte : 16px, regular, police du thème, #333333 | - <br> - <br> - <br> Couleur : #B40015 <br> Texte : #B40015 | Opacité : 40 %


#### Cas spécifique
##### Bouton secondaire, hauteur 34px

Le bouton primaire de 34px de haut est utilisé dans des cas spécifiques et principalement sur Desktop.


Enabled | Hover / Focus / Pressed | Inactif
------------ | ------------- | ------------- |
![button__secondary__small__enabled](design/button__secondary__small__enabled.png)| ![button__secondary__small__hover](design/button__secondary__small__hover.png)| ![button__secondary__small__disabled](design/button__secondary__small__disabled.png)
Hauteur : 34px  <br> Largeur : minimum 100px et padding 15px  <br> Contour : épaisseur 1px, angle 3px <br> Couleur : #333333 et transparent <br> Texte : 14px, regular, police du thème, #333333 | - <br> - <br> - <br> Couleur : #B40015 <br> Texte : #B40015 | Opacité : 40 %

## Bonnes pratiques

### Spécifications
- Sur mobile, les boutons en pleine largeur sont recommendés car ils sont plus accessibles.
- La 1re lettre du bouton est en majuscule, le reste est en minuscule.
- Le texte du bouton est limité à une ligne.
- Le texte du bouton doit être explicite et décrire l'action de celui-ci.

<div class="do-dont">
 <div class="do">

![button__exemples__text__do](design/button__exemples__text__do.png)|
------------ |
**Do** <br/> Utiliser un texte simple |

 </div>

 <div class="dont">

![button__exemples__text__dont](design/button__exemples__text__dont.png) |
------------ |
**Don’t** <br/> Ne pas surcharger le texte |

 </div>
 </div>


### Boutons d'un même sujet

- Les boutons liés à un même sujet ont la même largeur.
- La distance entre ces boutons est constante.
- Un seul bouton primaire est présent.
- Deux boutons secondaires maximum sont présents. De plus, ils sont positionnés de manière proche.
- Ne placez pas un bouton sous un autre bouton s'il y a de la place pour les mettre côte à côte.
- Sur mobile, le bouton primaire se trouve au-dessus des boutons secondaires.
- Sur desktop, lorsque vous utilisez un bouton primaire et un bouton secondaire, le bouton primaire doit être placé à gauche. **Une exception s'applique dans le cas d'écran séquentiel**, le bouton primaire est à droite.

<div class="do-dont">
<div class="do">

![Image_button_sequentiel](design/Image_button_sequentiel.png)|
------------ |
**Do** <br/> Mettre le bouton «&nbsp;Retour&nbsp;» à gauche

 </div>
 </div>


 <div class="do-dont">
 <div class="dont">

![Image_button_2 buttons_ko](design/Image_button_buttons_ko.png)  |
------------ |
**Don’t** <br/> Ne placez pas ces boutons les uns en dessous de l'autre.

 </div>
 </div>


- La couleur d'arrière-plan ne doit pas être similaire à celle du bouton afin de mettre en avant l'action. Par exemple, le fond noir est à proscrire sous un bouton rouge.

## Autres composants
- Liens
- Boutons avec un picto
- Floating action buttons
- “ Voir plus “
- " Lire la suite + "
- “ Votre adresse email OK ”
- " Géolocalisez-vous "
- Etc.
