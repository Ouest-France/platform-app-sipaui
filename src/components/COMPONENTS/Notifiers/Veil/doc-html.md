# Veil / Voile

SipaUI propose un voile pour tous les composants en ayant besoin (comme la pop-in).

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>


<div class="dependances">
																							
## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`)

</div>




## Mise en place

Le voile doit être déjà présent dans le DOM afin qu’il n’y ait pas de latence dans son affichage.

Afin de simplifier la gestion de la superposition des éléments sur la page, il est préférable que le voile soit au premier niveau après le `<body>`.

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
</div>```


## Exemple concret

### CSS

### JS


```html

```

<div class="sipaui">
	<div class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-veil-ok","force":0}]'></div>
	<p><a href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-ok","force":1}]'>Cliquez-moi</a> pour afficher le voile.</p>
</div>



<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-veil`
- `su-veil-ok`

</div>
