<!DOCTYPE html>
<html lang="fr">
	<?php
    include("assets/fragments/head.php");
    ?>
	<body>
    	<?php
        include("assets/fragments/header.php");
        ?>

    	<nav>
            <?php
            $actif='avancement';
            include("assets/fragments/nav.php");
            ?>
        </nav>

        <main class="su-editorial">
            <h2>Suivi de l’avancement du projet</h2>

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
            	</tbody>
            </table>

        </main>
	</body>
</html>
