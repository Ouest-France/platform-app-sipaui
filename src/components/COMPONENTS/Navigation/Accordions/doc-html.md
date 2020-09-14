# Accordions / Accordéons

En interface web, il peut exister plusieurs types d’accordéons. **SipaUI en propose un** pour l’instant&nbsp;: **l’accordéon-radio**. Il peut servir par exemple pour des sous-parties d’un formulaire, liées à un choix de l’utilisateur (comme le choix d’un moyen de paiement qui ouvre les paramètres liés à ce choix).

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`),
- composant **Icons** (pour l’accordéon simple).
- composant **Radio-buttons** (pour l’accordéon-radio).

</div>

## Accordéon simple

### Standard

<div class="sipaui">
	<div class="su-accordion">
		<div class="su-accordion-item">
			<input type="checkbox" id="accordion-radio1" name="nom1">
			<label for="accordion-radio1">Label court</label>
			<div class="su-accordion-content">
				<p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
			</div>
		</div>
		<div class="su-accordion-item">
			<input type="checkbox" id="accordion-radio2" name="nom1">
			<label for="accordion-radio2">Label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long</label>
			<div class="su-accordion-content">
				<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
			</div>
		</div>
		<div class="su-accordion-item">
			<input type="checkbox" id="accordion-radio3" name="nom1">
			<label for="accordion-radio3">
				<div style="display: flex; align-items: center;">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="30px" height="30px" style="margin-right: 10px;"><path d="M36.8 5l-4.4-.5V2.9c0-.9-1.3-1.1-1.8-1.1-1.9-.3-4.9-.1-6.8.3-.4.1-1.3.3-1.6.9V1.7c0-1-1.4-1.3-2.6-1.5-2.5-.4-5.9-.1-7.4.5-.2.1-.9.4-1 1v1c-1.7-.2-3.6-.1-4.5.3-.5.2-.7.5-.7.8v1.3l-3 1c-.3.1-.5.4-.5.7v21.8c0 .2.1.4.2.5l10.9 10.7h.6L37 32.5c.3-.1.5-.4.5-.7V5.7c0-.4-.3-.7-.7-.7zm-6.4-1.8c.2 0 .4.1.5.1v1l-5.3-.6v-.4c1.6-.2 3.6-.3 4.8-.1zM19.5 1.7c.8.1 1.2.2 1.3.3v1.3L15 2.6v-1c1.4-.1 3.1-.1 4.5.1zM36 31.2l-21.1 7V4.1L36 6.4v24.8z"/><path d="M30.2 9.2v7l-6.2.4v-1.2l5.5-.2V8.8c-4.4-2-9.6 1.6-11.2 8.4-1.5 6.5 1.2 12.6 5.7 13.8v-7.6l6.2-1v1.1l-5.4.9v6.8c4.4.6 8.5-3.8 9.6-9.4 1-5.1-.7-10.4-4.2-12.6z"/></svg>
					Label avec image
				</div>
			</label>
			<div class="su-accordion-content">
				<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.</p>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.</p>
			</div>
		</div>
	</div>
</div>

### Standard autofermant

<div class="sipaui">
	<div class="su-accordion">
		<div class="su-accordion-item">
			<input type="radio" id="accordion-radio4" name="nom2" checked>
			<label for="accordion-radio4">Label court</label>
			<div class="su-accordion-content">
				<p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
			</div>
		</div>
		<div class="su-accordion-item">
			<input type="radio" id="accordion-radio5" name="nom2">
			<label for="accordion-radio5">Label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long</label>
			<div class="su-accordion-content">
				<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
			</div>
		</div>
		<div class="su-accordion-item">
			<input type="radio" id="accordion-radio6" name="nom2">
			<label for="accordion-radio6">
				<div style="display: flex; align-items: center;">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="30px" height="30px" style="margin-right: 10px;"><path d="M36.8 5l-4.4-.5V2.9c0-.9-1.3-1.1-1.8-1.1-1.9-.3-4.9-.1-6.8.3-.4.1-1.3.3-1.6.9V1.7c0-1-1.4-1.3-2.6-1.5-2.5-.4-5.9-.1-7.4.5-.2.1-.9.4-1 1v1c-1.7-.2-3.6-.1-4.5.3-.5.2-.7.5-.7.8v1.3l-3 1c-.3.1-.5.4-.5.7v21.8c0 .2.1.4.2.5l10.9 10.7h.6L37 32.5c.3-.1.5-.4.5-.7V5.7c0-.4-.3-.7-.7-.7zm-6.4-1.8c.2 0 .4.1.5.1v1l-5.3-.6v-.4c1.6-.2 3.6-.3 4.8-.1zM19.5 1.7c.8.1 1.2.2 1.3.3v1.3L15 2.6v-1c1.4-.1 3.1-.1 4.5.1zM36 31.2l-21.1 7V4.1L36 6.4v24.8z"/><path d="M30.2 9.2v7l-6.2.4v-1.2l5.5-.2V8.8c-4.4-2-9.6 1.6-11.2 8.4-1.5 6.5 1.2 12.6 5.7 13.8v-7.6l6.2-1v1.1l-5.4.9v6.8c4.4.6 8.5-3.8 9.6-9.4 1-5.1-.7-10.4-4.2-12.6z"/></svg>
					Label avec image
				</div>
			</label>
			<div class="su-accordion-content">
				<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.</p>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.</p>
			</div>
		</div>
	</div>
</div>

### DL DT

## Accordéon-radio

### Standard

Comme pour les boutons-radio il ne peut y avoir qu’**une seule partie de l’accordéon active à la fois**. Chaque partie est donc **autofermante**.

Cet accordéon se construit avec ces 3 classes&nbsp;: `su-accordion-radio`, `su-accordion-item` et `su-accordion-content` ainsi qu’avec le composant **radio-buttons** qui sert à la fois d’activateur de l’effet d’accordéon et est affiché pour renforcer visuellement la logique de fonctionnement. La première classe, `su-accordion-radio` encadre l’ensemble de l’accordéon-radio, la seconde, `su-accordion-item` encadre chaque volet d’un accordéon et `su-accordion-content` est affectée à la zone affichée/masquée dans chaque volet.

Il y a une dernière classe utile&nbsp;: `su-no-transition`. Elle sert à désactiver l’effet de transition sur les volets de l’accordéon. Pour en savoir plus, cf. l’encart *Transition = hauteur maximale de contenu&nbsp;!* ci-dessous.


```html
<div class="su-accordion-radio">
	<div class="su-accordion-item">
		<input type="radio" id="accordion-radio7" name="nom3" checked>
		<label for="accordion-radio7">Label court</label>
		<div class="su-accordion-content">
			<p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
		</div>
	</div>
	<div class="su-accordion-item">
		<input type="radio" id="accordion-radio8" name="nom3">
		<label for="accordion-radio8">Label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long</label>
		<div class="su-accordion-content">
			<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
		</div>
	</div>
	<div class="su-accordion-item">
		<input type="radio" id="accordion-radio9" name="nom3">
		<label for="accordion-radio9">
			<div style="display: flex; align-items: center;">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="30px" height="30px" style="margin-right: 10px;"><path d="M36.8 5l-4.4-.5V2.9c0-.9-1.3-1.1-1.8-1.1-1.9-.3-4.9-.1-6.8.3-.4.1-1.3.3-1.6.9V1.7c0-1-1.4-1.3-2.6-1.5-2.5-.4-5.9-.1-7.4.5-.2.1-.9.4-1 1v1c-1.7-.2-3.6-.1-4.5.3-.5.2-.7.5-.7.8v1.3l-3 1c-.3.1-.5.4-.5.7v21.8c0 .2.1.4.2.5l10.9 10.7h.6L37 32.5c.3-.1.5-.4.5-.7V5.7c0-.4-.3-.7-.7-.7zm-6.4-1.8c.2 0 .4.1.5.1v1l-5.3-.6v-.4c1.6-.2 3.6-.3 4.8-.1zM19.5 1.7c.8.1 1.2.2 1.3.3v1.3L15 2.6v-1c1.4-.1 3.1-.1 4.5.1zM36 31.2l-21.1 7V4.1L36 6.4v24.8z"/><path d="M30.2 9.2v7l-6.2.4v-1.2l5.5-.2V8.8c-4.4-2-9.6 1.6-11.2 8.4-1.5 6.5 1.2 12.6 5.7 13.8v-7.6l6.2-1v1.1l-5.4.9v6.8c4.4.6 8.5-3.8 9.6-9.4 1-5.1-.7-10.4-4.2-12.6z"/></svg>
				Label avec image
			</div>
		</label>
		<div class="su-accordion-content">
			<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.</p>
			<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.</p>
		</div>
	</div>
