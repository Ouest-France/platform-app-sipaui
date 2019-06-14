# Password fields / champs mot de passe

Les champs mot de passe sont des **champs de texte où les caractères sont utilisés comme moyens d'authentification.** L'objectif est de prouver l'identité de l'utilisateur lorsqu'il désire accéder à un service dont l'accès est limité et/ou protégé.

## Usage

- Un champ mot de passe se trouve généralement lors d’une **connexion** ou d’une **création de compte.**
- Par défaut, les **caractères sont masqués** et saisis en toute discrétion et sécurité.

## Spécifications

Le champ mot de passe présente toutes les caractéristiques d’un champ de texte : interaction, police, hauteur, etc. Elles sont disponibles dans son doc design.

-> changer le nom des images
### Lors d'une connexion

Type | Illustration |
------------ | ------------- |
**Enabled** |![password__enabled](components/COMPONENTS/Password-fields/design/password__enabled.png) |
**Focus** | ![password__focus](components/COMPONENTS/Password-fields/design/password__focus.png) "oeil non symétrique" |
**1er caractère saisi** | image |
**Champ visible** | ![password__value-visible](components/COMPONENTS/Password-fields/design/password__value-visible.png) |
**Sans focus, mot de passe visible** |![password__value-secret-after-validation](components/COMPONENTS/Password-fields/design/password__value-visible.png) |
**Sans focus, mot de passe invisible** |![password__value-secret-after-validation](components/COMPONENTS/Password-fields/design/password__value-secret-after-validation.png)"non fichier" |
**Error, absence de saisie** | ![password__error](components/COMPONENTS/Password-fields/design/password__error.png) |
**Disabled** | ![password__disabled](components/COMPONENTS/Password-fields/design/password__disabled.png) |


### Lors de la création d'un compte

Type | Illustration
------------ | ------------- |
**Enabled** |![password__enabled](components/COMPONENTS/Password-fields/design/password__enabled.png) |
**Focus** | ![password__focus-2](components/COMPONENTS/Password-fields/design/password__focus-2.png) "oeil non symétrique" |
**Saisie** | ![password__focus-first-character](components/COMPONENTS/Password-fields/design/password__focus-first-character.png) "check + oeil" |
**Champ visible** | ![password__focus-visible](components/COMPONENTS/Password-fields/design/password__focus-visible.png) pb ! |
**Sans focus, mot de passe visible** |![password__value-secret-after-validation](components/COMPONENTS/Password-fields/design/password__value-visible.png) |
**Sans focus, mot de passe invisible** |![password__value-secret-after-validation](components/COMPONENTS/Password-fields/design/password__value-secret-after-validation.png)"non fichier" |
**Error** | ![password__error-after-validation](components/COMPONENTS/Password-fields/design/password__error-after-validation.png) " icone + marges" |
**Disabled** |![password__disabled](components/COMPONENTS/Password-fields/design/password__disabled.png) |


## Visibilité

- La visibilité du mot de passe permet de réduire les erreurs.
- La saisie du mot de passe est masquée par défaut. Des ellipses ou des astérisques, selon le système d'exploitation sont affichées pour représenter chaque caractère du mot de passe saisi.
- Les icônes “voir” et “masquer” ont les caractéristiques d’une icône d’un composant champ de texte.
- Sans action de la part de l'utilisateur sur l'un d'entre eux, leur affichage reste constant. Alors, l'état de visibilité est identique suite à la validation du formulaire.

### Icône “voir”

- Cette icône permet d'afficher les caractères saisis.
- **Elle est visible lorsque le container du champ de texte est en focus.**  Elle peut aussi être présente suite à un tape sur l'icône "masquer".
- Elle disparaît suite à un tape sur elle-même.
- Sa couleur est #878787.

### Icône "masquer"

- Cette icône permet de ne plus rendre visibles les caractères saisis en affichant des symboles.
- Elle apparaît suite à un tape sur l'icône “voir”.
- Elle disparaît suite à un tape sur elle-même.
- Sa couleur est #333333.

## Règles de conformité

- Elles informent l'utilisateur des consignes obligatoires.
- Ces règles sont **présentes lors la saisie du mot de passe** pour la création d'un compte. Le champ "Mot de passe" est en focus.
- Ces règles sont également affichées suite validation du formulaire ko.
- Chaque règle se valide dès que la saisie le permet.
- Elles s'affichent 10px sous le champ mot de passe ou le message d'erreur.
- Une règle est définie comme ko seulement après la validation du formulaire.

Nature | Illustration | Couleur
------------ | ------------- |------------ |
**Information** | image | #666666 |
**Ok** | image | #3AAA35 |
**Ko** | ![password__indication-rule__ko](components/COMPONENTS/Password-fields/design/password__indication-rule__ko.png) | #B40015 |

## Gestion des erreurs

- Le contrôle s’effectue **suite à la validation de l'ensemble de la page**.

### Message d'erreur

- Ces spécifications sont disponibles dans le doc design du composant Error.
- Chaque message d’erreur guide l'utilisateur afin de résoudre le problème.

#### Lors d'une connexion

- Lorsqu'aucun mot de passe n'est renseigné, le message est : " Veuillez renseigner votre mot de passe."
- Lorsqu'un des champs du formulaire ne permet pas la connexion, il est necessaire de ne pas informer l'utiliateur quel champ est ko. C'est pourquoi, le message d'erreur n'est pas précisé sous le champ mot de passe.

#### Lors d'une inscription
- Liste de messages d’erreur possibles :
  - " Ce mot de passe n'est pas conforme aux exigences minimales. " (Toutes les règles de conformité ne sont pas validées)
  - " Votre mot de passe doit contenir moins de 16 caractères. "
  - " Votre mot de passe ne doit pas contenir de caractères accentués, ex : À, é, ï . "
  - " Votre mot de passe ne doit pas être identique à votre e-mail. "
- Ces messages d'erreurs sont cumulables.

!!!image!! lors de l'inscription 2 images Avant et Après validation Lors de la création du mot de passe les règlès non respectées s'affiche en rouge.


## Bonnes pratiques

- L'enregistrement et la saisie automatique de mot de passe facilitent l'usage.
- Autoriser les copier / coller lors de la connexion et création de mot de passe.
- Les caractères de retour chariot ne sont pas autorisés. Ils ne sont pas pris en compte lors de la saisie.
