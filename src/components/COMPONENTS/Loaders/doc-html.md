# Loaders / Chargeurs

SipaUI propose comme indicateur de chargement un *spinner*. À ce jour, il n’existe que le loader de page ou de bloc.

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>


<div class="dependances">
																							
## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`)

</div>




## Chargeur de page

### Le composant seul
Un simple `<div>` avec la classe `su-loader`.
```html
<div class="su-loader">
</div>
```

<div class="sipaui">
	<div class="su-loader">
	</div>
</div>
	

### Le composant dans un bloc
Le loader est affiché avec un voile blanc et est positionné en *absolute* afin qu'il prenne toute la taille du bloc (qui doit être en *relative*). Il doit être inclus dans un `<div>` comportant la classe `su-bloc-loader` qui a un z-index de 10000.
```html
<div class="su-bloc-loader">
	<div class="su-loader">
	</div>
</div>
```

<div class="sipaui">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	<div class="su-bloc-loader">
		<div class="su-loader">
		</div>
	</div>
</div>

### Le composant dans une page
Le loader est affiché avec un voile blanc et est positionné en *fixed*. Il sera donc affiché par dessus toute la page et ne sera pas sensible au scroll (attention, la page derrière reste scrollable). Il doit être inclus dans un `<div>` comportant la classe `su-page-loader` qui a un z-index de 10000.
```html
<div class="su-page-loader">
	<div class="su-loader">
	</div>
</div>
```

<div class="sipaui">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	<div id="page-loader" class="su-page-loader su-hidden">
		<div class="su-loader">
		</div>
	</div>
	<button class="su-button su-primary su-small" data-sutoggleclass='{"sel":"#page-loader","klass":"su-hidden"}'>Afficher</button>
</div>


<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-loader`
- `su-bloc-loader`
- `su-page-loader`

</div>
