<!DOCTYPE html>
<html lang="fr">
	<?php
    include("assets/fragments/head.php");
    ?>
	<body>
    	<header>
        	<?php
            include("assets/fragments/titre.php");
            ?>

            <nav>
                <?php
                $actif='avancement';
                include("assets/fragments/nav.php");
                ?>
            </nav>
        </header>

        <main class="su-editorial">
            <h2>Suivi de l’avancement du projet</h2>

            <h3>CR avancement</h3>
            <table class="su-table tableau-suivi">
            	<thead>
            		<tr>
            			<th>Date</th>
            			<th>Validé</th>
            			<th>En interrogation</th>
            		</tr>
            	</thead>
                <tbody>
            		<tr>
            			<td><time datetime="2018-02-15">15/02/2018</time></td>
            			<td>
                			<ul>
                                <li>Le nom des composant sera en anglais, excepté pour des notions métier où le français pourrait être utilisé, si jamais le cas devait se présenter</li>
                                <li>Le type de nommage des classes pour les composants s’appuiera sur <a href="https://semantic-ui.com" target="_blank" class="su-blank">SemanticUI</a>.</li>
                        	</ul>
        	            </td>
        	            <td></td>
            		</tr>
            		<tr>
            			<td><time datetime="2018-03-02">02/03/2018</time></td>
            			<td>
                			<ul>
                                <li>Le nom du framework a été défini à SipaUI</li>
                                <li>Préfixage : les classes utilisées par SipaUI seront toutes préfixées par «&nbsp;su-&nbsp;» ou par «&nbsp;su-js-&nbsp;» s'il s'agit d’une classe utilisée par du JS.</li>
                                <li>Mise en place de ce site (non accessible de l’extérieur).</li>
                        	</ul>
        	            </td>
        	            <td>
            	            <ul>
                                <li>Nombre d’appels CSS dans le header&nbsp;:
                                    <ul>
                                        <li>2 (base/mobile + tablette/desktop/large),</li>
                                        <li>3 (base/mobile + phablette/tablette/ + desktop/large),</li>
                                        <li>ou 4 comme sur Ouest-France (base + mobile/phablette + tablette/desktop + large).</li>
                                    </ul>
                                    <p class="su-margin-0">La dernière solution présente l’inconvénient de faire charger 2 CSS (bloquantes) sur mobile, au lieu d’une seule, mais offre l’avantage d’avoir peu de phénomènes de surcharge.</p>
		                        <li>Périodicité des réunions&nbsp;:
	                                <ul>
    	                                <li>tous les 15 jours ?</li>
    	                                <li>Le jeudi&nbsp;?</li>
    	                                <li>10h00, 16h00 ou 17h00&nbsp;?</li>
    	                           </ul>
                                </li>
                        	</ul>
        	            </td>
            		</tr>
            		<tr>
            			<td><time datetime="2018-03-15">15/03/2018</time></td>
            			<td>
                			<ul>
                                <li>Périodicité des réunions&nbsp;: les jeudis, tous les 15 jours à 16h00.</li>
                                <li>Rappel de la création du canal Slack #sipa-ui</li>
                                <li>Présentation de l’architecture CSS en cours de réflexion (cf. colonne interrogations).</li>
                                <li>Annonce d'une réunion prévue sur vue.js avec un représentant d‘OFM (Ouest-France Multimédia).</li>
                                <li>Besoin de standardisations des composants entre le Studio et l’Intégration.<br />
                                    -> Planification d’une réunion pour avancer sur ce point.</li>
                        	</ul>
        	            </td>
        	            <td>
            	            <ul>
                                <li>Grosse inconnue technique sur la gestion des appels CSS et de leur inter-opérabilité&nbsp;: comment les blocs des Blocks Providers vont-ils intégrer leurs CSS dans le site (attention aux problèmes de performance)</li>
                                <li>Incompréhension sur le terme «&nbsp;composants&nbsp;»&nbsp;: pour l’équipe qui gère le Page-Builder, un composant a un sens technique différent («&nbsp;composants on the shelf&nbsp;») du sens donné par le Studio et l’Intégration. Du coup quel sera l’approche composants de sipaUI&nbsp;?</li>
                                <li>Les points de rupture aujourd'hui en place sur SipaUI (480, 768, 980, 1280) ne répondent pas forcément au besoins du Studio.<br />
                                    -> à rediscuter. </li>
                            </ul>
        	            </td>
            		</tr>
            	</tbody>
            </table>




            <div class="su-hidden">
                <h4>A faire&nbsp;:</h4>
                <ul>
                	<li>Bug&nbsp;: pb hauteur HTML et Body à 100% de la fenêtre + margin sur  main inactif</li>
                	<li>Taille de texte sur mobile -> Corine, -wekkit-text-size-adjust ? font-size de HTML ? taille en vw ?</li>
                	<li>Carte&nbsp;: revoir le graphisme + intégrer la logique sans CSS autres…</li>
                	<li>Carte&nbsp;: ajouter entre () l’origine du fichier variable</li>
                	<li>Gérer la hauteur des boutons avec un height ou le padding&nbsp;?</li>
                	<li>Gulpfile&nbsp;: faire en sorte que le gulp prod compile avant + export et rename.</li>
                	<li>Faire un schéma en mode fichier ?</li>
                	<li>Vrai accueil</li>
                	<li>Cf. Github</li>
                	<li>Réparer le watch</li>
                	<li>Mettre sur Github</li>
                	<li>Mettre URL Github ici</li>
                </ul>
                <h4>ODJ prochaine réunion&nbsp;:</h4>
                <ul>
                	<li></li>
                </ul>
            </div>
        </main>
	</body>
</html>
