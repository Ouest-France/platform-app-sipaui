# Loaders / Chargeurs

Les loaders sont des animations en boucle qui indiquent à l’utilisateur qu'un nouveau contenu est en cours de chargement.

## Usage

- Le loader doit être utilisé pour des activités courtes (entre 2 et 5 secondes). Des activités plus longues peuvent nécessiter d'autres méthodes de communication, telles que des notifications.
- Sa progression n’est pas précisément détectable ou il n'est pas nécessaire d'indiquer la durée d'une activité.

## Spécifications

- Un indicateur s’anime le long d'une piste circulaire invisible dans le sens des aiguilles d'une montre.
- Il disparaît à la fin de l’activité en cours.
- Taille : 48 ? material
- Couleur : #B40015

!!!image!!! le loader pour le thème OF

## Positionnements
- Le loader est centré horizontalement dans son parent.
Lors du chargement de toute la page, il est centré sur l'écran.

!!!image!!! Un indicateur circulaire centré sur l'écran indique un processus de chargement.

- Il permet d’attirer l'attention de l’utilisateur sur les nouveaux contenus. Alors, il est placé au-dessus ou au-dessous du contenu existant.

## Bonnes pratiques
Loader peut être affiché à l’intérieur d’un bouton ou seul. ?

https://design-system.futurelearn.com/core-styles/interactive-states

Si le temps d'attente est supérieure à 5 secondes, privilégier d'autres méthodes de communication. Par exemple, un message fait patienter l'utilisateur afin qu'il ne quitte pas la page.

## Autre composant
Loader dans imput, bouton… Il peut être appliqué directement sur un bouton ou une carte. version small?

!!!image!!! Ne pas

Ne pas intégrer un spinner à chaque bouton de votre application. Ils peuvent interrompre inutilement la tâche de l'utilisateur.

https://developer.apple.com/design/human-interface-guidelines/macos/indicators/progress-indicators/




Bonnes pratiques
