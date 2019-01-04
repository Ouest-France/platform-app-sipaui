# Errors / Erreurs

Ce composant détermine l’affichage des messages d’erreurs générées par l’utilisateur lors de la saisie d’information (par exemple dans un formulaire). Il est utile à plusieurs composants comme les champs de texte, les menus déroulants, les cases-à-cocher…


## États

Type | Illustration
------------ | ------------- |
**Pas d’erreur** | ![label__with-placeholder](design/error__no.png)<br />(rien n’est affiché, pas de place réservée.)
**Erreur** | ![label__disabled](design/error__yes.png)

## Spécifications

- Un message d’erreur doit guider l’utilisateur sur la manière de résoudre le problème.
- Il apparait sur une seule ligne.
- Tant que l’erreur n’est pas corrigée, il reste affiché. Sa disparition est conditionnée au type de formulaire&nbsp;:
	- Dans un formulaire standard, l’état d’erreur disparait suite à la soumission de l’ensemble de la page.
	- Dans un formulaire Ajax, chaque composant peut être auto-validé. Au mieux, l’état d’erreur disparait alors dès que l’utilisateur change de composant de saisie, et au plus tard, à la soumission de la page.
- Taille de caractère : 14px
- Line-height : 18px
- Graisse de caractère : regular
- Police du thème
- Couleur : #B40015
- Une icône d’erreur précède le message d’erreur
  - Couleur : #B40015
  - Title : error
- La position du message dépend du composant auquel il est associé.

NB&nbsp;: il est a noter qu’en général une erreur sur un composant, en plus d’afficher le message, change l’apparence visuelle du composant en erreur.
