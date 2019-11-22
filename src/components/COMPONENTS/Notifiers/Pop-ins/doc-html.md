# Pop-ins / Pop-ins

SipaUI propose un type de pop-in standard et responsif.

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>


<div class="dependances">
																							
## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Veil**
- composant **Titles**
- composant **Buttons**

</div>




## Mise en place

Les pop-ins doivent être déjà présentes dans le DOM (comme le voile) afin qu’il n’y ait pas de latence dans leur affichage. Elles sont donc masquées par défaut et il faudra un déclencheur pour les afficher. Ce déclencheur peut être activé par l’utilisateur (lien, bouton) ou par la page elle-même (réception d’un évènement serveur, minuteur…).

Afin de simplifier la gestion de la superposition des éléments sur la page, il est préférable que les pop-ins soient au premier niveau après le `<body>` (encore comme le voile).

Si plusieurs éléments (pop-ins ou autres) nécessitent un voile, un seul voile est utile dans le DOM. Il faudra juste lui associer tous les cas de fermeture.

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


## Popin simple

### Apparence

Pour créer une pop-in, il faut un `<div>`  avec la classe `.su-pop-in`. Elle sera invisible par défaut.

Une popin simple ne donne qu'un court message avec validation de lecture. Elle ne comportera donc qu'un seul bouton.

### Déclenchement

Pour déclencher l’apparition de la pop-in (ainsi que du voile), il faut utiliser ce code&nbsp;: `data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":1}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":1}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":0]'` sur le déclencheur. Pour la pop-in il ajoutera la classe `su-pop-in-in` et enlèvera la classe `su-pop-in-out` si elle est déjà là. L’attribut `"#pop-in-1"` du sélecteur `"sel"` est l'ID spécifique de votre popin.

### Fermeture
Pour fermer la pop-in (et le voile) il faut utiliser `data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":1}]` sur le bouton primaire, ainsi que sur le `<div>` du voile.

### Code


```html
<!-- Voile -->
<div class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":1}]'></div>
<!-- Pop-in -->
<div class="su-pop-in pop-in-1">
	<p>Message d’information. Vestibulum id ligula porta felis euismod semper.</p>
	<div class="su-buttons-area">
		<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":1}]'>Valider</a>
	</div>
</div>
<!-- Déclencheur -->
<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":1}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":1}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":0}]'>Afficher la pop-in</a>
```

<div class="sipaui">
	<div class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":1}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":1}]'></div>
	<div id="pop-in-1" class="su-pop-in">
		<p>Message d’information. Vestibulum id ligula porta felis euismod semper.</p>
		<div class="su-buttons-area">
			<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":1}]'>Valider</a>
		</div>
	</div>
	<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":1}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":1}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":0}]'>Afficher la pop-in</a>
</div>


## Popin avec titre et 2 choix

Pour cette pop-in, en plus de la pop-in simple, on utilise la classe `su-h2` pour le titre et on ajoute un (ou des…) bouton `su-seconday` **avant** le bouton `su-primary`.

```html
<!-- Voile -->
<div class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":1}]'></div>
<!-- Pop-in -->
<div id="pop-in-2" class="su-pop-in">
	<p class="su-h2">Message de validation.</p>
	<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
	<div class="su-buttons-area">
		<a class="su-button su-secondary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":1}]'>Annuler</a>
		<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":1}]'>Valider</a>
	</div>
</div>
<!-- Déclencheur -->
<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":1}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":1}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":0}]'>Afficher la pop-in</a>
```

<div class="sipaui">
	<!-- Utilisation du voile de la première pop-in -->
	<div id="pop-in-2" class="su-pop-in">
		<p class="su-h2">Message de validation.</p>
		<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
		<div class="su-buttons-area">
			<a class="su-button su-secondary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":1}]'>Annuler</a>
			<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":1}]'>Valider</a>
		</div>
	</div>
	<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-veil-in","force":1}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":1}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":0}]'>Afficher la pop-in</a>
</div>


## Popin avec titre, 2 choix, croix de fermeture et scroll



<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-pop-in`
- `su-pop-in-in`

### Classes annexes
- `su-veil` (dépendant du composant *Veil*)
- `su-veil-in` (dépendant du composant *Veil*)


</div>
