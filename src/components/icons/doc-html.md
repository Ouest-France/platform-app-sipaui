# Icons / Icônes

Ci-dessous, le catalogue des icônes disponibles dans la fonte *su-icons*. Ces icônes sont prévues pour un **affichage optimal à partir de 24px**. Toutefois, dans quelques cas spécifiques, **certaines de ces icônes sont déclinées en 14px** pour éviter d’avoir un aspect dégradé en affichage inférieur à 24px.

<div class="alerte">
	<p>La police d’icônes n’est pas un composant en tant que tel, elle fait partie du «&nbsp;core&nbsp;», c'est à dire des éléments obligatoires.</p>
</div>

<!-- STORY -->

## Exemples

L’intégration d’une icône peut se faire via la balise HTML neutre et inline `<span>` ou **mieux, via la balise de <a href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/i"  target="_blank" rel="noopener">texte différenciant</a>** `<i>`. On lui applique alors la classe `su-icon` ou `su-icon-mini` **si le picto est disponible en petit**. On écrit alors en contenu de la balise, le texte de référence de l’icône souhaitée.

### Icône standard (en 24px) 
```html
<i class="su-icon">alerte</i>
```
<i class="su-icon">alerte</i>

### Icône mini (en 14px) 
```html
<i class="su-icon-mini">alerte-mini</i>
```
<i class="su-icon-mini">alerte-mini</i>

## Catalogue

### Pictos standards (24px)

<div class="catalogue-icones">
	<div class="icone">
		<h3>Alerte</h3>
		<pre><code>&lt;i class="su-icon">
    alerte
&lt;/i></code></pre>
		<div><i class="su-icon">alerte</i></div>
	</div>
	<div class="icone">
		<h3>Fermer</h3>
		<pre><code>&lt;i class="su-icon">
    fermer
&lt;/i></code></pre>
		<div><i class="su-icon">fermer</i></div>
	</div>
	<div class="icone">
		<h3>Montrer</h3>
		<pre><code>&lt;i class="su-icon">
    montrer
&lt;/i></code></pre>
		<div><i class="su-icon">montrer</i></div>
	</div>
	<div class="icone">
		<h3>Flèche bas</h3>
		<pre><code>&lt;i class="su-icon">
    fleche_bas
&lt;/i></code></pre>
		<div><i class="su-icon">fleche_bas</i></div>
	</div>
</div>

### Pictos mini (14px)

<div class="catalogue-icones">
	<div class="icone">
		<h3>Alerte</h3>
		<pre><code>&lt;i class="su-icon-mini">
    alerte-mini
&lt;/i></code></pre>
		<div><i class="su-icon-mini">alerte-mini</i></div>
	</div>
</div>
