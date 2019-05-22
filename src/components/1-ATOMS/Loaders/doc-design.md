# Loaders / Chargeurs

Les loaders sont des animations en boucle qui indiquent à l’utilisateur qu'**un contenu est en cours de chargement.**

## Usage

- Le loader doit être **utilisé pour des activités courtes** : entre 2 et 5 secondes.
- **Sa progression n’est pas précisément détectable ou il n'est pas nécessaire d'indiquer la durée d'une activité.**

## Spécifications

- Un indicateur s’anime le long d'une piste circulaire dans le sens des aiguilles d'une montre.
- Le loader disparaît à la fin de l’activité en cours.
- Taille : 44px
- Couleur de l'indicateur : #E2001A
- Couleur de la piste circulaire : #D4D4D4

![loader__default](components/1-ATOMS/Loaders/design/loader__default.png)

- Lorsque le loader est sur une page, un voile blanc couvre l'ensemble de cette page. Le loader se possitionne dessus.

## Positionnements

- Le loader est centré horizontalement dans son parent.
- Lors du chargement de toute la page, il est centré sur l'écran.


<div class="do-dont">
<div class="do">

![loader__exemples__loader-with-overflow](components/1-ATOMS/Loaders/design/loader__exemples__loader-with-overflow.png) |
------------ |
**Do** <br/> Un loader centré sur l'écran indique <br /> que l'ensemble du processus est en cours <br /> de chargement.

</div>
 </div>


## Bonnes pratiques

- Un seul loader par page est suffisant.
- Si le temps d'attente est supérieure à 5 secondes, privilégier d'autres méthodes de communication. Par exemple, un message fait patienter l'utilisateur afin qu'il ne quitte pas la page.

## Autre composant

- Text field loader
