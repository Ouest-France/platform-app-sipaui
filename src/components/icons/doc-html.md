# Icons / Icônes

Ci-dessous, le catalogue des icônes disponibles dans la fonte *su-icons*. Ces icônes sont prévues pour un **affichage optimal à partir de 24px**. Toutefois, dans quelques cas spécifiques, **certaines de ces icônes sont déclinées en 14px** pour éviter d’avoir un aspect dégradé en affichage inférieur à 24px.

<div class="alerte">
	<p>La police d’icônes n’est pas un composant en tant que tel, elle fait partie du «&nbsp;core&nbsp;», c'est à dire des éléments obligatoires.</p>
</div>

<!-- STORY -->

## Exemples

L’intégration d’une icône peut se faire via la balise HTML neutre et inline `<span>`, ou **mieux, via la balise de <a href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/i"  target="_blank" rel="noopener">texte différenciant</a>** `<i>`. On lui applique la classe `su-icon`, ou `su-icon-mini` **si le picto est disponible en petit**. On écrit alors en contenu de la balise, le texte de référence de l’icône souhaitée.

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
	<div class="icone"><!------------------------------------------------- Fermer-->
		<h3>Fermer</h3>
		<pre class="language-html"><code>&lt;i class="su-icon">
    fermer
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e900</code></div>
		<div><i class="su-icon">fermer</i></div>
	</div>
	<div class="icone"><!------------------------------------------------- Flèche bas-->
		<h3>Flèche bas</h3>
		<pre class="language-html"><code>&lt;i class="su-icon">
    fleche_bas
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e901</code></div>
		<div><i class="su-icon">fleche_bas</i></div>
	</div>
	<div class="icone"><!------------------------------------------------- Vider-->
		<h3>Vider</h3>
		<pre class="language-html"><code>&lt;i class="su-icon">
    vider
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e902</code></div>
		<div><i class="su-icon">vider</i></div>
	</div>
	<div class="icone"><!------------------------------------------------- Montrer-->
		<h3>Montrer</h3>
		<pre class="language-html"><code>&lt;i class="su-icon">
    montrer
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e903</code></div>
		<div><i class="su-icon">montrer</i></div>
	</div>
	<div class="icone"><!------------------------------------------------- Alerte-->
		<h3>Alerte</h3>
		<pre class="language-html"><code>&lt;i class="su-icon">
    alerte
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e904</code></div>
		<div><i class="su-icon">alerte</i></div>
	</div>
</div>

### Pictos mini (14px)

<div class="catalogue-icones">
	<div class="icone"><!------------------------------------------------- Alerte mini-->
		<h3>Alerte mini</h3>
		<pre class="language-html"><code>&lt;i class="su-icon-mini">
    alerte-mini
&lt;/i></code></pre>
		<div class="glyphe">Glyphe&nbsp;: <code>\e1004</code></div>
		<div><i class="su-icon-mini">alerte-mini</i></div>
	</div>
</div>


