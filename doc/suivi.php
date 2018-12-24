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

        <main class="su-old-editorial su-padding-b-standard" role="main">

            <article class="conteneur integre" role="article">
                <h1>Liste des composants intégrés</h1>

                <ul>
                	<li>Boutons</li>
                	<li>Champs texte (input texte, textarea)
                	<li>Liens articles</li>
                	<li>Helpers (classes d’aide)</li>
                	<li>Boutons radio</li>
                	<li>Cases à cocher</li>
                	<li>Select simple</li>
                	<li>Marges</li>
                </ul>
            </article>

            <article class="conteneur plan-versions" role="article">
                <h1>Plan de versions prévisionnel</h1>

                <ul class="su-old-not-list table">
                    <li class="row">
                	    <div class="cell"><span class="version">0.5.0 ß</span></div>
                	    <div class="cell">Éléments typographiques de base (à définir), suite d’icônes.</div>
                    </li>
                	<li class="row">
                	    <div class="cell"><span class="version">1.0.0</span></div>
                	    <div class="cell">Grille.</div>
                    </li>
                    <li class="row">
                	    <div class="cell"><span class="version">1.1.0</span></div>
                	    <div class="cell">Mot de passe.</div>
                    </li>
                	<li class="row">
                	    <div class="cell"><span class="version">1.2.0</span></div>
                	    <div class="cell">Loader de page, loader de champ texte.</div>
                    </li>
                    <li class="row">
                	    <div class="cell"><span class="version">1.3.0</span></div>
                	    <div class="cell">Pagination.</div>
                    </li>
                    <li class="row">
                	    <div class="cell"><span class="version">1.4.0</span></div>
                	    <div class="cell">Stepper.</div>
                    </li>
                </ul>
            </article>

        </main>
    </body>
</html>