</div>
```
<div class="sipaui">
	<div class="su-accordion-radio">
		<div class="su-accordion-item">
			<input type="radio" id="accordion-radio7" name="nom3" checked>
			<label for="accordion-radio7">Label court</label>
			<div class="su-accordion-content">
				<p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
			</div>
		</div>
		<div class="su-accordion-item">
			<input type="radio" id="accordion-radio8" name="nom3">
			<label for="accordion-radio8">Label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long label long</label>
			<div class="su-accordion-content">
				<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
			</div>
		</div>
		<div class="su-accordion-item">
			<input type="radio" id="accordion-radio9" name="nom3">
			<label for="accordion-radio9">
				<div style="display: flex; align-items: center;">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="30px" height="30px" style="margin-right: 10px;"><path d="M36.8 5l-4.4-.5V2.9c0-.9-1.3-1.1-1.8-1.1-1.9-.3-4.9-.1-6.8.3-.4.1-1.3.3-1.6.9V1.7c0-1-1.4-1.3-2.6-1.5-2.5-.4-5.9-.1-7.4.5-.2.1-.9.4-1 1v1c-1.7-.2-3.6-.1-4.5.3-.5.2-.7.5-.7.8v1.3l-3 1c-.3.1-.5.4-.5.7v21.8c0 .2.1.4.2.5l10.9 10.7h.6L37 32.5c.3-.1.5-.4.5-.7V5.7c0-.4-.3-.7-.7-.7zm-6.4-1.8c.2 0 .4.1.5.1v1l-5.3-.6v-.4c1.6-.2 3.6-.3 4.8-.1zM19.5 1.7c.8.1 1.2.2 1.3.3v1.3L15 2.6v-1c1.4-.1 3.1-.1 4.5.1zM36 31.2l-21.1 7V4.1L36 6.4v24.8z"/><path d="M30.2 9.2v7l-6.2.4v-1.2l5.5-.2V8.8c-4.4-2-9.6 1.6-11.2 8.4-1.5 6.5 1.2 12.6 5.7 13.8v-7.6l6.2-1v1.1l-5.4.9v6.8c4.4.6 8.5-3.8 9.6-9.4 1-5.1-.7-10.4-4.2-12.6z"/></svg>
					Label avec image
				</div>
			</label>
			<div class="su-accordion-content">
				<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.</p>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.</p>
			</div>
		</div>
	</div>
</div>



<div class="alerte">
	<p><strong>Transition = hauteur maximale de contenu&nbsp;!</strong></p>
	<p>Pour des questions de légèreté et de simplification d’intégration, nous avons opté pour des accordéons <strong>sans javascript</strong>. Toutefois, à cause d’une limitation de CSS <em>(les transitions n’acceptent pas la valeur «&nbsp;auto&nbsp;»)</em>, il n’est <strong>pas possible</strong> d’avoir à la fois un <strong>effet de transition</strong> et une <strong>hauteur automatique en fonction du contenu</strong>. Nous avons donc choisi d’appliquer un <code>max-height</code> de <strong>1000px</strong>. Il <em>pourrait</em> arriver que votre contenu soit supérieur à cette hauteur (notamment sur mobile où la largeur est moindre) et dans ce cas vous aurez un bug d’affichage (le contenu sortant de cette hauteur sera masqué).</p>
	<p>Par conséquent, si vous rencontrez ce problème, vous avez <strong>2 solutions</strong>&nbsp;:</p>
	<ul>
		<li>Désactiver la transition en ajoutant la classe <code>su-no-transition</code> à côté de la classe <code>su-accordion-radio</code>.</li>
		<li>Rajouter du style dans vos propres CSS pour surcharger la hauteur max initiale (sélecteur à surcharger&nbsp;: <code>.sipaui input[type=radio]:checked~.su-accordion-content</code>).</li>
	</ul>
</div>


### Accordéon inactif

Pour rendre l’accordéon-radio inactif, il faut ajouter la classe `su-disabled` à `su-accordion-radio` et la valeur `disabled` sur chaque bouton-radio.

```html
<div class="su-accordion-radio su-disabled">
	<div class="su-accordion-item">
		<input type="radio" id="accordion-radio40" name="nom4" disabled>
		<label for="accordion-radio40">Label 1</label>
		<div class="su-accordion-content">
			<p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
		</div>
	</div>
	<div class="su-accordion-item">
		<input type="radio" id="accordion-radio41" name="nom4" disabled>
		<label for="accordion-radio41">Label 2</label>
		<div class="su-accordion-content">
			<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
		</div>
	</div>
	<div class="su-accordion-item">
		<input type="radio" id="accordion-radio42" name="nom4" disabled>
		<label for="accordion-radio42">Label 3</label>
		<div class="su-accordion-content">
			<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.</p>
		</div>
	</div>
