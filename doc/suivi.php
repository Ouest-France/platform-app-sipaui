<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head.php");
    ?>
    <body>
        <header role="banner">
            <?php
            include(__DIR__."/_fragments/_identite.php");
            ?>

            <nav role="navigation">
                <?php
                $actif='suivi';
                include(__DIR__."/_fragments/_nav.php");
                ?>
            </nav>
        </header>

        <main class="su-editorial su-padding-b-standard" role="main">

            <article class="conteneur integre" role="article">
                <h1>Liste des composants intégrés</h1>

                <ul class="su-not-list">
                	<li>
                	    <h2>Boutons</h2>
                	    <ul>
                	    	<li>Bouton primaire</li>
                	    	<li>Bouton secondaire</li>
                	    	<li>Bouton pleine largeur</li>
                	    	<li>Bouton pleine largeur Mobile</li>
                	    	<li>Petit bouton</li>
                	    	<li>Bouton Abonnement</li>
                	    	<li>Bouton Premium</li>
                	    </ul>
                	</li>
                </ul>
            </article>

            <article class="conteneur plan-versions" role="article">
                <h1>Plan de versions prévisionnel</h1>

                <ul class="su-not-list">
                	<li>
                	    <div class="cell"><span class="version">0.1.0</span></div>
                	    <div class="cell"><span class="fait">Boutons standards (primaire et secondaire), boutons Abonnement et Premium</span></div>
                    </li>
                	<li>
                	    <div class="cell"><span class="version">0.2.0</span></div>
                	    <div class="cell">Champs texte standards (input text, mail, tél… + textarea), input mot de passe</div>
                    </li>
                	<li>
                	    <div class="cell"><span class="version">0.3.0</span></div>
                	    <div class="cell">Bouton radio standard, checkbox standard, select, interrupteur, input file, liens</div>
                    </li>
                	<li>
                	    <div class="cell"><span class="version">0.4.0</span></div>
                	    <div class="cell">Loader, input avec loader, champ d’inscription, champ de recherche statique avec auto-complete (+ champ de recherche dynamique ?)</div>
                    </li>
                	<li>
                	    <div class="cell"><span class="version">0.5.0</span></div>
                	    <div class="cell">Stepper, fil d'ariane, popin, pagination, onglets, accordéons</div>
                    </li>
                	<li>
                	    <div class="cell"><span class="version">0.6.0</span></div>
                	    <div class="cell">Carrousels, tooltips</div>
                    </li>
                	<li>
                	    <div class="cell"><span class="version">1.0.0</span></div>
                	    <div class="cell">Début des composants éditoriaux (titraille, grille…)</div>
                    </li>
                </ul>
            </article>

        </main>
    </body>
</html>
