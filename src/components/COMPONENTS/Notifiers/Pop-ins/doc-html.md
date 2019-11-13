# Pop-ins / Pop-ins

SipaUI propose un type de pop-in standard et responsif.

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>


<div class="dependances">
																							
## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Veil**

</div>




## Mise en place

Les pop-ins doivent être déjà présentes dans le DOM (comme le voile) afin qu’il n’y ait pas de latence dans leur affichage. Elles sont donc masquées par défaut et il faudra un déclencheur pour les afficher. Ce déclencheur peut être activé par l’utilisateur (lien, bouton) ou par la page elle-même (réception d’un évènement serveur, minuteur…).

Afin de simplifier la gestion de la superposition des éléments sur la page, il est préférable que les pop-ins soient au premier niveau après le `<body>` (encore comme le voile).

Si plusieurs éléments (pop-ins ou autre) nécessitent un voile, un seul voile est utile dans le DOM. Il faudra juste lui associer tous les cas de fermeture.

Exemple d'arborescence de code pour 2 pop-ins incluses dans le DOM&nbsp;:

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
	<div class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-veil-ok","force":0}, {"sel":".pop-in-1","klass":"su-pop-in-ok","force":0}]'></div>
	<div class="su-pop-in pop-in-1">
		pop-in
		Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus.

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod.

Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus.
	</div>
	<p><a href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-ok","force":1}, {"sel":".pop-in-1","klass":"su-pop-in-ok","force":1}]'>Cliquez-moi</a> pour afficher la pop-in.</p>
</div>



<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-pop-in`
- `su-pop-in-ok`

### Classes annexes
- `su-veil` (dépendant du composant *Veil*)
- `su-veil-ok` (dépendant du composant *Veil*)


</div>
