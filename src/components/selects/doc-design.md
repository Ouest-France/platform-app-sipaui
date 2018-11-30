# Selects/Menu déroulant

Les selects permettent à l’utilisateur de sélectionner une option dans une liste.


## Usage

Un select permet d’afficher un nombre illimité d'options dans une liste déroulante. L’utilisateur peut choisir une seule des options parmi cette liste.
Il empêche les utilisateurs de saisir des données erronées et il permet d'économiser quelques frappes.
On le trouve généralement dans un formulaire.

## Spécifications

→ Un tableau, Type

Default

With default value

Focus

Scroll

Error

Disabled (ex : lors de l’inscription, choix ville qd pas encore de mot de passe) 40%


## 2- États

Type | Class | Declinaison 1 | Declinaison 2 | Remarque
------------ | ------------- | ------------- | ------------- | ------------- |
**etat 1** | classes | exemple | exemple | description
**etat 2** | classes | exemple | exemple | description
**etat 3** | classes | exemple | exemple | description


## 3- Spécifications

- specification 1
- specification 2
- specification 3

### Gestion des erreurs

- specification 1
- specification 2
- specification 3


## 4- Bonnes pratiques

- Si le nombre d’options est inférieure à 3, utiliser un bouton radio. définir le choix de l’un ou l’autre ???
- Eviter les très longues listes nécessitant un scroll car elles empêchent les utilisateurs de voir tous leurs choix en un coup d'œil.
- Pour une quantité, le choix d’une année, utiliser un text field standard plutôt qu’un select. La saisie est plus rapide. ?
- Suite à la saisie d’un code postal, ne pas utiliser un sélect pour une liste de ville (lié à la fusion des communes).
- Il est fortement recommandé de ne pas styler les selects pour des raisons d'accessibilité.
- Le select est pris en charge par un clavier.


## 5- Autres composants

- Select avec une sélection multiple
- Select avec un champ de recherche
- Datepicker
