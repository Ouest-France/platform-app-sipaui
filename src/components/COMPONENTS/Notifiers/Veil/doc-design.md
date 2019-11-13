# Veil / Voile

Le voile est un arrière-plan translucide qui vient se positionner au-dessus la page actuelle et sous un autre composant, comme une [pop-in](/storybook/?path=/story/components-notifiers-pop-ins--design).

## Usage

Il permet d’attirer l’attention de l’utilisateur sur le composant associé en isolant visuellement et fonctionnellement ce composant.


## Spécifications

### Apparence

- Il est présent sur tous les écrans.
- Sa couleur est #000000 avec une opacité de 60%.

### Comportement

- Le voile apparaît et disparaît en même temps que le composant qu’il accompagne.
- Tant que le voile est visible, **le reste de l’écran est inaccessible**.
- Un clic / tape sur lui provoque sa fermeture.
