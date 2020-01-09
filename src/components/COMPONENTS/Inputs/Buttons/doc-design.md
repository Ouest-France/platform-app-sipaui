# Buttons / Boutons

Les boutons indiquent à l'utilisateur une action qui est accessible par le tap ou le clic. Le texte des boutons aide l'utilisateur à comprendre l'action produite.

## Usage

Les boutons rendent les actions visibles et permettent aux utilisateurs d'effectuer une action. Par exemple, un bouton permet de s'abonner.

## Types de boutons

### Bouton primaire

Le bouton principal, met en évidence une action importante dans une page. Il est utilisé principalement sur une action spécifique ou dans un formulaire. Son utilisation dans une page doit être limitée.

Enabled | Hover / Focus / Pressed | Inactif
------------ | ------------- | ------------- |
![button__primary__enabled](components/COMPONENTS/Inputs/Buttons/design/button__primary__enabled.png)| ![button__primary__hover](components/COMPONENTS/Inputs/Buttons/design/button__primary__hover.png)| ![button__primary__disabled](components/COMPONENTS/Inputs/Buttons/design/button__primary__disabled.png)
Hauteur : 44px  <br> Largeur : minimum 120px et padding 20px <br> Angle : 3px  <br> Fond : #E2001A  <br> Texte : 16px, bold, police du thème, #FFFFFF | - <br> - <br> - <br> Fond : #B40015 <br> - | Opacité : 40 %


#### Cas spécifiques

##### Bouton pleine largeur

Le bouton pleine largeur s'adapte à la largeur du container afin d'optimiser son accessibilité.

![button__primary__full-width](components/COMPONENTS/Inputs/Buttons/design/button__primary__full-width.png)


##### Bouton primaire, hauteur 34px

Le bouton primaire de 34px de haut est utilisé dans des cas spécifiques et principalement sur Desktop. L'objectif est que son espace soit miminum.

  Enabled | Hover / Focus / Pressed | Inactif
  ------------ | ------------- | ------------- |
  ![button__primary__small__enabled](components/COMPONENTS/Inputs/Buttons/design/button__primary__small__enabled.png)|![button__primary__small__hover](components/COMPONENTS/Inputs/Buttons/design/button__primary__small__hover.png)| ![button__primary__small__disabled](components/COMPONENTS/Inputs/Buttons/design/button__primary__small__disabled.png)
  Hauteur : 34px  <br> Largeur : minimum 100px et padding 15px  <br> Angle : 3px <br> Fond : #E2001A <br> Texte : 14px, bold, police du thème, #FFFFFF | - <br> - <br> - <br> Fond : #B40015 <br> - | Opacité : 40 %

##### Bouton primaire Abonnement

Dans un contexte d'abonnement, seule la couleur de fond du bouton varie.

  Enabled | Hover / Focus / Pressed
  ------------ | -------------
![sbutton__primary__premium__enabled](components/COMPONENTS/Inputs/Buttons/design/button__primary__premium__enabled.png)|   ![button__primary__premium__hover](components/COMPONENTS/Inputs/Buttons/design/button__primary__premium__hover.png)
Fond : #DBA504 | Fond : #C2940C


### Bouton secondaire

Le bouton secondaire transparent avec un cadre fin est utilisé pour des actions de moindre importance. Il est souvent associé au bouton primaire.


Enabled | Hover / Focus / Pressed | Inactif
------------ | ------------- | ------------- |
![button__secondary__enabled](components/COMPONENTS/Inputs/Buttons/design/button__secondary__enabled.png)| ![button__secondary__hover](components/COMPONENTS/Inputs/Buttons/design/button__secondary__hover.png)| ![button__secondary__disabled](components/COMPONENTS/Inputs/Buttons/design/button__secondary__disabled.png)
Hauteur : 44px  <br> Largeur : minimum 120px et padding 20px <br> Angle : 3px <br> Coutour : #333333, 1px d'épaisseur <br> Fond : transparent <br> Texte : 16px, regular, police du thème, #333333 | - <br> - <br> - <br> Contour : #B40015 <br> - <br> Texte : #B40015 | Opacité : 40 %


#### Cas spécifique
##### Bouton secondaire, hauteur 34px

Le bouton primaire de 34px de haut est utilisé dans des cas spécifiques et principalement sur Desktop.


Enabled | Hover / Focus / Pressed | Inactif
------------ | ------------- | ------------- |
![button__secondary__small__enabled](components/COMPONENTS/Inputs/Buttons/design/button__secondary__small__enabled.png)| ![button__secondary__small__hover](components/COMPONENTS/Inputs/Buttons/design/button__secondary__small__hover.png)| ![button__secondary__small__disabled](components/COMPONENTS/Inputs/Buttons/design/button__secondary__small__disabled.png)
Hauteur : 34px  <br> Largeur : minimum 100px et padding 15px <br> Angle : 3px <br> Contour : #333333, 1px d'épaisseur <br> Fond : transparent <br> Texte : 14px, regular, police du thème, #333333 | - <br> - <br> - <br> Couleur : #B40015 <br> - <br> Texte : #B40015 | Opacité : 40 %

## Bonnes pratiques

### Spécifications

- **Sur mobile, les boutons en pleine largeur sont fortement recommandés** car ils sont plus accessibles.
- La hauteur d'un bouton est strictement identique quelle que soit la taille de l'écran.
- Les marges d'un bouton primaire sont au moins de 10px.

### Texte

- La 1re lettre du bouton est en majuscule, le reste est en minuscule.
- Ne pas finaliser le texte par une ponctuation, ex : un point d'exclamation.
- Les textes doivent indiquer clairement et **précisemment le résultat de l'action**. Un bouton user-centric devrait commencer par un **verbe d'action** impactant, ex : « Accepter » au lieu de « Oui » ou « S'inscrire » au lieu de « Soumettre ».
- Le texte est limité à une ligne et composé de 3 mots maximums.
- Mettre le texte en majuscule n'est pas autorisé, même pour donner plus d'importance à un bouton spécifique.

<div class="do-dont">
 <div class="do">

![button__exemples__text__do](components/COMPONENTS/Inputs/Buttons/design/button__exemples__text__do.png)|
------------ |
**Do**
<p class="legende">Utiliser un texte simple.</p> |

 </div>

 <div class="dont">

![button__exemples__text__dont](components/COMPONENTS/Inputs/Buttons/design/button__exemples__text__dont.png) |
------------ |
**Don’t**
<p class="legende">Ne pas surcharger le texte.</p> |

 </div>
 </div>


### Boutons d'un même sujet

- Ces boutons ont la même largeur.
- **Les boutons sont espacés de 20px** (horizontalement et verticalement).
- Un seul bouton primaire est présent.
- Deux boutons secondaires maximums sont présents. De plus, ils sont positionnés de manière proche.
- **Sur mobile, le bouton primaire se trouve au-dessus des boutons secondaires.**
- **Sur desktop, l'ensemble des boutons est aligné à gauche sauf s'il est dans un container, ex : pop-in, card.** Lorsque les boutons sont alignés à gauche, le bouton primaire est le plus à gauche. Lorsqu'ils sont ou alignés à droite au centre, le bouton primaire est la plus à droite.



### Arrière-plan

- L'arrière-plan **clair et uniforme** permet une visibilité obtimale des boutons.
- La couleur d'arrière-plan **doit être suffisamment contrastée avec celle du bouton**.

### Mise en avant

- **Un même bouton doit être présent une seule fois dans une même page,** même si l'action est particulièrement importante. Par exemple, un bouton sticky permet de le mettre en avant au lieu de le multiplier.
