# Loaders / Chargeurs

Les loaders sont des animations en boucle qui indiquent à l’utilisateur qu'un nouveau contenu est en cours de chargement.

## Usage

- Le loader doit être utilisé pour des activités courtes : entre 2 et 5 secondes.
- Sa progression n’est pas précisément détectable ou il n'est pas nécessaire d'indiquer la durée d'une activité.

## Spécifications

- Un indicateur s’anime le long d'une piste circulaire gris dans le sens des aiguilles d'une montre.
- Le loader disparaît à la fin de l’activité en cours.
- Taille : 44px
- Couleur de l'indicateur : #E2001A
- Couleur de la piste circulaire : #D4D4D4

![loader__default](design/loader__default.png)

## Positionnements

- Le loader est centré horizontalement dans son parent.
- Lors du chargement de toute la page, il est centré sur l'écran.


<div class="do-dont">
<div class="do">

![loader__exemples__loader-with-overflow](design/loader__exemples__loader-with-overflow.png) |
------------ |
**Do** <br/> Un loader centré sur l'écran indique que l'ensemble du processus est en cours de chargement.

</div>
 </div>


- Le loader permet d’attirer l'attention de l’utilisateur sur les nouveaux contenus en cours de chargement. Alors, il est placé au-dessous ou au-dessus du contenu existant.

## Bonnes pratiques

- Un seul loader par page est suffisant.
- Si le temps d'attente est supérieure à 5 secondes, privilégier d'autres méthodes de communication. Par exemple, un message fait patienter l'utilisateur afin qu'il ne quitte pas la page.

## Autre composant

- Text field loader
