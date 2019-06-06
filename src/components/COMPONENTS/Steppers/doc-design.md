# Steppers / Indicateurs de progression


Les indicateurs de progression **représentent visuellement l’avancement d’un parcours utilisateur** en plusieurs étapes. Ils guident l’utilisateur à travers un certain nombre de paliers afin de mener à bien un processus spécifié.

**L’utilisateur est informé sur le sujet et la densité globale du parcours.** Les différentes étapes le rendre plus digeste.
L’objectif de ce composant est de réduire le taux d’abandon des tunnels.


## Usage

- **L’utilisateur est guidé** lors de l’exécution d’une tâche spécifique. L’exhaustivité augmente à mesure que chaque étape est terminée.
- Dans certains formulaires, l’utilisateur est autorisé à revenir aux étapes précédentes pour vérifier ou modifier les données renseignées. Ensuite, il doit valider chaque étape préremplie ou modifiée.
- Cependant, l’utilisateur ne peut pas accéder aux étapes suivantes sans avoir validé l’étape en cours.

## Spécifications

- Les indicateurs de progression affichent l’avancée d’une séquence en la divisant en **plusieurs étapes numérotées**.
- Les étapes sont affichées dans un ordre logique de gauche à droite.
- La **mise en avant de l’étape en cours** aide l’utilisateur à savoir où il se situe dans le tunnel.
- La dernière étape de stepper est symbolisée par le numéro de l’étape. Le concepteur peut le remplacer par un check.
- Sur mobile, il n’y a pas de libellés.
- Sur desktop, des libellés accompagnent l’indicateur de progression. Ils définissent des attentes claires pour l’utilisateur.
- Les couleurs des indicateurs de progressions sont d’abord celles du sous-thème s’il existe puis celles sur thème.

## Spécifications

### Indicateurs isolés

Thème Ouest-France


Enabled | Hover / Pressed | Inactif | Check
------------ | ------------- | ------------- | ------------- |
![stepper__bubbles__active](components/COMPONENTS/Steppers/design/stepper__bubbles__active.png)| ![stepper__bubbles__hover](components/COMPONENTS/Steppers/design/stepper__bubbles__hover.png) |  ![stepper__bubbles__disabled](components/COMPONENTS/Steppers/design/stepper__bubbles__disabled.png) | ![stepper__bubbles__check](components/COMPONENTS/Steppers/design/stepper__bubbles__check.png)
Taille : 30 x 30px <br> Couleur : #E2001A <br> Texte : 16px, Arial bold, #FFFFFF | Taille : 30 x 30px  <br> Couleur : #B40015 <br> Contour : 1px <br> Texte : 16px, Arial bold, #FFFFFF | Taille : 30 x 30px <br> Couleur : #D4D4D4 <br> Contour : 1px <br> Texte : 16px, Arial bold, #FFFFFF | Taille : 30 x 30px <br> Couleur : #E2001A <br> Couleur du symbole : #FFFFFF


### Ensemble du stepper

#### Mobile - Sous-thème Abonnement

**Étape 1** | ![abonnement__mobile__step__1](components/COMPONENTS/Steppers/design/abonnement__mobile__step__1.png)
------------ | -------------
**Étape 2** | ![abonnement__mobile__step__2](components/COMPONENTS/Steppers/design/abonnement__mobile__step__2.png)
**Étape 3** | ![abonnement__mobile__step__3](components/COMPONENTS/Steppers/design/abonnement__mobile__step__3.png)

#### Mobile - Thème Ouest-France

**Étape 1** | ![without-label__step__1](components/COMPONENTS/Steppers/design/without-label__step__1.png)
------------ | -------------
**Étape 2** | ![without-label__step__2](components/COMPONENTS/Steppers/design/without-label__step__2.png)
**Étape 3** | ![without-label__step__3](components/COMPONENTS/Steppers/design/without-label__step__3.png)

#### Desktop - Thème Ouest-France

**Étape 1** | ![default__step__1](components/COMPONENTS/Steppers/design/default__step__1.png)
------------ | -------------
**Étape 2** | ![default__step__2](components/COMPONENTS/Steppers/design/default__step__2.png)
**Étape 3** | ![default__step__3](components/COMPONENTS/Steppers/design/default__step__3.png)

Présents uniquement desktop, les libellés ont une taille de caractères de 14px et leur couleur est #333333. Lorsqu’ils sont inactifs, ils sont #D4D4D4.
## Bonnes pratiques

- Chaque étape présente au minimum une action de la part de l’utilisateur. Une simple information ne nécessite pas d’étape dédiée notamment en fin de formulaire.
- Les étiquettes qui accompagnent l’indicateur de progression sont claires, concises et courtes (2-3 mots maximums).
- Utilisez 3 étapes minimum. Un stepper n’est pas nécessaire pour 1 ou 2 étapes.
- Utilisez 5 étapes maximum. Au-delà de ce nombre, le parcours utilisateur mérite d’être optimisé.
- Évitez d’utiliser plusieurs steppers sur une même page.
