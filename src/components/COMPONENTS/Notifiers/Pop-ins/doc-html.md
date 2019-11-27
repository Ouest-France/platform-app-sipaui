# Pop-ins / Pop-ins

SipaUI propose un type de pop-in standard et responsif.

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>


<div class="dependances">
																							
## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Veil**
- composant **Helpers**
- composant **Titles**
- composant **Buttons**
- composant **Icons**

</div>




## Mise en place

Les pop-ins doivent être déjà présentes dans le DOM (comme le voile) afin qu’il n’y ait pas de latence dans leur affichage. Elles sont donc masquées par défaut et il faudra un déclencheur pour les afficher. Ce déclencheur peut être activé par l’utilisateur (lien, bouton) ou par la page elle-même (réception d’un évènement serveur, minuteur…).

Comme précisé dans le [doc HTML du composant Veil](/storybook/?path=/story/utilities-veil--html), vous avez le choix entre un voile par pop-in et un voile unique dans le DOM.


## Pop-in simple

### Apparence

Pour créer une pop-in, il faut un `<div>`  avec la classe `.su-pop-in`. Elle sera invisible par défaut.

Une pop-in simple ne donne qu’un court message avec validation de lecture. Elle ne comportera donc qu’un seul bouton.

2 zones sont spécifiées à l’intérieur de la pop-in&nbsp;: `su-content-area` pour le message et `su-buttons-area` pour les boutons.

### Déclenchement

Pour déclencher l’apparition de la pop-in (ainsi que du voile), il faut utiliser ce code&nbsp;: `data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":1}, {"sel":"#veil-1","klass":"su-veil-in","force":1}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":1}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":0}]'` sur le déclencheur.

Ce qu'il fait&nbsp;:
- ajoute la classe `su-no-scroll` sur le body (cf. le composant *Veil*)
- ajoute la classe `su-veil-in` sur le voile (cf. le composant *Veil*)
- ajoute la classe `su-pop-in-in` sur la pop-in
- enlève la classe `su-pop-in-out` de la pop-in si elle est déjà là.

L’attribut `"#pop-in-1"` du sélecteur `"sel"` est l’ID spécifique de votre pop-in.

### Fermeture
Pour fermer la pop-in (et le voile) il faut utiliser `data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-1","klass":"su-veil-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":1}]'` sur le bouton primaire, ainsi que sur le `<div>` du voile. Bien sûr, si le fait de valider la pop-in en activant le bouton primaire entraîne un changement&nbsp;/ rechargement de page, ce déclencheur de fermeture de pop-in sur le voile est inutile.

### Code

```html
<!-- Voile -->
<div id="veil-1" class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-1","klass":"su-veil-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":1}]'></div>
<!-- Pop-in -->
<div id="pop-in-1" class="su-pop-in">
	<div class="su-content-area">
		<p>Message d’information. Vestibulum id ligula porta felis euismod semper.</p>
	</div>
	<div class="su-buttons-area">
		<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-1","klass":"su-veil-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":1}]'>Valider</a>
	</div>
</div>
<!-- Déclencheur -->
<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":1}, {"sel":"#veil-1","klass":"su-veil-in","force":1}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":1}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":0}]'>Afficher la pop-in</a>
```

<div class="sipaui">
	<div id="veil-1" class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-1","klass":"su-veil-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":1}]'></div>
	<div id="pop-in-1" class="su-pop-in">
		<div class="su-content-area">
			<p>Message d’information. Vestibulum id ligula porta felis euismod semper.</p>
		</div>
		<div class="su-buttons-area">
			<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-1","klass":"su-veil-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":1}]'>Valider</a>
		</div>
	</div>
	<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":1}, {"sel":"#veil-1","klass":"su-veil-in","force":1}, {"sel":"#pop-in-1","klass":"su-pop-in-in","force":1}, {"sel":"#pop-in-1","klass":"su-pop-in-out","force":0}]'>Afficher la pop-in</a>
</div>


## Pop-in avec titre et 2 choix

Pour cette pop-in, en plus de la pop-in simple, on utilise la classe `su-h2` pour le titre et on ajoute un (ou des…) bouton `su-secondary` **avant** le bouton `su-primary`. Attention, il est préférable de mettre le titre **au-dessus** de la zone `su-content-area` afin que le scroll ne l’impacte pas.

Ne pas oublier de mettre le déclancheur de fermeture si besoin, sur le(s) bouton(s) secondaire(s).

### Code

```html
<!-- Voile -->
<div id="veil-2" class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-2","klass":"su-veil-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":1}]'></div>
<!-- Pop-in -->
<div id="pop-in-2" class="su-pop-in">
	<p class="su-h2">Pop-in avec 2 possibilités</p>
	<div class="su-content-area">
		<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
	</div>
	<div class="su-buttons-area">
		<a class="su-button su-secondary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-2","klass":"su-veil-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":1}]'>Annuler</a>
		<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-2","klass":"su-veil-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":1}]'>Valider</a>
	</div>
</div>
<!-- Déclencheur -->
<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":1}, {"sel":"#veil-2","klass":"su-veil-in","force":1}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":1}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":0}]''>Afficher la pop-in</a>
```

