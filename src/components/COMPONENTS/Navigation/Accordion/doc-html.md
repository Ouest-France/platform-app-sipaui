# Accordion / Accordéon

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Radio-buttons** (pour l’accordéon radio.

</div>


## Accordéon-radio

Comme pour les boutons-radio il ne peut y avoir qu’**une seule partie de l’accordéon de active à la fois**. Chaque partie est donc **auto-fermante**.

```html

```
<div class="sipaui">
	<div class="su-accordion-radio">
		<div class="su-accordion-item">
			<input type="radio" id="accordion-radio1" name="nom1" checked>
			<label for="accordion-radio1">Label court</label>
			<div class="su-accordion-content">
				<p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
			</div>
		</div>
		<div class="su-accordion-item">
			<input type="radio" id="accordion-radio2" name="nom1">
			<label for="accordion-radio2">Label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long</label>
			<div class="su-accordion-content">
				<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
			</div>
		</div>
		<div class="su-accordion-item">
			<input type="radio" id="accordion-radio3" name="nom1">
			<label for="accordion-radio3">Label avec image</label>
			<div class="su-accordion-content">
				<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.</p>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.</p>
			</div>
		</div>
	</div>
</div>



<div class="alerte">
	<p><strong>Transition = hauteur maximale de contenu&nbsp;!</strong></p>
	<p>Pour des questions de légèreté et de simplification d’intégration, nous avons opté pour des accordéons <strong>sans javascript</strong>. Toutefois, à cause d’une limitation de CSS <em>(les transitions n’acceptent pas la valeur "auto")</em>, il n’est <strong>pas possible</strong> d’avoir à la fois un <strong>effet de transition</strong> et une <strong>hauteur automatique en fonction du contenu</strong>. Nous avons donc choisi d’appliquer un <code>max-height</code> de <strong>1000px</strong>. Il pourrait arriver que votre contenu soit supérieur à cette hauteur (notamment sur mobile où la largeur est moindre) et dans ce cas vous aurez un bug d’affichage (le contenu sortant de cette hauteur sera masqué).</p>
	<p>Par conséquent, si vous rencontrez ce problème, vous avez <strong>2 solutions</strong>&nbsp;:</p>
	<ul>
		<li>Désactiver la transition en ajoutant la classe <code>su-no-transition</code> à côté de la classe <code>su-accordion-radio</code>.</li>
		<li>Rajouter du style dans vos propres CSS pour surcharger la hauteur max initiale (sélecteur à surcharger&nbsp;: <code>.sipaui input[type=radio]:checked~.su-accordion-content</code>).</li>
	</ul>
</div>


### Inactif

Sur accordion et sur accordion-item.

<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-accordion-radio`
- `su-accordion-item`
- `su-accordion-content`
- `su-no-transition`

</div>
