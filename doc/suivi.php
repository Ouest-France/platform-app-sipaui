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

            <article class="su-container">
                <h1>Suivi de la création des composants</h1>

                <div class="su-row">
                    <section class="su-col-md-3 su-col-lg-8 integre" role="article">
                        <h2>Liste des composants intégrés</h2>

                        <h3>Composants</h3>
                        <ul>
                        	<li>Titres</li>
                        	<li>Liens</li>
                        	<li>Listes</li>
                        	<li>Boutons</li>
                        	<li>Champs texte (input texte, textarea)</li>
                        	<li>Boutons radio</li>
                        	<li>Cases à cocher</li>
                        	<li>Select simple</li>
                        	<li>Loader de page</li>
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

                    <section class="su-col-md-3 su-col-lg-8 plan-versions" role="article">
                        <h2>Journal des modifications&nbsp;/ changelog</h2>

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
                            <li class="row">
                                <div class="cell"><span class="version">1.1</span></div>
                                <ul class="cell">
                                    <li>Listes.</li>
                                    <li>Loader de page.</li>
                                    <li>Mutualisation des "jaunes" Abonnement et Premium.</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section class="su-col-md-6 su-col-lg-8 plan-versions" role="article">
                        <h2>Feuille de route&nbsp;/ roadmap </h2>

                        <ul class="su-old-not-list table">
                            <li class="row">
                                <div class="cell"><span class="version">1.2</span></div>
                                <div class="cell">Stepper.</div>
                            </li>
                            <li class="row">
                                <div class="cell"><span class="version">1.3</span></div>
                                <div class="cell">Mot de passe.</div>
                            </li>
                            <li class="row">
                                <div class="cell"><span class="version">1.4</span></div>
                                <div class="cell">Popin.</div>
                            </li>
                        </ul>
                    </section>
                </div>

            </article>

        </main>
    </body>
</html>
