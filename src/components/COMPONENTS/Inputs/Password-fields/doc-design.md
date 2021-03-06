# Password fields / Champs mot de passe

Les champs mot de passe sont des **champs de texte où les caractères sont utilisés comme moyens d'authentification.** L'objectif est de prouver l'identité de l'utilisateur lorsqu'il désire accéder à un service dont l'accès est limité et/ou protégé.

## Usage

- Un champ mot de passe se trouve généralement dans un formulaire de **connexion** ou de **création de compte.**

## Spécifications

- Le champ mot de passe présente toutes les caractéristiques d’un champ de texte : interaction, police, hauteur, etc. Elles sont disponibles dans son doc design.

### Lors d'une connexion

Type | Illustration
------------ | -------------
**Enabled** |![password__enabled](components/COMPONENTS/Inputs/Password-fields/design/password__enabled.png)
**Focus** |![password__focus](components/COMPONENTS/Inputs/Password-fields/design/password__focus.png)
**1er caracrère saisi** |![password__focus-first-character](components/COMPONENTS/Inputs/Password-fields/design/password__focus-first-character.png)
**Champ visible, en focus** |![password__focus-visible](components/COMPONENTS/Inputs/Password-fields/design/password__focus-visible.png)
**Perte de focus, champ non visible** |![password__value-secret](components/COMPONENTS/Inputs/Password-fields/design/password__value-secret.png)
**Error, absence de saisie** | ![password__error](components/COMPONENTS/Inputs/Password-fields/design/password__error.png)
**Disabled** | ![password__disabled](components/COMPONENTS/Inputs/Password-fields/design/password__disabled.png)


### Lors de la création d'un compte

Type | Illustration
------------ | -------------
**Enabled** |![password__enabled](components/COMPONENTS/Inputs/Password-fields/design/password__enabled.png)
**Focus** |![password__focus__with-indications](components/COMPONENTS/Inputs/Password-fields/design/password__focus__with-indications.png)
**1er caractère saisi** | ![password__focus-first-character__with-indications](components/COMPONENTS/Inputs/Password-fields/design/password__focus-first-character__with-indications.png)
**Champ visible, en focus** | ![password__focus-visible-registration.png](components/COMPONENTS/Inputs/Password-fields/design/password__focus-visible-registration.png)
**Suite à la validation du formulaire, champ non visible** non à jour |![password__error__with-indications](components/COMPONENTS/Inputs/Password-fields/design/password__error__with-indications.png)


## Visibilité

- La visibilité du mot de passe permet de réduire les erreurs.
- Par défaut, les **caractères sont masqués** et saisis en toute discrétion et sécurité. Des ellipses ou des astérisques, selon le système d'exploitation sont affichées pour représenter chaque caractère du mot de passe saisi.
- **Les icônes “voir” et “masquer” sont visibles lorsque au moins un caractère est saisi.**
- Ces icônes ont les caractéristiques d’une icône d’un composant champ de texte, cf son doc design.
- Sans action de la part de l'utilisateur sur l'un d'entre eux, leur affichage reste constant. Suite à la validation du formulaire, l'état de visibilité est identique.

### Icône “voir”

- Cette icône permet d'afficher les caractères saisis.
- Elle est aussi visible suite à un tape sur l'icône "masquer".
- Elle disparaît suite à un tape sur elle-même.
- Sa couleur est #878787.

### Icône "masquer"

- Cette icône permet de ne plus rendre visible les caractères saisis en affichant des symboles.
- Elle apparaît suite à un tape sur l'icône “voir”.
- Elle disparaît suite à un tape sur elle-même.
- Sa couleur est #333333.

## Règles de conformité

- Elles informent l'utilisateur des consignes obligatoires.
- Ces règles apparaissent uniquement dans un formulaire de création d'un compte et dès que le champ mot de passe est en focus.
- Puis, les règles restent affichées : perte de focus, retour du formulaire ko...
- Chaque règle se valide dès que le caractère saisi le permet.
- Elles s'affichent 10px sous le champ mot de passe ou le message d'erreur.
- Une règle est définie comme ko seulement après la validation de l'ensemble du formulaire.

Nature | Illustration | Couleur
------------ | ------------- |------------ |
**Information** | ![password__indication-rule__default](components/COMPONENTS/Inputs/Password-fields/design/password__indication-rule__default.png) | #666666
**Ok** | ![password__indication-rule__ok](components/COMPONENTS/Inputs/Password-fields/design/password__indication-rule__ok.png) | #3AAA35
**Ko** | ![password__indication-rule__ko](components/COMPONENTS/Inputs/Password-fields/design/password__indication-rule__ko.png) | #B40015

## Gestion des erreurs

- Le contrôle du mot de passe s’effectue **suite à la validation de l'ensemble de la page**.

### Message d'erreur

- Ces spécifications sont disponibles dans le doc design du composant error.
- Chaque message d’erreur guide l'utilisateur afin de résoudre le problème.

#### Lors d'une connexion

- Lorsqu'aucun caractère n'est renseigné, le message est : " Veuillez renseigner votre mot de passe."

#### Lors d'une inscription
- Liste de messages d’erreur possibles :
  - " Ce mot de passe n'est pas conforme aux exigences minimales. " (Toutes les règles de conformité ne sont pas validées)
  - " Votre mot de passe doit contenir moins de 16 caractères. "
  - " Votre mot de passe ne doit pas contenir de caractères accentués, ex : À, é, ï . "
  - " Votre mot de passe ne doit pas contenir votre e-mail. "
- Les messages d'erreurs sont cumulables.

## Bonnes pratiques

- L'enregistrement et la saisie automatique facilitent l'usage.
- Autoriser les copier / coller lors de la connexion et création de mot de passe.
- Les caractères de retour chariot ne sont pas autorisés. Ils ne sont pas pris en compte lors de la saisie.