<div class="sipaui">
	<div id="veil-2" class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-2","klass":"su-veil-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":1}]'></div>
	<div id="pop-in-2" class="su-pop-in">
		<p class="su-h2">Pop-in avec 2 possibilités</p>
		<div class="su-content-area">
			<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
		</div>
		<div class="su-buttons-area">
			<a class="su-button su-secondary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-2","klass":"su-veil-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":1}]'>Annuler</a>
			<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-2","klass":"su-veil-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":1}]'>Valider</a>
		</div>
	</div>
	<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":1}, {"sel":"#veil-2","klass":"su-veil-in","force":1}, {"sel":"#pop-in-2","klass":"su-pop-in-in","force":1}, {"sel":"#pop-in-2","klass":"su-pop-in-out","force":0}]''>Afficher la pop-in</a>
</div>


## Pop-in avec titre, 2 choix, croix de fermeture et scroll

Le scroll est géré automatiquement par `su-content-area`. Toutefois, comme dit plus haut, il est préférable que le titre ne soit pas contenu dans cette zone, afin qu’il soit toujours visible.

Pour positionner la croix de fermeture, rajouter la `div.su-close-area` juste au premier niveau sous `su-pop-in` (au-dessus du contenu ou du titre s’il y en a un). Cette `div` doit contenir le bouton de fermeture `su-close` contenant lui-même l’icône `su-icon` «&nbsp;fermer&nbsp;». Ne pas oublier, là non-plus, de mettre le déclencheur de fermeture sur le bouton.

### Code

```html
<!-- Voile -->
<div id="veil-3" class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-3","klass":"su-veil-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-out","force":1}]'></div>
<!-- Pop-in -->
<div id="pop-in-3" class="su-pop-in">
	<div id="pop-in-3" class="su-pop-in">
		<div class="su-close-area">
			<div class="su-close" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-3","klass":"su-veil-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-out","force":1}]'>
				<i class="su-icon">
				    fermer
				</i>
			</div>
		</div>
		<p class="su-h2">Pop-in avec 2 possibilités, croix et long message</p>
		<div class="su-content-area">
			<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
			<p>Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
			<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus.</p>
			<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
			<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus.</p>
			<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
			<p>Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
			<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus.</p>
			<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
			<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus.</p>
		</div>
		<div class="su-buttons-area">
			<a class="su-button su-secondary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-3","klass":"su-veil-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-out","force":1}]'>Annuler</a>
			<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-3","klass":"su-veil-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-out","force":1}]'>Valider</a>
		</div>
	</div>
</div>
<!-- Déclencheur -->
<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":1}, {"sel":"#veil-3","klass":"su-veil-in","force":1}, {"sel":"#pop-in-3","klass":"su-pop-in-in","force":1}, {"sel":"#pop-in-3","klass":"su-pop-in-out","force":0}]''>Afficher la pop-in</a>
```

<div class="sipaui">
	<div id="veil-3" class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-3","klass":"su-veil-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-out","force":1}]'></div>
	<div id="pop-in-3" class="su-pop-in">
		<div class="su-close-area">
			<div class="su-close" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-3","klass":"su-veil-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-out","force":1}]'>
				<i class="su-icon">
				    fermer
				</i>
			</div>
		</div>
		<p class="su-h2">Pop-in avec 2 possibilités, croix et long message</p>
		<div class="su-content-area">
			<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
			<p>Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
			<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus.</p>
			<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
			<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus.</p>
			<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
			<p>Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
			<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
			<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus.</p>
			<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
			<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus.</p>
		</div>
		<div class="su-buttons-area">
			<a class="su-button su-secondary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-3","klass":"su-veil-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-out","force":1}]'>Annuler</a>
			<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-3","klass":"su-veil-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-3","klass":"su-pop-in-out","force":1}]'>Valider</a>
		</div>
	</div>
	<a class="su-button su-primary" href="javascript:;" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":1}, {"sel":"#veil-3","klass":"su-veil-in","force":1}, {"sel":"#pop-in-3","klass":"su-pop-in-in","force":1}, {"sel":"#pop-in-3","klass":"su-pop-in-out","force":0}]''>Afficher la pop-in</a>
</div>


<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-pop-in`
- `su-pop-in-in` (posée automatiquement par le JS)
- `su-pop-in-out` (posée automatiquement par le JS)
- `su-content-area`
- `su-buttons-area`
- `su-close-area`
- `su-close`

### Classes annexes
- `su-veil` (dépendant du composant *Veil*)
- `su-veil-in` (dépendant du composant *Veil*)
- `su-no-scroll` (dépendant du composant *Helpers*)
- `su-h2` (dépendant du composant *Titles*)
- `su-button` (dépendant du composant *Buttons*)
- `su-primary` (dépendant du composant *Buttons*)
- `su-secondary` (dépendant du composant *Buttons*)
- `su-icon`  (dépendant du composant *Icons*)

</div>
