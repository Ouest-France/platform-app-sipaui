# Steppers / Indicateurs de progression


<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`).

</div>

<!-- STORY -->

## Indicateur de progression basique
Un indicateur de progression est en fait une simple liste ordonnée (`<ol>`) redessinée. Il peut être composé de **3, 4 ou 5 étapes**, sa couleur peut dépendre **du thème du site ou d’un sous-thème** (comme *Abonnement*) et avoir au choix **un chiffre ou une coche en étape finale validée**.

En principe, cet indicateur de progression est **cliquable sur les étapes déjà remplies par l’utilisateur** pour lui permettre de revenir en arrière. Cette version *basique* est une version plus simple, non cliquable, **à utiliser uniquement s'il vous est impossible techniquement d’offrir le retour en arrière à vos utilisateurs**. Pour voir la version complète du stepper, cf. le point <a href="#stepper-full" target="_self">«&nbsp;Indicateur de progression complet (cliquable)&nbsp;»</a>.

### À 3 étapes

```html
<ol class="su-stepper">
	<li class="su-stepper-step">
		<span>Étape 1</span>
	</li>
	<li class="su-stepper-step su-enabled">
		<span>Étape 2</span>
	</li>
	<li class="su-stepper-step">
		<span>Étape 3</span>
	</li>
</ol>
```


<div class="sipaui">
	<ol class="su-stepper surcharge-storybook">
		<li class="su-stepper-step">
			<span>Étape 1</span>
		</li>
		<li class="su-stepper-step su-enabled">
			<span>Étape 2</span>
		</li>
		<li class="su-stepper-step">
			<span>Étape 3</span>
		</li>
	</ol>
</div>

### À 5 étapes


```html
<ol class="su-stepper">
	<li class="su-stepper-step">
		<span>Étape 1</span>
	</li>
	<li class="su-stepper-step su-enabled">
		<span>Étape 2</span>
	</li>
	<li class="su-stepper-step">
		<span>Étape 3</span>
	</li>
	<li class="su-stepper-step">
		<span>Étape 4</span>
	</li>
	<li class="su-stepper-step">
		<span>Étape 5</span>
	</li>
</ol>
```


<div class="sipaui">
	<ol class="su-stepper surcharge-storybook">
		<li class="su-stepper-step">
			<span>Étape 1</span>
		</li>
		<li class="su-stepper-step su-enabled">
			<span>Étape 2</span>
		</li>
		<li class="su-stepper-step">
			<span>Étape 3</span>
		</li>
		<li class="su-stepper-step">
			<span>Étape 4</span>
		</li>
		<li class="su-stepper-step">
			<span>Étape 5</span>
		</li>
	</ol>
</div>

### Dans un sous-thème
Un stepper peut s'adapter à un sous-thème. À ce jour seul le sous-thème *Abonnement* est pris en charge avec la classe `su-subscription` sur le `<ol>`.

```html
<ol class="su-stepper su-subscription">
	<li class="su-stepper-step">
		<span>Étape 1</span>
	</li>
	<li class="su-stepper-step su-enabled">
		<span>Étape 2</span>
	</li>
	<li class="su-stepper-step">
		<span>Étape 3</span>
	</li>
</ol>
```

<div class="sipaui">
	<ol class="su-stepper su-subscription surcharge-storybook">
		<li class="su-stepper-step">
			<span>Étape 1</span>
		</li>
		<li class="su-stepper-step su-enabled">
			<span>Étape 2</span>
		</li>
		<li class="su-stepper-step">
			<span>Étape 3</span>
		</li>
	</ol>
</div>

### Variation avec une coche finale
Par défaut, la dernière étape, une fois active, se comporte comme les autres&nbsp;: elle change de couleur. Il est toutefois possible de remplacer le chiffre par une coche (✓) lorsque cette dernière étape correspond à une confirmation finale. Pour cela, il suffit de rajouter la classe `su-check` sur le `<ol>`. Cette coche n’est visible que lorsque cette dernière étape est atteinte.

```html
<ol class="su-stepper su-check">
	<li class="su-stepper-step">
		<span>Étape 1</span>
	</li>
	<li class="su-stepper-step">
		<span>Étape 2</span>
	</li>
	<li class="su-stepper-step su-enabled">
		<span>Étape 3</span>
	</li>
</ol>
```

<div class="sipaui">
	<ol class="su-stepper su-check surcharge-storybook">
		<li class="su-stepper-step">
			<span>Étape 1</span>
		</li>
		<li class="su-stepper-step">
			<span>Étape 2</span>
		</li>
		<li class="su-stepper-step su-enabled">
			<span>Étape 3</span>
		</li>
	</ol>
</div>



<div id="stepper-full">

## Indicateur de progression complet (cliquable)
Il s'agit ici de la version complète avec retour possible aux étapes précédentes dans le tunnel d’actions. Il en existe 2 versions, en fonction des contraintes techniques&nbsp;:
<ul>
	<li>Soit on a toutes les étapes présentes dans la page et le composant se contente d’afficher/masquer le contenu idoine</li>
	<li>Soit on a les étapes sur des URL différents et le composant permet de changer de page quand on veut revenir en arrière.</li>
</ul>

### Version dynamique via affichage de contenu masqué

<div class="sipaui">
	<ol class="su-stepper surcharge-storybook">
		<li class="su-stepper-step">
			<a href>
				<span>Étape 1</span>
			</a>
		</li>
		<li class="su-stepper-step">
			<span>Étape 2</span>
		</li>
		<li class="su-stepper-step su-enabled">
			<span>Étape 3</span>
		</li>
		<li class="su-stepper-step">
			<span>Étape 4</span>
		</li>
	</ol>
	<div class="su-visually-hidden">
		<h2>Etape 1</h2>
		<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis.</p>
	</div>
	<div class="su-visually-hidden">
		<h2>Etape 2</h2>
		<p>Vestibulum id ligula porta felis euismod semper.</p>
	</div>
	<div>
		<h2>Etape 3</h2>
		<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
	</div>
	<div class="su-visually-hidden">
		<h2>Etape 4</h2>
		<p>Purus Ridiculus Vulputate Quam.</p>
	</div>
</div>

### Version statique via changement d’URL
(de part le principe même du changement d’URL il est indémontrable ici).

<div class="sipaui">
	<ol class="su-stepper surcharge-storybook">
		<li class="su-stepper-step">
			<a href>
				<span>Étape 1</span>
			</a>
		</li>
		<li class="su-stepper-step">
			<span>Étape 2</span>
		</li>
		<li class="su-stepper-step su-enabled">
			<span>Étape 3</span>
		</li>
		<li class="su-stepper-step">
			<span>Étape 4</span>
		</li>
	</ol>
	<div class="su-visually-hidden">
		<h2>Etape 1</h2>
		<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis.</p>
	</div>
	<div class="su-visually-hidden">
		<h2>Etape 2</h2>
		<p>Vestibulum id ligula porta felis euismod semper.</p>
	</div>
	<div>
		<h2>Etape 3</h2>
		<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
	</div>
	<div class="su-visually-hidden">
		<h2>Etape 4</h2>
		<p>Purus Ridiculus Vulputate Quam.</p>
	</div>
</div>


</div>


<div id="liste-classes">

## Liste des classes disponibles
- `su-stepper`
- `su-stepper-step`
- `su-subscription`
- `su-check`

</div>
