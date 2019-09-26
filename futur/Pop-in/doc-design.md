# Pop-ins / Pop-ins

- Les pop-ins sont des cadres qui surgissent sur la page web consultée par l’utilisateur.
- Les pop-ins sont :
  - **"Modal"** car le contenu de la page est désactivé jusqu'à une réponse de l'utilisateur.
  - **"Lightbox"** car l'arrière-plan est estompé.

## Usage

Les pop-ins permettrent 2 utilisations :
- **Obtenir une petite quantité d'informations contextuelles** de l'utilisateur.
-  **Fournir une simple information à l'utilisateur**. Ce dernier doit en prendre connaissance avant de pouvoir poursuivre sa navigation.

## Spécifications

### Arrière-plan

- L'arrière-plan permet d'attirer l'attention de l'utilisateur sur la pop-in en assombrissant **le reste de l'écran qui est inaccessible**. L'accès au reste de l'interface utilisateur est désactivé jusqu'à ce que la pop-in soit fermée.
- Un tape sur cet arrière-plan permet la fermeture de la pop-in.
- Il est **obligatoire** sur tous les écrans.
- Couleur : #33333
- Opacité : 60%


### Container

- Le container **focalise l'attention de l'utilisateur**.
- Il est centré verticalement et horizontalement dans l'écran.

Spécifications | Mobile | Desktop
------------ | ------------- | ------------- |
Hauteur | minimum ?px ou contenu + padding en haut de 40px et en bas de 30px | minimum ?px ou contenu + padding en haut de 60px et en bas de 60px
Largeur | celle de la grille sans ses marges | ? colonnes de la grille | ? colonnes de la grille
Couleur | #FFFFFF | #FFFFFF | #FFFFFF

### Titre

- Un titre **complète le message ou la demande** sans les substituer.
- Il est **facultatif**.
- Un titre ne peut pas être présent dans une pop-in sans tout autre élément tel qu'un message ou un composant input de formulaire.
- La 1re lettre est en majuscule, le reste est en minuscule.
- Il est ferré à gauche.
- Paddings :
  - 30px sur mobile
  - 60px sur desktop.
- Le titre est un **contenu non editorial de niveau 2**. Son doc design est disponible dans le composant Titles.

### Message

- Le message est **décrit le contenu** de la pop-in.
- Son contenu est **une brève déclaration ou une question**.
- Il s'agit d'un **texte standard** ferré à gauche, cf son doc design.
- Ce texte se situe à 10px du titre.

### Bouton

- Un à trois boutons présentent les actions possibles.
- **Les spécifications sont disponibles dans le doc design, particulièrement dans "Boutons d'un même sujet".**
- Sur mobile, le ou les boutons sont toujours **pleine largeur** et se situe à ? px sous le contenu de la pop-in. ?
- Sur desktop, les boutons se situent en bas à droite de la pop-in : ?px sous le contenu et à 60px à droite du bord droit du container. ?

#### Bouton primaire

- **Un bouton primaire est toujours présent** afin de présenter l'action principale de l'utilisateur.

#### Bouton secondaire

- Un à deux boutons secondaires peuvent être affichés.

### Croix

- La croix est un des moyen de fermer la pop-in.
- Elle est **facultative** mais recommandée.
- L’icône est stiky et située avec une marge en haut à droite et en haut à gauche de 10px.
- Taille et zone de tape : 20x20px
- Couleur : #666666
- Elle se situe à 10px en haut et à droite du bord du container.
- Par ailleurs, les pop-ins peuvent être fermés via :
  - Les boutons « Annuler » ou « Fermer » de la pop-in.
  - La croix de la pop-in.
  - L'arrière-plan de la pop-in.
  - Le bouton « Précédent » du système ou son raccourci.


### Barre de scroll

- Lorsqu'une pop-in contient beaucoup de contenu, un scroll permet de voir l'ensemble de l'information.
Image 3

### Autres éléments

- D'aurtres composants peuvent être utilisés : links, checkboxes, text fields, etc.
- Des images ou des vidéos peuvent être présentes.

## Bonnes pratiques

### Usage

- Les pop-ins sont vivement conseillées pour confirmer définitivement un choix avant un engagement, de sorte que l'utilisateur ait la possibilité de changer d’avis si nécessaire.
- Elles interrompent les utilisateurs. C'est pourquoi, **elles doivent être utilisés avec parcimonie.** Leur rareté permet également d'être pris au sérieux par les utilisateurs.
- Leur ouverture est **problématique pour l'accessibilité** lorsqu'elles ne peuvent pas être anticipées par l'utilisateur et elles sont difficilement détectables par les lecteurs d'écran.
- **Ne pas afficher plusieurs pop-ins les unes après les autres** car elles ajoutent une complexité. Les tunnels dans les pop-ins sont à proscrire.
- **Les pop-ins ne sont pas appropriées pour les tâches riches** en plusieurs étapes. Cette complexité justifie une ou plusieurs pages dédiées.
- Evitez les contenus trop importants et le scroll dans les pop-ins.
- Ne jamais afficher de pop-ins dans certains contextes :
  - **Avant le chargement d'une page.** L'objectif est ne pas interrompe l'utilisateur avant même de prendre connaissance de la page. De plus, Google pénalise se type de pratique.
  - **Juste après la connexion.** La pop-in serait tout aussi intrusif et la connexion est une étape dans un parcours.
  - **Lors d'une tâche critique.** Les utilisateurs détestent être interrompus. La pop-in peut s'afficher une fois la tâche terminée.


### Titre

- Dans la mesure du possible, le titre se limite à une seule ligne, même sur mobile.
- Evitez de terminer le titre par un point.

### Message

- Le message doit être direct et dédié à la réalisation d'une seule tâche.
- Les mots, les expressions et les concepts doivent être familiers à l'utilisateur.
- Choisissez un wording impactant pour l'utilisateur.

Image 4 et 5

### Boutons

 - Evitez les boutons de type " En savoir plus " ou des liens qui quittent la pop-in.
