# Selects / Listes déroulantes

Les selects permettent à l’utilisateur de sélectionner une option dans une liste.


## Usage

- Un select permet d’**afficher un nombre illimité d’options dans une liste déroulante**. L’utilisateur peut **choisir une seule des options** parmi cette liste.
- Il empêche les utilisateurs de saisir des données erronées et il permet d’économiser quelques frappes.
- On le trouve généralement dans un formulaire.

## États

Type | Illustration
------------ | ------------- |
**Enabled** | ![select__enabled](components/COMPONENTS/Inputs/Selects/design/select__enabled.png)
**With default value** |![select__with-default-value](components/COMPONENTS/Inputs/Selects/design/select__with-default-value.png)
**With placeholder** |![select__with-placeholder](components/COMPONENTS/Inputs/Selects/design/select__with-placeholder.png)
**Focus** |![select__focus](components/COMPONENTS/Inputs/Selects/design/select__focus.png)
**Error** |![select__error](components/COMPONENTS/Inputs/Selects/design/select__error.png)
**Disabled** |![select__disabled](components/COMPONENTS/Inputs/Selects/design/select__disabled.png)

## Spécifications

### Label

- Le composant "Label" indique le type d’information demandée sous celui-ci.
- Ses spécifications sont disponibles dans son doc design.
- Il est facultatif.
- En son absence, un pseudo-placeholder est nécessaire.

### Container

- Le container est identique à celui du champ de texte.

### Texte

- Le texte présente les caractéristiques du champ de texte.
- Une option peut être mise par défaut si elle est quasiment sûre d’être choisie.

### Pseudo-placeholder
- Le pseudo-placeholder permet de guider l’action de l’utilisateur.
- Il a les caractéristiques du placeholder du champ texte.
- Ce n’est pas un attribut HTML (d’où son qualificatif de «&nbsp;pseudo&nbsp;»). Cependant, il est possible de le simuler .
- Il est facultatif.
- En son absence, un label est nécessaire.

<div class="do-dont">
<div class="do">

![select__ex__default](components/COMPONENTS/Inputs/Selects/design/select__ex__default.png) |
------------ |
**Do**
<p class="legende">Par exemple, "Choisissez" insite l’utilisateur à ouvrir le champ.</p> |

 </div>
 </div>


### Icône

- L’icône comporte également les caractéristiques du champ de texte.
- La seule icône possible est un chevron. Il indique qu’une liste est disponible.


### Liste

- La liste permet de présenter différentes options.
- **Elle s’affiche de manière native**. La hauteur, le scroll, etc. sont définis selon chaque navigateur.
- Chaque élément est normé :
  - La 1re lettre du texte est en majuscule, le reste est en minuscule.
  - Le contenu se limite à un seule ligne.
  - L’ordre est établi de manière logique : dans un ordre croissant ou selon la fréquence d’utilisation, etc.


  <div class="do-dont">
  <div class="do">

  ![select__exemples__focus-ios](components/COMPONENTS/Inputs/Selects/design/select__exemples__focus-ios.png) |
  ------------ |
  **Do**
  <p class="legende">L’ordre alphabétique est souvent le plus approprié.</p> |

   </div>
   </div>


- L’élément sélectionné remplace la value par défaut.

## Cas spécifique

### Select, hauteur 34px

- Par défaut, la hauteur d’un select est celle du text field : 44px. Cependant, un select de **34px** de haut peut être utilisé dans des cas spécifiques et principalement sur **Desktop**.
- La value et le placeholder sont de **14px**.


Type | Illustration
------------ | ------------- |
**Enabled** |![select__small__enabled](components/COMPONENTS/Inputs/Selects/design/select__small__enabled.png)
**With default value** |![select__small__with-default-value](components/COMPONENTS/Inputs/Selects/design/select__small__with-default-value.png)
**With placeholder** |![select__small__with-placeholder](components/COMPONENTS/Inputs/Selects/design/select__small__with-placeholder.png)
**Focus** |![select__small__focus](components/COMPONENTS/Inputs/Selects/design/select__small__focus.png)
**Error** |![select__small__error](components/COMPONENTS/Inputs/Selects/design/select__small__error.png)
**Disabled** |![select__small__disabled](components/COMPONENTS/Inputs/Selects/design/select__small__disabled.png)

## Gestion des erreurs

- Les erreurs sont traitées comme celles du champ de texte.
- Si le champ est obligatoire, il est défini comme ko lorsqu’aucun choix n’a été fait.


  <div class="do-dont">
  <div class="do">

  ![select__exemples__error](components/COMPONENTS/Inputs/Selects/design/select__exemples__error.png) |
  ------------ |
  **Do** <br/> Dans le cas d’un select obligatoire, le message d’erreur demande de renseigner le champ.

   </div>
   </div>

## Bonnes pratiques

- Si le nombre d’options est inférieur ou égale à 3, utiliser un bouton radio.
- Eviter les très longues listes nécessitant un scroll car les utilisateurs ne peuvent voir tous les choix en un coup d’œil.
- Pour une quantité, le choix d’une année, utiliser un text field standard plutôt qu’un select car la saisie est plus rapide.
- Lors de la saisie d’une ville, ne pas utiliser un select. En France, la liste des communes évolue régulièrement et cette liste est difficilement mise à jour.
- Il est fortement recommandé de ne pas styler la liste d’options des selects pour des raisons d’accessibilité.
- Le select est pris en charge par un clavier.
