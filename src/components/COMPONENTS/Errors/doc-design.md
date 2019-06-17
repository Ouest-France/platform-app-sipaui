# Errors / Erreurs

Ce composant détermine l’affichage des messages d’erreurs générées par l’utilisateur lors de la saisie d’information, par exemple dans un formulaire. Il est utile à plusieurs composants comme les champs de texte, les menus déroulants, les cases-à-cocher, etc.


## États

Type | Illustration
------------ | ------------- |
**Pas d’erreur** | ![label__with-placeholder](components/COMPONENTS/Errors/design/error__no.png)<br />(absence de message, aucune place réservée.)
**Erreur** | ![label__disabled](components/COMPONENTS/Errors/design/error__yes.png)

## Spécifications

- Un message d’erreur doit **guider l’utilisateur sur la manière de résoudre le problème.**
- Il apparait sur une seule ligne.
- Tant que l’erreur n’est pas corrigée, il reste affiché. Sa disparition est conditionnée au type de formulaire&nbsp;:
	- Dans un formulaire standard, l’état d’erreur disparait suite à la soumission de l’ensemble du formulaire.
	- Dans un formulaire Ajax, chaque composant peut être auto-validé. L’état d’erreur disparait soit lors de la perte de focus du composant soit à la soumission du formulaire.
- Taille de caractère : 14px
- Line-height : 18px
- Graisse de caractère : regular
- Police du thème
- Couleur : #B40015
- La position du message dépend du composant auquel il est associé. Dans la plus part des cas, il s'affiche 5px sous celui-ci.

NB&nbsp;: Généralement, l’apparence visuelle du composant en erreur change.
