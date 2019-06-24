<!--  Modèle MADR : https://adr.github.io/madr/ -->;

# Choisir le mode de rangement des composants dans la colonne de gauche du StoryBook

* Statut&nbsp;: proposition
* Date&nbsp;: 24/06/19
* Décideurs&nbsp;: Cédric BOIDIN, Alexandre LÉVÊQUE, Céline COLIN, Stéphane CHESNÉ


## Contexte

StoryBook propose un menu pour accéder à tous les composants dans la colonne de gauche. Ces composants peuvent y être rangés selon la logique que l’on souhaite. Il faut donc déterminer quelle logique est la plus pertinente.


## Propositions

### Premier niveau
1. Pas de classement, tous les composants sont à la racine.
2. Classement en 2 groupes : **Fondations** (grille, breakpoints, helpers, marges…)  et **Components** (boutons, labels, liens, titres, cases-à-cocher…). Il s’agit du classement actuellement utilisé.
3. Classement suivant la logique atomic-design : **Atoms**, **Molecules**, **Organisms**. Classement utilisé par exemple par [Saagie](https://7-design-system.public.prod.saagie.io/v/latest/)

### Second niveau
Quel que soit le premier niveau choisi, il est possible de regrouper **certains** composants dans un second niveau par type (par exemple : **Form**, **Text**…)


## Arguments

### Premier niveau
NB StoryBook propose un moteur de filtre en haut de la colonne (moyennement fonctionnel malheureusement).

1. **Pas de classement**

   (+) En mettant tous les composants au même niveau, classés par ordre alphabétique, l’utilisateur n’a pas besoin de chercher une logique. Il a tous les composants sous les yeux et s’il a une idée du nom du composant, il peut le trouver sans fouiller dans des dossiers.
   
   (-) Plus le nombre de composants augmente, plus il devient difficile de trouver ce que l’on cherche.
 
2. **Fondations / Componants**

   (+) Le classement en 2 entités diminue le nombre de composants se côtoyant.
   
   (+) La logique de rangement est assez simple, aussi bien pour nous que pour l’utilisateur.
   
   (-) L’utilisateur doit avoir une idée de la logique de classement pour savoir où trouver le composant qu’il cherche.
   
   (-) Le dossier *Fondations* ne comporte que peu de composants -> le dossier *Componants* risque aussi de devenir surchargé.

3. **Atoms / Molecules / Organismes**

   (+) S’appuye sur la notion d’Atomic Design, notion publique et assez partagée.
   
   (+) Divise les composants en plus d’ensembles que la solution 2 -> moins grand risque de se retrouver avec un capharnaüm de composants.
   
   (-) Logique de rangement complexe aussi bien pour nous que pour l’utilisateur (un stepper, c’est un atome, une molécule ou un organisme ?).
   
   (-) Ces 3 ensembles ne suffisent pas, certains composants ne rentrent dans aucun d’eux. Par exemple, [Saagie](https://7-design-system.public.prod.saagie.io/v/latest/) a dû ajouter les niveaux *Grid*, *Layouts*, *Helpers*…

## Positions

*Cédric BOIDIN* - 23/05/19

> un point qui va un peu contre cette approche, c'est que nous utilisons des naming du style su-list-xxx et pas prefixé par le type de composant (à la https://css-tricks.com/abem-useful-adaptation-bem/).


*Cédric BOIDIN* - 23/05/19

> Sinon avec le découpage atomicn j'aime bien l'idée de mixer éléments html/css pur et Composant Vue.
> 
> Mais cela ne cadre helas peut être pas si bien avec notre approche double
> * css/html/js pur pour le site
> * framework orienté pour les applis de gestion
> 
> *(exemple dropdown ou accordéon qui devraient exister à la fois en Vue et en html/js/css)*


*Alexandre LÉVÊQUE* - 23/05/19

> Je suis partisan du classement par typologie. Avoir tous les composants de formulaire rangés ensemble me paraît plus logique qu'un avatar et un input (atomic design). D'autre part, il est logique que le dossier Composants soit plus rempli. On peut sûrement découper un peu plus ? Je trouve cette structure assez facile à prendre en main, par exemple : https://element.eleme.io/#/fr-FR/component/installation


## Décision
