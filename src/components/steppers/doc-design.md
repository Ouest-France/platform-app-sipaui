# Steppers / Indicateurs de progression


Les indicateurs de progression représentent visuellement l'avancement d’un parcours utilisateur en plusieurs étapes. Ils guident l'utilisateur à travers un certain nombre de paliers afin de mener à bien un processus spécifié. L'objectif de ce composant est de réduire le taux d’abandon des tunnels.


## Usage

- **L'utilisateur est guidé** lors de l'exécution d'une tâche spécifique. Par exemple, un processus d'abonnement est divisé en différentes étapes. L'exhaustivité augmente à mesure que chaque étape est terminée.
- Dans certains formulaires, l'utilisateur est autorisé à revenir aux étapes précédentes pour modifier ses données renseignées.
- Cependant, il ne peut pas accéder aux étapes suivantes.


## Spécifications

- Les indicateurs de progression affichent l'avancée d'une séquence en la divisant en **plusieurs étapes numérotées**.
- Les étapes sont affichées dans un ordre logique de gauche à droite.
- La **mise en avant de l'étape en cours** aide l'utilisateur à savoir où il se situe dans le tunnel et quelles étapes suivent.
- Sur desktop, des libellés accompagnent l'indicateur de progression. Elles définissent des attentes claires pour l'utilisateur.
- Sur mobile, les libellés ne sont pas présents.
- Les couleurs des indicateurs de progressions sont celles sur thème ou du sous-thème s'il existe.

### Thème Ouest-France

Enabled | Hover / Focus / Pressed | Check | Inactif
------------ | ------------- | ------------- |
![stepper__bubbles__active](design/stepper__bubbles__active.png)| htr | ![stepper__bubbles__check](design/stepper__bubbles__check.png) | ![stepper__bubbles__disabled](design/stepper__bubbles__disabled.png)
Taille : 44px ?  <br> Contour : 1px  <br> Couleur : #E2001A <br> Texte : 16px, regular ?, police du thème, #333333 | - <br> - <br> - <br> - <br> - <br> Texte : #B40015 | ? | Opacité : 40 %

### Sous-thème Abonnement

#### Mobile

**Etape 1** | ![without-label__step__1](design/without-label__step__1.png)
------------ | -------------
**Etape 2** | ![without-label__step__2](design/without-label__step__2.png)
**Etape 3** | ![without-label__step__3](design/without-label__step__3.png)


#### Dektop

**Etape 1** | ![default__step__1](design/default__step__1.png)
------------ | -------------
**Etape 2** | ![default__step__2](design/default__step__2.png)
**Etape 3** | ![default__step__3](design/default__step__3.png)


## 4- Bonnes pratiques

- Chaque étape présente des actions de la part de l'utilisateur. Une simple information ne nécessite pas d'étape dédiée notamment en fin de formulaire.
- Les étiquettes qui accompagnent l'indicateur de progression sont claires, concises et courtes (2-3 mots maximum).
- Utilisez 3 étapes minimums. Un stepper n'est pas nécessaire pour 1 ou 2 étapes.
- Utilisez 5 étapes maximums. Au-delà de ce nombre, le parcours utilisateur mérite d'être optimisé.
- Évitez d'utiliser plusieurs steppers sur une même page.
