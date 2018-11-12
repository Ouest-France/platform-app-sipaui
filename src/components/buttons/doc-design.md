# Buttons/boutons

Les boutons indiquent à l'utilisateur une action qui est accessible par le tap ou le clic. Le texte des boutons aide l'utilisateur à comprendre l'action produite.

## Usage

Les boutons rendent les actions visibles et permettent aux utilisateurs d'effectuer une action. Par exemple, utilisez un bouton pour permettre aux utilisateurs de souscrire à un abonnement.

## Types de boutons

### Bouton primaire

Le bouton principal, sur fond de couleur, met en évidence une action importante dans une page. Il est utilisé principalement sur une action spécifique ou dans un formulaire. Son utilisation dans une page doit être limitée.


Enable | Hover / Focus / Pressed | Inactif
------------ | ------------- | ------------- |
![button__primary__enabled](design/button__primary__enabled.png)| ![button__primary__hover](design/button__primary__hover.png)| ![button__primary__disabled](design/button__primary__disabled.png)
Hauteur : 44px  <br> Largeur : minimum 140px et padding 20px  <br> Largeur : minimum 140px et padding 20px  <br> Contour : angle 3px  <br> Couleur : #E2001A   <br>  Contour : angle 3px  <br> Texte : 16px, bold, police du thème, #FFFFFF | - <br> - <br> - <br> - <br> - <br> - <br> Texte : #B40015 | Opacité : 40 %


#### Cas spécifiques
**Bouton primaire pleine largeur**

Comme le bouton principal, le bouton primaire pleine largeur s'adapte à la largeur du container (Mobile et Desktop).

**Enable**

![button__primary](design/button__primary.png) !!!à modifier!!!


**Bouton primaire, hauteur 34px**

Le bouton primaire de 34px de haut est utilisé dans des cas spécifiques et principalement sur Desktop.



  Enable | Hover / Focus / Pressed | Inactif
  ------------ | ------------- | ------------- |
  ![button__primary__small__enabled](design/button__primary__small__enabled.png)|![A](design/a.png) !!!à modifier!!! | ![A](design/a.png) !!!à modifier!!!
  Hauteur : 34px  <br> Largeur : minimum 100px et padding 15px  <br> Contour : angle 3px <br> Couleur : #E2001A <br> Texte : 14px, regular, police du thème, #FFFFFF | - <br> - <br> - <br> Couleur : transparent <br> Texte : #B40015 | Opacité : 40 %


**Bouton primaire, contexte Abonnement**

Dans un contexte Abonnment, la couleur de fond du bouton primaire devient #FFCC33.


  Enable | Hover / Focus / Pressed
  ------------ | -------------
![button__primary__abo__enabled](design/button__primary__abo__enabled.png)|   ![su-button_su-premium_hover](design/su-button_su-premium_hover.png) !!!à modifier!!!
Couleur : #FFCC33 |  Couleur : #E7AF07


**Bouton primaire, contexte Premium**

Dans un contexte Premium, la couleur de fond du bouton primaire devient #DBA504 et celle du texte #333333.


  Enable | Hover / Focus / Pressed
  ------------ | -------------
![su-button_su-subscription](design/su-button_su-subscription.png) !!!à modifier!!!|   ![su-button-su-subscription-hover](design/su-button-su-subscription-hover.png) !!!à modifier!!!
Couleur : #DBA504 |  Couleur : #C2940C

### Bouton secondaire

Le bouton secondaire transparent avec un cadre fin est utilisé pour des actions de moindre importance. Il est souvent associé avec le bouton primaire.


Enable | Hover / Focus / Pressed | Inactif
------------ | ------------- | ------------- |
![A](design/su-button_su-secondary_hover.png) !!!à modifier!!!| ![A](design/su-button_su-secondary_hover.png) !!!à modifier!!! | ![A](design/su-button_su-secondary_hover.png) !!!à modifier!!!
Hauteur : 44px  <br> Largeur : minimum 140px et padding 20px  <br> Contour : angle 3px <br> Couleur : #333333 et transparent  <br> Texte : 16px, regular, police du thème, #E2001A | - <br> - <br> - <br> Couleur :  <br> Texte : #B40015 | Opacité : 40 %


#### Cas spécifique
**Bouton secondaire, hauteur 34px**

Le bouton primaire de 34px de haut est utilisé dans des cas spécifiques et principalement sur Desktop.


Enable | Hover / Focus / Pressed | Inactif
------------ | ------------- | ------------- |
![A](design/a.png) !!!à modifier!!!| ![A](design/a.png) !!!à modifier!!! | ![A](design/a.png) !!!à modifier!!!
Hauteur : 34px  <br> Largeur : minimum 100px et padding 15px  <br> Contour : épaisseur 1px, angle 3px <br> Couleur : rouge principal #333333 <br> Texte : 14px, regular, police du thème, #E2001A | - <br> - <br> - <br> Couleur : transparent <br> Texte : #B40015 | Opacité : 40 %

## Bonnes pratiques

- La 1re lettre du bouton est en majuscule, le reste est en minuscule.
- Le texte du bouton est limité à une ligne.
- Le texte du bouton doit être explicite et décrire l'action de celui-ci.


![Image_button_texte minimum_ok](design/Image_button_texte_minimum_ok.png)  |![Image_button_texte minimum_ko](design/Image_button_texte_minimum_ko.png)
------------ | -------------
  ![Rectangle vert](design/rectangle-vert.png) **Do** Utiliser un texte simple | ![Rectangle rouge](design/rectangle-rouge.png) **Don't** Ne pas surcharger le texte


- Lorsque vous utilisez un bouton primaire et un bouton secondaire, le bouton primaire doit être placé à gauche. Une exception s'applique dans le cas d'écran séquentiel, le bouton primaire est à droite.
image + petit Decouvrez toutes nos offres... Do/ don't

![Image_button_sequentiel](design/Image_button_sequentiel.png)

  ![Rectangle vert](design/rectangle-vert.png) **Do** Mettre le bouton " Retour " à gauche

- Sur un mobile lorsqu’il y a un seul bouton, le mettre en pleine largeur.

!!!image!!!Autre que Abonnement


- Ne placez pas un bouton sous un autre bouton s'il y a de la place pour les mettre côte à côte.

![Image_button_2 buttons_ko](design/Image_button_buttons_ko.png)

![Rectangle rouge](design/rectangle-rouge.png) **Don't** Ne placez pas ces boutons les uns en dessous de l'autre.



- La couleur d'arrière-plan ne doit pas être similaire à celle du bouton afin de mettre en avant l'action. Par exemple, le fond noir est à proscrire sous un bouton rouge.

## Autres composants
- Liens
- Boutons avec un picto
- Floating action buttons
- “ Voir plus “
- " Lire la suite + "
- “ Votre adresse email OK ”
- " Géolocalisez-vous "
