<!DOCTYPE html>
<html lang="fr">
	<?php
    include("/doc/_fragments/_head-of.php");
    ?>
	<body>
    	<?php
        include("/doc/_fragments/_header.php");
        ?>

    	<nav>
        	<?php
            $actif='poc';
            include("doc/_fragments/_nav.php");
            ?>
        	<ul class="su-horizontal sous-menu">
        		<li><a href="boutons-neutre.php">Boutons sans thème</a></li>
        		<li><a href="boutons-of.php" class="actif">Boutons thème Ouest-France</a></li>
        	</ul>
        </nav>

        <main>
        	<h2>Boutons Ouest-France</h2>
        	<h3>Standards</h3>
        	<p>Chaque bouton a 4 états : normal (/ ou <code>link</code>), survolé (<code>hover</code>), cliqué (<code>active</code>) et visité (<code>visited</code>)</p>
        	<ul class="liste-boutons">
        		<li>
        		    <a class="su-button" href="#">Bouton <code>basic</code></a>
        		</li>
        		<li>
        		    <a class="su-button" href="#">Bouton <code>primary</code></a>
        		</li>
        		<li>
        		    <a class="su-button" href="#">Bouton <code>secondary</code></a>
        		</li>
        		<li>
        		    <a class="su-button" href="#">Bouton <code>featured</code></a>
        		</li>
        	</ul>
        	<h3>Tailles</h3>
        	<p>Chaque taille peut être appliquée à chaque type de bouton.</p>
        	<ul class="liste-boutons">
        		<li>
        		    <a class="su-button" href="#">Bouton <code>small</code></a>
        		</li>
        		<li>
        		    <a class="su-button" href="#">Bouton <code>medium</code></a>
        		</li>
        		<li>
        		    <a class="su-button" href="#">Bouton <code>big</code></a>
        		</li>
        	</ul>
        	<h3>Fluides</h3>
        	<ul class="liste-boutons">
        		<li>
        		    <a class="su-button" href="#">Bouton <code>fluid</code></a>
        		</li>
        		<li>
        		    <a class="su-button" href="#">Bouton <code>fluid-mobile</code></a>
        		</li>
        	</ul>
            <p>Positive, negative, icône seule, icône à gauche, icône à droite, circulaire</p>
        </main>
	</body>
</html>
