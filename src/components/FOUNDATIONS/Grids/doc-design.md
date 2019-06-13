# Grids / Grilles

Les grilles sont des armatures qui permettent d’**organiser des pages et leur contenu**. Les éléments sont ainsi cadrés et les espaces négatifs sont harmonisés. L’expérience utilisateur est alors cohérente, quelles que soient la taille et l’orientation de l’écran.



## Usage

La grille est une aide autant pour le concepteur que pour l’utilisateur. Cela permet d’atteindre un équilibre harmonieux de l’espacement vertical entre les différents blocs. On obtient alors des pages plus lisibles et variées tout en assurant une cohérence générale.

## Anatomie

Une grille est constituée de colonnes, séparées par des gouttières permettant de structurer le contenu. Il ne faut pas oublier les marges qui encadrent le tout.


### Colonnes

- Les colonnes permettent de positionner les éléments horizontalement.
- **Sur mobile**, la grille comporte **6 colonnes.**
- **A partir 768px**, la grille contient **24 colonnes.**
- La largeur des colonnes varie en fonction de la taille d’écran.
- Elles peuvent être imbriquées les unes dans les autres.


### Gouttières

- Les gouttières sont les espaces entre les colonnes.
- Ces espaces vides segmentent l’information et permettent de faire respirer la page. La circulation des blancs permet de rythmer la page.
- Leur largeur est fixe : **20px**.

### Marges
- La grille dispose de marges latérales entre le contenu et les bords gauche et droit de l’écran. L’objectif est que l’œil puisse bénéficier d’un confort de lecture en ne "tapant" pas contre les bords de la fenêtre du navigateur.
- Le contenu est centré entre les marges.

### Référentiel

<div class="tableau-grille">

Taille de l’écran | 320 à 359px | 360 à 767px | 768 à 979px | 980 à 1279px | À partir de 1280px
------------ | ------------- | ------------- | ------------- | ------------- | -------------
Référence de taille | xs | sm | md | lg | xl
Nombre de colonnes | 6 | 6 | 24 | 24 | 24
Largeur des colonnes | *30 à ±36px* | *±33 à ±101px* | ±10px | 20px | ±33px
Gouttières | 20px | 20px | 20px | 20px | 20px
Largeur du container  | *280 à 319px*  |  *300 à 707px*  | 708px | 940px  | 1260px
Taille de la marge externe | 20px | 30px | *30px plus fond perdu* | *10px plus fond perdu* | *10px plus fond perdu*

<p class="legende margin-top-neg">En gris et italique&nbsp;: valeurs fluides</p>

</div>

<div class="do-dont">
<div class="do">

![grid__320](components/FOUNDATIONS/Grids/design/grid__320.png)
<p class="legende margin-top-neg">Écran mobile&nbsp;: 320px</p>

![grid__360](components/FOUNDATIONS/Grids/design/grid__360.png)
<p class="legende margin-top-neg">Écran mobile&nbsp;: 360px</p>

![grid__768](components/FOUNDATIONS/Grids/design/grid__768.png)
<p class="legende margin-top-neg">Écran tablette portrait&nbsp;: 768px</p>

![grid__940](components/FOUNDATIONS/Grids/design/grid__940.png)
<p class="legende margin-top-neg">Écran tablette paysage&nbsp;: 980px</p>

![grid__1260](components/FOUNDATIONS/Grids/design/grid__1260.png)
<p class="legende margin-top-neg">Écran desktop&nbsp;: 1280px</p>

### Autres composants
- Marges
- Points d’arrêt
- Etc.
