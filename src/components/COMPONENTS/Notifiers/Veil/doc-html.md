# Veil / Voile

SipaUI propose un voile pour tous les composants en ayant besoin (comme la pop-in).

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>


<div class="dependances">
																							
## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`)

</div>




## Mise en place

Le voile doit être déjà présent dans le DOM afin qu’il n’y ait pas de latence dans son affichage.

Pour simplifier la gestion de la superposition des éléments sur la page, il est préférable que le voile soit au premier niveau après le `<body>`.

Si plusieurs éléments (pop-ins ou autre) nécessitent un voile, un seul voile est utile dans le DOM. Il faudra juste lui associer tous les cas de fermeture.

Exemple d'arborescence de code pour le voile accompagnant 2 pop-ins &nbsp;:

```html
<body class="sipaui">
	<div class="su-veil"></div>
	<div class="su-pop-in pop-in-1"></div>
	<div class="su-pop-in pop-in-2"></div>
	<main>
		Mon contenu
	</main>
</body>```


## Exemple concret


### Apparence

Pour créer un voile directement à la bonne apparence, il suffit de mettre un `<div>` avec la classe `.su-veil`. Le voile sera invisible par défaut.

### Déclenchement

Pour déclencher l’apparition du voile, il faut utiliser ce code&nbsp;: `data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":1}]'` sur le déclencheur. Il positionnera la classe `su-veil-in`sur le voile.

### Fermeture
Pour fermer le voile au tape&nbsp;/ clic sur celui-ci, il faut mettre `data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":0}]'` sur le `<div>` du voile.

### Code

```html
<body class="sipaui">
	<div class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":0}]'></div>
	<p><a href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":1}]'>Cliquez-moi</a> pour afficher le voile.</p>
</body>
```

<div class="sipaui">
	<div class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":0}]'></div>
	<p><a href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":1}]'>Cliquez-moi</a> pour afficher le voile.</p>
</div>


<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-veil`
- `su-veil-in`

</div>
