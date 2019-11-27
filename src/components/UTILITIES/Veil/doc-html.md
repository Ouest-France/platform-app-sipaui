# Veil / Voile

SipaUI propose un voile pour tous les composants en ayant besoin (comme la pop-in).

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>


<div class="dependances">
																							
## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`)
- composant **Helpers**

</div>




## Mise en place

Le voile doit être déjà présent dans le DOM afin qu’il n’y ait pas de latence dans son affichage.

Au choix, vous pouvez utiliser un voile sur toute la page pour l’ensemble des composants qui en ont besoin, ou créer un voile par composant. Si vous maîtrisez l’ensemble de la page, choisissez plutôt un voile unique pour alléger la page (il faudra alors juste lui associer tous les cas de fermeture). Si vous ne créez qu’un bloc qui doit s’inscrire dans une page que vous ne maîtrisez pas, intégrez le voile dans votre bloc, quitte à ce qu’il y en ait plusieurs sur la page.


## Exemple concret


### Apparence

Pour créer un voile directement à la bonne apparence, il suffit de mettre un `<div>` avec la classe `.su-veil`. Le voile sera invisible par défaut.

### Déclenchement

Pour déclencher l’apparition du voile, il faut utiliser ce code&nbsp;: `data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":1}, {"sel":"#veil-1","klass":"su-veil-in","force":1}]'` sur le déclencheur. Il positionnera la classe `su-no-scroll` sur le `<body>` (pour empêcher le scroll tant que le voile est visible) et la classe `su-veil-in`sur le voile pour l’afficher. Le paramètre `"#veil-1"` du sélecteur `"sel"` est l’ID de votre voile. Donnez-lui un nom qui ne risque pas d’être utilisé par ailleurs…

### Fermeture
Pour fermer le voile au tape&nbsp;/ clic sur celui-ci, il faut mettre `{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-1","klass":"su-veil-in","force":0}` sur le `<div>` du voile.

### Code

```html
<body class="sipaui">
	<div class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":0}]'></div>
	<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":1}]'>Afficher le voile</a>
</body>
```

<div class="sipaui">
	<div id="veil-1" class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-1","klass":"su-veil-in","force":0}]'></div>
	<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":1}, {"sel":"#veil-1","klass":"su-veil-in","force":1}]'>Afficher le voile</a>
</div>


<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-veil`
- `su-veil-in` (posée automatiquement par le JS)


### Classes annexes
- `su-no-scroll` (posée automatiquement par le JS, dépendant du composant *Helpers*)

</div>