</div>
```

<div class="sipaui">
	<div class="su-accordion-radio su-disabled">
		<div class="su-accordion-item">
			<input type="radio" id="accordion-radio40" name="nom4" disabled>
			<label for="accordion-radio40">Label 1</label>
			<div class="su-accordion-content">
				<p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
			</div>
		</div>
		<div class="su-accordion-item">
			<input type="radio" id="accordion-radio41" name="nom4" disabled>
			<label for="accordion-radio41">Label 2</label>
			<div class="su-accordion-content">
				<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
			</div>
		</div>
		<div class="su-accordion-item">
			<input type="radio" id="accordion-radio42" name="nom4" disabled>
			<label for="accordion-radio42">Label 3</label>
			<div class="su-accordion-content">
				<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.</p>
			</div>
		</div>
	</div>
</div>


### Volet inactif

Pour rendre uniquement un volet de l’accordéon-radio inactif, la méthode est identique, mais en mettant la classe `su-disabled` sur le `su-accordion-item` concerné et la valeur `disabled` sur son bouton-radio.

```html
<div class="su-accordion-radio">
	<div class="su-accordion-item">
		<input type="radio" id="accordion-radio43" name="nom5" checked>
		<label for="accordion-radio43">Label 1</label>
		<div class="su-accordion-content">
			<p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
		</div>
	</div>
	<div class="su-accordion-item">
		<input type="radio" id="accordion-radio44" name="nom5">
		<label for="accordion-radio44">Label 2</label>
		<div class="su-accordion-content">
			<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
		</div>
	</div>
	<div class="su-accordion-item su-disabled">
		<input type="radio" id="accordion-radio45" name="nom5" disabled>
		<label for="accordion-radio45">Label 3</label>
		<div class="su-accordion-content">
			<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.</p>
		</div>
	</div>
</div>
```

<div class="sipaui">
	<div class="su-accordion-radio">
		<div class="su-accordion-item">
			<input type="radio" id="accordion-radio43" name="nom5" checked>
			<label for="accordion-radio43">Label 1</label>
			<div class="su-accordion-content">
				<p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
			</div>
		</div>
		<div class="su-accordion-item">
			<input type="radio" id="accordion-radio44" name="nom5">
			<label for="accordion-radio44">Label 2</label>
			<div class="su-accordion-content">
				<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
			</div>
		</div>
		<div class="su-accordion-item su-disabled">
			<input type="radio" id="accordion-radio45" name="nom5" disabled>
			<label for="accordion-radio45">Label 3</label>
			<div class="su-accordion-content">
				<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.</p>
			</div>
		</div>
	</div>
</div>

<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-accordion`
- `su-accordion-item`
- `su-accordion-content`
- `su-accordion-radio`
- `su-no-transition`

</div>
