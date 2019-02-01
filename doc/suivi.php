<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head.php");
    ?>
    <body class="sipaui">
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

        <main class="su-article su-old-editorial" role="main">

            <article class="conteneur">
                <h1>Suivi de la création des composants</h1>
                <section class="integre" role="article">
                    <h2>Liste des composants intégrés</h2>

                    <ul>
                    	<li>Boutons</li>
                    	<li>Champs texte (input texte, textarea)
                    	<li>Liens</li>
                    	<li>Helpers (classes d’aide)</li>
                    	<li>Boutons radio</li>
                    	<li>Cases à cocher</li>
                    	<li>Select simple</li>
                    	<li>Marges</li>
                    	<li>Texte standard</li>
                    	<li>Titres</li>
                    	<li>Police d’icônes</li>
                    </ul>
                </section>

                <section class="plan-versions" role="article">
                    <h2>Plan de versions prévisionnel</h2>

                    <ul class="su-old-not-list table">
                    	<li class="row">
                    	    <div class="cell"><span class="version">1.0</span></div>
                    	    <div class="cell">Points de rupture et grille.</div>
                        </li>
                        <li class="row">
                    	    <div class="cell"><span class="version">1.1</span></div>
                    	    <div class="cell">Loader de page et listes.</div>
                        </li>
                    	<li class="row">
                    	    <div class="cell"><span class="version">1.2</span></div>
                    	    <div class="cell">Stepper.</div>
                        </li>
                        <li class="row">
                    	    <div class="cell"><span class="version">1.?</span></div>
                    	    <div class="cell">Mot de passe.</div>
                        </li>
                        <li class="row">
                    	    <div class="cell"><span class="version">1.?</span></div>
                    	    <div class="cell">Pagination.</div>
                        </li>
                        <li class="row">
                    	    <div class="cell"><span class="version">1.?</span></div>
                    	    <div class="cell">Popin.</div>
                        </li>
                    </ul>
                </section>
            </article>

        </main>
    </body>
</html>
