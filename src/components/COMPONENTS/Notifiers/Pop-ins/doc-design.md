# Pop-ins / Pop-ins

- Les pop-ins sont des cadres qui surgissent sur les pages en cours de consultation.
- Les pop-ins sont :
  - **"Modal"** car le contenu de la page est désactivé jusqu'à une réponse de l'utilisateur.
  - **"Lightbox"** car l'arrière-plan est estompé.

## Usage

Les pop-ins répondent à 2 besoins :
- **Obtenir une petite quantité d'informations contextuelles** de l'utilisateur.
- **Fournir une simple information** à l'utilisateur. Ce dernier doit en prendre connaissance avant de pouvoir poursuivre sa navigation.

## Spécifications

### Arrière-plan

- L'arrière-plan permet d'attirer l'attention de l'utilisateur sur la pop-in en assombrissant **le reste de l'écran qui est inaccessible**. L'accès au reste de l'interface utilisateur est désactivé jusqu'à ce que la pop-in soit fermée.
- Un tape sur cet arrière-plan permet la fermeture de la pop-in.
- Il est présent sur tous les écrans.
- Sa couleur est #000000 avec une opacité de 60%.


### Container

- Le container **focalise l'attention de l'utilisateur**.
- Il est centré verticalement et horizontalement dans l'écran.
- La **hauteur** est celle du contenu + padding de 50px en haut et 30px en bas. Lorsque la croix est absente, le padding en haut du container est de 30px. La hauteur maximale du container est celle de l'arrière-plan moins 20px en haut et en bas.
- Sur mobile, sa **largeur** est celle de la grille moins ses marges externes, cf son doc design. Sur desktop, sa largeur est fixée à 620px et ses paddings sont de 40px.
- Sa couleur est #FFFFFF.

### Titre

- Un titre **complète le message ou la demande** sans les substituer. Il ne peut donc pas être présent dans une pop-in sans un message ou un autre composant.
- Il se situe 10px au-dessus de ces derniers.
- Le titre est un **contenu non éditorial de niveau 2**. Son doc design est disponible dans le composant Titles.
- La 1re lettre est en majuscule, le reste est en minuscule.
- Il est ferré à gauche.

### Message

- Le message est **décrit le contenu** de la pop-in.
- Son contenu est une brève déclaration ou une question.
- Il s'agit d'un **texte standard** ferré à gauche, cf son doc design.

### Bouton

- **Un bouton primaire est fortement conseillé** afin de présenter l'action principale.
- Un à deux boutons secondaires peuvent afficher d'autres actions.
- Leurs spécifications sont disponibles dans son doc design, particulièrement dans "Boutons d'un même sujet".
- Le bouton le plus haut se situe à 20px sous le contenu. Le plus bas est à 30px au-dessus du bord inférieur du container.
- Sur mobile, les boutons sont toujours **pleine largeur** (le container sans ses paddings).
- Lorsque les boutons sont stikies, les marges autour des boutons sont également stikies : 30px sauf au-dessus 10px.

### Croix

- La croix est un des moyen de **fermer la pop-in**.
- Elle est **facultative** mais recommandée.
- Son doc design est dans le composant Icons.
- Sa taille est 20x20px.
- Ses couleurs sont :
  - Par défaut #878787
  - En hover, focus et pressed #333333.
- La croix est au centre de la zone de tape :
  - Sa taille est 44x44px
  - Elle se situe à 5px en haut et à droite du bord du container.
- Par ailleurs, les pop-ins peuvent être fermées via :
  - Les boutons « Annuler » ou « Fermer » de la pop-in.
  - La croix de la pop-in.
  - L'arrière-plan de la pop-in.
  - Le bouton « Précédent » du système ou son raccourci.

### Barre de scroll

- Dans un cas exceptionnel, un scroll permet d'**afficher plus de contenu** et en respectant la hauteur maximale du container, cf tableau ci-dessus.
- Cependant, afficher une grande quantité de contenu n'est pas une bonne pratique ergonomique.
- Seuls le titre et le message sont scrollables.

### Autres éléments

- D'autres composants peuvent être utilisés : links, text fields, image, etc.

## Bonnes pratiques

### Usage

- Les pop-ins sont vivement conseillées pour confirmer définitivement un choix avant un engagement, de sorte que l'utilisateur ait la possibilité de changer d’avis si nécessaire.
- Elles interrompent les utilisateurs. C'est pourquoi, **elles doivent être utilisés avec parcimonie.** Leur rareté permet également d'être pris au sérieux par les utilisateurs.
- Leur ouverture est **problématique pour l'accessibilité** lorsqu'elles ne peuvent pas être anticipées par l'utilisateur et elles sont difficilement détectables par les lecteurs d'écran.
- Ne pas afficher plusieurs pop-ins les unes après les autres car elles ajoutent une complexité.
- Les tunnels dans les pop-ins sont à proscrire.
- **Les pop-ins ne sont pas appropriées pour les tâches riches** en plusieurs étapes. Cette complexité justifie une ou plusieurs pages dédiées.
- Evitez les contenus trop importants et le scroll dans les pop-ins.
- Ne jamais afficher de pop-ins dans certains contextes :
  - **Avant le chargement d'une page.** L'objectif est ne pas interrompe l'utilisateur avant même de prendre connaissance de la page. De plus, Google pénalise se type de pratique.
  - **Juste après la connexion.** La pop-in serait tout aussi intrusif et la connexion est une étape dans un parcours.
  - **Lors d'une tâche critique.** Les utilisateurs détestent être interrompus. La pop-in peut s'afficher une fois la tâche terminée.


### Titre

- Le titre se limite à une seule ligne, même sur mobile.
- Evitez de terminer le titre par un point.

### Message

- Le message doit être direct et dédié à la réalisation d'une seule tâche.
- Les mots, les expressions et les concepts doivent être familiers pour l'utilisateur.
- Choisissez un wording impactant pour l'utilisateur.

### Boutons

- Privilégiez les wordings clairs et **directs**, ex : "Voulez-vous supprimer définitivement tous ces articles ?" "Supprimer" au lieu d'un simple "Oui".
- Evitez les boutons de type " En savoir plus " ou des liens qui quittent la pop-in.

![pop-in_mobile](Design/mobile.png)

![pop-in_desktop](Design/tablet-desktop.png)