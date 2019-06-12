  # Titles / Titres

Les titres sont des repères visuels. Ces éléments sont donc mis en avant par rapport au contenu qui le suit. Leurs styles permettent aussi de renforcer l’identité de marque.


## Usage
Les titres sont les textes aux corps les plus grands. Ils sont courts, importants et sont hiérarchisés afin de faciliter le parcours de lecture. Un élément de titre décrit brièvement le sujet de la section qu’il introduit.

Dans certains cas, il sera nécessaire que **ces niveaux d’importance soient différents entre le rendu visuel et le SEO**. Par exemple, les différentes listes d’articles auront un **titre de rubrique** plus les **titres des articles**&nbsp;:
- Les titres de rubrique informent sur la logique du regroupement&nbsp;: «&nbsp;En continu&nbsp;», «&nbsp;Pratiques&nbsp;»… Ils sont importants pour le lecteur et doivent donc être mis en avant visuellement. Par contre, ils ne doivent pas avoir d’importance pour les moteurs de recherche.
- À l’inverse, les titres des articles seront minimisés visuellement (puisque moins importants pour le lecteur que les titres de rubrique), mais primordiaux pour les moteurs.

C’est pourquoi SipaUI style à la fois les titres au sens HTML (h1…) et les titres visuels grâce à des classes spécifiques `su-h1`…

### Rôle des balises `<h>`
**Les balises `<h1>` à `<h3>`**, en tant que balises HTML, ont un poids SEO. Elles indiquent **aux moteurs de recherche** quelle est **l’importance de chaque titre**.

Elles doivent donc **encadrer chaque titre qui a une valeur éditoriale** sur une page web. Cette valeur éditoriale peut parfois être *contradictoire* avec la logique du lecteur. Par exemple une page **Une Sport** va avoir un titre principal «&nbsp;Sport&nbsp;» (**`<h1>`**), plusieurs titres secondaires de rubrique comme «&nbsp;Foot&nbsp;» (**`<h2>`**), «&nbsp;Tennis&nbsp;» (**`<h2>`**), «&nbsp;En continu&nbsp;» (**pas de `<h2>`**car pas intéressant pour les moteurs de recherche)…) et les titres de chaque article de chaque liste (**`<h2>`** ou **pas de `<h2>`** en fonction des circonstances)… **C'est le SEO qui doit décider de l’utilisation de balises `<h>` ou non**.

Illustration&nbsp;:

<div class="flex">
 <div>
 
![Titre vu par utilisateur](components/COMPONENTS/Titles/design/titraille__utilisateur.png)
<p>Exemple de hiérarchisation possible des titres vus par un lecteur.</p>

 </div>
 
 <div>

![Titre vu par moteur de recherche](components/COMPONENTS/Titles/design/titraille__robot.png)
<p>Exemple de hiérarchisation possible des titres vus par un moteur de recherche</p>

 </div>
</div>


**SipaUI propose trois niveaux de titres**, `<h1>` étant le plus important et `<h3>` le moins.

### Les titres de niveau 1 / balise `<h1>`

- Le titre de niveau 1 est **l’élément typographique le plus visible de la page**. On utilisera a priori toujours la balise `h1` correspondant au titre éditorial qui fait partie des «&nbsp;zones chaudes&nbsp;» en matière de référencement. En le lisant, on doit pouvoir identifier le sujet de la page.

- **Les mots clés de la page sont au début du `<h1>`.** Google leur accordera davantage de poids.
- **Le titre doit être concis.** Plus le titre sera long, plus les mots clés seront dilués.

### Les titres de niveau 2 / balise `<h2>`

- Ils peuvent être construits avec **la balise `<h2>` ou pas. 

- Ils introduisent les principales sections d’un contenu**. Le contenu est divisé en blocs plus digestes pour les utilisateurs et Google.

- **Le nombre de titres de niveau 2 doit être limité** afin que les utilisateurs puissent balayer le contenu.

- Les balises `<h2>` sont prises en compte pour le SEO.

### Les titres de niveau 3 / balises `<h3>`

- Ils peuvent être construits avec **la balise `<h3>` ou pas.

- Ils permettent de **faire ressortir la profondeur d’un contenu**.

- Les balises `<h3>` n’ont que peu de valeur pour le SEO.


## Spécifications

Sur un site de journal, publiant de nombreux articles présentés dans diverses listes, **il existe 3 types de titres distinct**s&nbsp;: les **titres de rubriques («&nbsp;Contenu non éditorial&nbsp;»)**, les **titres éditoriaux des articles dans une «&nbsp;liste d’articles&nbsp;»** et les **titres d’un «&nbsp;Article complet&nbsp;»** sur la page éditoriale de cet article.

Par défaut, SipaUI utilise une police de caractères spéciale&nbsp;: *Oswald*. Cela peut être changé au besoin via les thèmes.

### Contenu non éditorial
Le contenu non éditorial correspond à la plupart des cas sur le site, à l’exception des listes d’articles et du contenu d’un article proprement dit. Il s'agit des titres de pages et de rubriques.

#### Mobile

Balise | Police | Graisse | Taille | Couleur
------------ | ------------- | ------------- | ------------- | -------------
Niveau 1 | Oswald | Normal | 30px | #333333
Niveau 2 | Oswald | Normal | 18px | #333333
Niveau 3 | Oswald | Normal | 24px | #333333

#### Desktop

Balise | Police | Graisse | Taille | Couleur
------------ | ------------- | ------------- | ------------- | -------------
Niveau 1 | Oswald | Normal | 40px | #333333
Niveau 2 | Oswald | Normal | 30px | #333333
Niveau 3 | Oswald | Normal | 18px | #333333


### Contenu éditorial - liste d’articles
Les listes d’articles sont des blocs s'affichant généralement sur une page non éditoriale mais peuvent aussi être présents dans une page contenant l’article complet. Ces blocs n’ont **pas de titre de niveau 1** (puisque ce titre est porté par la page) mais ont généralement un titre de rubrique servant de titre principal au bloc. Ces listes affichent bien sûr aussi les titres d’articles, mais ces titres peuvent parfois être des balises `<h2>`, parfois des `<p>`ou des `<span>`, en fonction des besoins SEO. Visuellement, ces titres d’articles sont plus neutre (pas de police particulière) <span style="color: red;">et peuvent avoir un corps variable en fonction de l’équilibre de la page</span>.

#### Mobile

Balise | Police | Graisse | Taille | Couleur
------------ | ------------- | ------------- | ------------- | -------------
Niveau 2 | Oswald | Normal | 18px | #333333
Titre d’article | Arial | <span style="color: red;">Bold</span> | <span style="color: red;">Variable</span> | #333333

#### Desktop

Balise | Police | Graisse | Taille | Couleur
------------ | ------------- | ------------- | ------------- | -------------
Niveau 2 | Oswald | Normal | 30px | #333333
Titre d’article | Arial | <span style="color: red;">Bold</span> | <span style="color: red;">Variable</span> | #333333


### Contenu éditorial - article complet
**Le contenu de chaque article** a des caractéristiques spécifiques. Les balises de titre doivent y être présentes afin de favoriser l’indexation du contenu éditorial du site par les moteurs. Ici, la relation entre le niveau de titre en HTML (h1…) et le niveau de titre visuel doivent être en accord.
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
