# Icons / Icônes

Ci-dessous, le catalogue des icônes disponibles dans la fonte *su-icons*. Ces icônes sont prévues pour un **affichage optimal à partir de 24px**. Toutefois, dans quelques cas spécifiques, **certaines de ces icônes sont déclinées en 14px** pour éviter d’avoir un aspect dégradé en affichage inférieur à 24px.

<div class="alerte">
	<p>La police d’icônes n’est pas un composant en tant que tel, elle fait partie du «&nbsp;core&nbsp;», c'est à dire des éléments obligatoires.</p>
</div>

<div class="dependances">
																							
## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`)

</div>



## Exemples

L’intégration d’une icône peut se faire via la balise HTML neutre et inline `<span>`, ou **mieux, via la balise de <a href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/i"  target="_blank" rel="noopener">texte différenciant</a>** `<i>`. On lui applique la classe `su-icon`<!--, ou `su-icon-mini` **si le picto est disponible en petit**. On--> et on écrit alors en contenu de la balise, le texte de référence de l’icône souhaitée (par exemple «&nbsp;alerte&nbsp;» pour afficher l’icône d’alerte).

### Icône standard (en 24px) 
```html
<i class="su-icon">alerte</i>
```
<div class="sipaui">
	<i class="su-icon">alerte</i>
</div>

<!-- Désactivation de l’icône mini tant qu'elle est inutile
### Icône mini (en 14px) 
```html
<i class="su-icon-mini">alerte-mini</i>
```
<div class="sipaui">
	<i class="su-icon-mini">alerte-mini</i>
</div>
-->

## Catalogue

### Pictos standards (24px)

<div class="catalogue-icones">
	<div class="icone"><!------------------------------------------------- Alerte-->
		<h3>Alerte</h3>
		<pre class="language-html"><code>&lt;i class="su-icon">
    alerte
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e904</code></div>
		<div><i class="su-icon">alerte</i></div>
		<p class="su-text-left">Références&nbsp;: alerte, alert.</p>
	</div>
	<div class="icone"><!------------------------------------------------- Fermer / Invalide-->
		<h3>Fermer / Invalide</h3>
		<pre class="language-html"><code>&lt;i class="su-icon">
    fermer
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e900</code></div>
		<div><i class="su-icon">fermer</i></div>
		<p class="su-text-left">Références&nbsp;: fermer, invalide, close, invalid.</p>
	</div>
	<div class="icone"><!------------------------------------------------- Coche / Valide-->
		<h3>Coche / Valide</h3>
		<pre class="language-html"><code>&lt;i class="su-icon">
    coche
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e905</code></div>
		<div><i class="su-icon">coche</i></div>
		<p class="su-text-left">Références&nbsp;: coche, valide, checked, valid.</p>
	</div>
	<div class="icone"><!------------------------------------------------- Flèche bas-->
		<h3>Flèche bas</h3>
		<pre class="language-html"><code>&lt;i class="su-icon">
    fleche_bas
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e901</code></div>
		<div><i class="su-icon">fleche_bas</i></div>
		<p class="su-text-left">Références&nbsp;: fleche_bas, arrow_down.</p>
	</div>
	<div class="icone"><!------------------------------------------------- Montrer-->
		<h3>Montrer</h3>
		<pre class="language-html"><code>&lt;i class="su-icon">
    montrer
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e903</code></div>
		<div><i class="su-icon">montrer</i></div>
		<p class="su-text-left">Références&nbsp;: montrer, show.</p>
	</div>
	<div class="icone"><!------------------------------------------------- Vider-->
		<h3>Vider</h3>
		<pre class="language-html"><code>&lt;i class="su-icon">
    vider
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e902</code></div>
		<div><i class="su-icon">vider</i></div>
		<p class="su-text-left">Références&nbsp;: vider, empty.</p>
	</div>
	<div class="icone"><!------------------------------------------------- Bloqué-->
		<h3>Bloqué</h3>
		<pre class="language-html"><code>&lt;i class="su-icon">
    bloqué
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e906</code></div>
		<div><i class="su-icon">bloqué</i></div>
		<p class="su-text-left">Références&nbsp;: bloqué, locked.</p>
	</div>
	<div class="icone"><!------------------------------------------------- Débloqué-->
		<h3>Débloqué</h3>
		<pre class="language-html"><code>&lt;i class="su-icon">
    débloqué
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e907</code></div>
		<div><i class="su-icon">débloqué</i></div>
		<p class="su-text-left">Références&nbsp;: débloqué, unlocked.</p>
	</div>
</div>

<!-- Désactivation de l’icône mini tant qu'elle est inutile
### Pictos mini (14px)

<div class="catalogue-icones">
	<div class="icone">
		<h3>Alerte mini</h3>
		<pre class="language-html"><code>&lt;i class="su-icon-mini">
    alerte-mini
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e1004</code></div>
		<div><i class="su-icon-mini">alerte-mini</i></div>
	</div>
</div>
-->