## Mise en situation
<main class="sipaui">
	<section class="su-relative" style="max-width: 400px">
		<p>Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>
		<div>
			<div class="su-radio-area">
			    <label for="Madame"><input type="radio" id="Madame" name="Madame" value="Madame" checked>Madame</label>
			    <label for="Monsieur"><input type="radio" id="Monsieur" name="Monsieur" value="Monsieur">Monsieur</label>
			    <label for="nspp"><input type="radio" id="nspp" name="nspp" value="nspp">NSPP</label>
			</div>
		</div>
		<!------------------------------------------------------------------------------------------------------------------------------------>
		<div class="su-margin-top-xs">
			<label for="nom">Nom</label>
			<div class="su-input-actions-1">
				<input id="nom" name="Nom" type="text" data-oftoggleclass='{"parent":".su-input-actions-1","klass":"su-js-show"}' role="textbox" required required value="" placeholder="Martin">
				<div class="su-input-actions-area">
					<button type="button" class="su-input-action" data-ofemptyinput>
						<i class="su-icon">vider</i>
					</button>
				</div>
			</div>
		</div>
		<!------------------------------------------------------------------------------------------------------------------------------------>
		<div class="su-margin-top-m">
			<label for="prenom">Prénom</label>
			<div class="su-input-actions-1">
				<input id="prenom" name="prenom" type="text" data-oftoggleclass='{"parent":".su-input-actions-1","klass":"su-js-show"}' role="textbox" required required value="" placeholder="Dupont">
				<div class="su-input-actions-area">
					<button type="button" class="su-input-action" data-ofemptyinput>
						<i class="su-icon">vider</i>
					</button>
				</div>
			</div>
		</div>
		<!------------------------------------------------------------------------------------------------------------------------------------>
		<div class="su-margin-top-m">
			<label for="profession">Profession</label>
			<div class="su-input-actions-1">
				<div class="su-select">
					<select id="select1" name="select1" required>
					    <option value="" disabled selected hidden></option>
					    <option value="Seigneur">Seigneur</option>
					    <option value="Chevalier">Chevalier</option>
					    <option value="Charron">Charron</option>
					    <option value="Sabotier">Sabotier</option>
					    <option value="Serf">Serf</option>
					</select>
				</div>
			</div>
		</div>
		<!------------------------------------------------------------------------------------------------------------------------------------>
		<div class="su-margin-top-m su-error">
			<label for="mail">Email</label>
			<div class="su-input-actions-1">
				<input id="mail" name="mail" type="email" data-oftoggleclass='{"parent":".su-input-actions-1","klass":"su-js-show"}' role="textbox" required required value="" placeholder="martin.dupont@domaine.fr">
				<div class="su-input-actions-area">
					<button type="button" class="su-input-action" data-ofemptyinput>
						<i class="su-icon">vider</i>
					</button>
				</div>
			</div>
			<div class="su-error-message"><i class="su-icon-mini">alerte-mini</i> Message d’erreur</div>
		</div>
		<!------------------------------------------------------------------------------------------------------------------------------------>
		<div class="su-margin-top-m">
			<label for="password">Mot de passe</label>
			<div class="su-input-actions-2">
				<input id="password" name="password" type="password" data-oftoggleclass='{"parent":".su-input-actions-2","klass":"su-js-show"}' role="textbox" required required value="">
				<div class="su-input-actions-area">
					<button type="button" class="su-input-action" data-ofemptyinput>
						<i class="su-icon">montrer</i>
					</button>
					<button type="button" class="su-input-action" data-ofemptyinput>
						<i class="su-icon">vider</i>
					</button>
				</div>
			</div>
		</div>
		<!------------------------------------------------------------------------------------------------------------------------------------>
		<div class="su-margin-top-m">
		    <div class="su-checkbox-area su-checkbox-column su-error">
		        <label for="checkbox1"><input type="checkbox" id="checkbox1" name="content" value="content" checked>J’accepte les conditions générales de vente</label>
		    </div>
		    <div class="su-error-message"><i class="su-icon-mini">alerte-mini</i> Message d’erreur</div>
		</div>
		<!------------------------------------------------------------------------------------------------------------------------------------>
		<div class="su-margin-top-m su-margin-bottom-xl su-text-right">
			<button class="su-button su-primary">Envoyer</button>
		</div>
		<!------------------------------------------------------------------------------------------------------------------------------------>
		<!------------------------------------------------------------------------------------------------------------------------------------>
		<!------------------------------------------------------------------------------------------------------------------------------------>
		<div style="position: absolute; top: 0; bottom: 70%; right: -220px; width: 200px; padding: 20px; border: 1px solid #d4d4d4">
			<div style="position: absolute; top: 10px; right: 10px;">
				<i class="su-icon">fermer</i>
			</div>
			<p>Faux bloc</p>
		</div>
	</section>
</main>
