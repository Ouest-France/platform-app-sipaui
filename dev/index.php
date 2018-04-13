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
            $actif='archi';
            include("assets/fragments/nav.php");
            ?>
        </nav>


        <main class="su-editorial">
            <h2>Principes</h2>



            <div class="hidden">
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
