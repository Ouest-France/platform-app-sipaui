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

                    <h3>Composants</h3>
                    <ul>
                    	<li>Boutons</li>
                    	<li>Titres</li>
                    	<li>Liens</li>
                    	<li>Champs texte (input texte, textarea)</li>
                    	<li>Boutons radio</li>
                    	<li>Cases à cocher</li>
                    	<li>Select simple</li>
                    </ul>

                    <h3>Fondations</h3>
                    <ul>
                    	<li>Points de rupture</li>
                    	<li>Grille</li>
                    	<li>Marges</li>
                    	<li>Texte standard</li>
                    	<li>Police d’icônes</li>
                    	<li>Helpers (classes d’aide)</li>
                    </ul>
                </section>

                <section class="plan-versions" role="article">
                    <h2>Journal des modifications</h2>

                    <ul class="su-old-not-list table">
                    	<li class="row">
                    	    <div class="cell"><span class="version">1.0</span></div>
                    	    <ul class="cell">
                        	    <li>Nouveaux composants&nbsp;: points de rupture et grille.</li>
                        	    <li>Réorganisation des composants dans le catalogue.</li>
                                <li>Améliorations graphiques et ergonomiques du catalogue.</li>
                                <li>Quelques corrections de composants.</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section class="plan-versions" role="article">
                    <h2>Plan de versions prévisionnel</h2>

                    <ul class="su-old-not-list table">
                        <li class="row">
                    	    <div class="cell"><span class="version">1.1</span></div>
                    	    <div class="cell">Listes, loader de page et mutualisation des "jaunes" Abonnement et Premium.</div>
                        </li>
                    	<li class="row">
                    	    <div class="cell"><span class="version">1.2</span></div>
                    	    <div class="cell">Stepper.</div>
                        </li>
                        <li class="row">
                    	    <div class="cell"><span class="version">1.3</span></div>
                    	    <div class="cell">Mot de passe.</div>
                        </li>
                    </ul>
                </section>
            </article>

        </main>
    </body>
</html>
