# Grids / Grilles

Une grille est une armature qui permet d'**organiser une page et son contenu**. Les éléments sont ainsi cadrés et les espaces négatifs sont harmonisés. L'expérience utilisateur est alors cohérente sur différentes tailles et orientations de l'écran.


## Usage

La grille est une aide autant pour le concepteur que pour l'utilisateur. Cela permet d'atteindre un équilibre harmonieux de l'espacement vertical entre les différents blocs. On obtient alors des pages plus lisibles et variées tout en assurant une cohérence générale.

## Anatomie

Une grille est constituée de colonnes, séparées par des gouttières permettant de structurer le contenu. Il ne faut pas oublier les marges qui encadrent le tout.


### Colonnes

- Les colonnes permettent de positionner les éléments horizontalement.
- **Sur mobile**, la grille comporte **6 colonnes.**
- **A partir 768px**, la grille contient **24 colonnes.**
- La largeur des colonnes varie en fonction de la taille d'écran.
- Elles peuvent être imbriquées les unes dans les autres.


### Gouttières

- Les gouttières sont les espaces entre les colonnes.
- Ces espaces vides segmentent l’information et permettent de faire respirer la page. La circulation des blancs permet de rythmer la page.
- Leur largeur est fixe : **20px**.

### Marges
- La grille dispose de marges latérales entre le contenu et les bords gauche et droit de l'écran. L'objectif est que l'œil puisse bénéficier d'un confort de lecture en ne "tapant" pas contre les bords de la fenêtre du navigateur.
- Le contenu est centré entre les marges.

<div class="tableau-grille">

Taille de l'écran | xs&nbsp;: 320 à 359px | sm&nbsp;: 360 à 767px | md&nbsp;: 768 à 979px | md&nbsp;: 768 à 979px | lg&nbsp;: 980 à 1279px | xl&nbsp;: À partir de 1280px
------------ | ------------- | ------------- | ------------- | ------------- | ------------- | -------------
Nombre de colonnes | 6 | 6 | 6 | 24 | 24 | 24
Largeur des colonnes | *30 à ±41px* | *±33 à ±101px* | *±95 à 130px* | 12px | ±21px | ±33px
Gouttières | 20px | 20px | 20px | 20px | 20px | 20px
Largeur du container  | *280 à 349px*  |  *300 à 707px* | *668 à 879px* | 748px | 960px  | 1260px
Taille de la marge externe | 20px | 30px | 50px | *10px et plus* | *10px et plus* | *10px et plus*

</div>

<div class="do-dont">
<div class="do">

![grid__320](design/grid__320.png)
<br/> Écran mobile xs (320px)


![grid__360](design/grid__360.png)
<br/> Écran mobile sm (360px)


![grid__960](design/grid__960.png)
<br/> !! Écran tablette ?? (960px)


![grid__1280](design/grid__1280.png)
<br/> Écran desktop xl (1280px)

### Autres composants
- Marges
- Points d'arrêt
- Etc.
