  # Titles / Titres

Les titres sont des repères visuels. Ces éléments sont donc mis en avant par rapport au contenu qui le suit. Leurs styles permettent aussi de renforcer l’identité de marque.


## Usage
Les titres sont les textes aux corps les plus grands. Ils sont courts, importants et sont hiérarchisés afin de faciliter le parcours de lecture. Un élément de titre décrit brièvement le sujet de la section qu’il introduit.

**SipaUI propose trois niveaux de titres**, le *niveau 1* étant le plus important et le *niveau 3* le moins.

### Niveau 1

- Le titre de niveau 1 est **l’élément typographique le plus visible de la page**. En le lisant, l’utilisateur doit pouvoir identifier le sujet de la page.
- **Les mots clés de la page sont au début de ce titre**. Ce titre étant lié à la balise  `<h1>`, Google leur accordera davantage de poids.
- **Le titre doit être concis.** Plus le titre sera long, plus les mots clés seront dilués.

### Niveau 2

- Ils introduisent les **principales sections d’un contenu**. Le contenu est divisé en blocs plus digestes pour les utilisateurs et Google.
- **Le nombre de titres de niveau 2 doit être limité** afin que les utilisateurs puissent balayer le contenu.
- On peut utiliser la balise `<h2>` pour ces titres de niveaux 2, mais elle est prise en compte pour le référencement. **Le choix de cette balise est donc lié au SEO**.

### Niveau 3

- Ils permettent de **faire ressortir la profondeur d’un contenu**.
- Les balises `<h3>` n’ont que peu de valeur pour le SEO.


## Spécifications

Sur un site de journal, publiant de nombreux articles présentés dans diverses listes, la mise en forme des titres peut varier en fonction de leur type. **Il existe 3 types de titres distinct**s&nbsp;:
- les **titres de contenu non éditorial** (cas par défaut),
- les **titres éditoriaux des listes d’articles** (cas spécifique),
- les **titres éditoriaux des articles complets** (cas spécifique).

Par défaut, SipaUI utilise une police de caractères spéciale&nbsp;: *Oswald*. Cela peut être changé au besoin via les thèmes.

### Contenu non éditorial
Le contenu non éditorial correspond à tout ce qui n’est pas dépendant d’article sur le site. Il s'agit donc des **titres standards** (titres de page et titres de rubrique), ceux appliqués par défaut. Les listes d’articles ou le contenu d’un article proprement dit rentrent dans le cas de contenu éditorial. **Tant que vous n’utilisez pas les classes spécifiques aux contenus éditoriaux, vous serez dans ce cas standard**.

#### Mobile

Balise | Police | Graisse | Taille | Couleur
------------ | ------------- | ------------- | ------------- | -------------
Niveau 1 | Oswald | Normal | 30px | #333333
Niveau 2 | Oswald | Normal | 24px | #333333
Niveau 3 | Oswald | Normal | 18px | #333333

#### Desktop

Balise | Police | Graisse | Taille | Couleur
------------ | ------------- | ------------- | ------------- | -------------
Niveau 1 | Oswald | Normal | 40px | #333333
Niveau 2 | Oswald | Normal | 30px | #333333
Niveau 3 | Oswald | Normal | 18px | #333333


### Contenu éditorial - liste d’articles
Les listes d’articles sont des blocs s’affichant généralement sur une page non éditoriale, mais peuvent aussi être présentes dans une page contenant l’article complet. Ces blocs n’ont **pas de titre de niveau 1** (puisque ce titre est porté par la page) mais ont généralement un titre de rubrique servant de titre principal au bloc. Ces listes affichent bien sûr aussi les titres d’articles, mais ces titres ne sont pas traités comme des titres standards, ils sont beaucoup plus faibles visuellement et peuvent avoir un corps variable en fonction de l’équilibre de la page et de la place dont ils disposent.

#### Mobile

Balise | Police | Graisse | Taille | Couleur
------------ | ------------- | ------------- | ------------- | -------------
Niveau 2 | Oswald | Normal | 24px | #333333
Titre d’article | Arial | Bold | 16px | #333333

#### Desktop

Balise | Police | Graisse | Taille | Couleur
------------ | ------------- | ------------- | ------------- | -------------
Niveau 2 | Oswald | Normal | 30px | #333333
Titre d’article | Arial | Bold | 16px | #333333


### Contenu éditorial - article complet
**Le contenu des articles** a des caractéristiques qui lui sont propres. Les balises de titre (`<h1> à <h3>`) doivent y être présentes afin de favoriser l’indexation du contenu éditorial du site par les moteurs. Ici, la relation entre le niveau de titre en HTML et le niveau de titre visuel doivent être en accord.
#### Mobile

Balise | Police | Graisse | Taille | Couleur
------------ | ------------- | ------------- | ------------- | -------------
h1 | Arial | Bold | 24px | #333333
h2 | Oswald | Normal | 22px | #333333
h3 | Oswald | Normal | 18px | #333333


#### Desktop

Balise | Police | Graisse | Taille | Couleur
------------ | ------------- | ------------- | ------------- | -------------
h1 | Arial | Bold | 38px | #333333
h2 | Oswald | Normal | 30px | #333333
h3 | Oswald | Normal | 22px | #333333


## Bonnes pratiques

- La cohérence dans la hiérarchie est importante. Cela signifie que tous les éléments de même importance dans la hiérarchie devraient avoir la même taille, la même couleur et la même police. Cette cohérence offre aux utilisateurs un repère visuel et facilite l’organisation du contenu.
- N’utilisez pas plus de deux polices de caractères sur votre mobile. Il n’y a tout simplement pas assez de place pour que les visiteurs puissent gérer visuellement autant de variations.
