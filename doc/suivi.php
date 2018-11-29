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
                	<li>
                	    <h2>Champs texte</h2>
                	    <ul>
                	    	<li>Input text</li>
                	    	<li>Input tel</li>
                	    	<li>Input mail</li>
                	    	<li>…</li>
                	    	<li>Textarea</li>
                	    </ul>
                	</li>
                	<li>
                	    <h2>Liens standards</h2>
                	</li>
                </ul>
            </article>

            <article class="conteneur plan-versions" role="article">
                <h1>Plan de versions prévisionnel</h1>

                <ul class="su-old-not-list table">
                	<li class="row">
                	    <div class="cell"><span class="version">0.1.0</span></div>
                	    <div class="cell"><span class="fait">Boutons standards (primaire et secondaire), boutons Abonnement et Premium.</span></div>
                    </li>
                	<li class="row">
                	    <div class="cell"><span class="version">0.2.0</span></div>
                	    <div class="cell"><span class="fait">Champs texte standards (input text, mail, tél… + textarea), liens standards, helpers.</span></div>
                    </li>
                    <li class="row">
                	    <div class="cell"><span class="version">0.3.0</span></div>
                	    <div class="cell"><span class="fait">Bouton radio</span>, checkbox, select simple, marges, police d’icônes.</div>
                    </li>
                	<li class="row">
                	    <div class="cell"><span class="version">0.4.0</span></div>
                	    <div class="cell">Mot de passe.</div>
                    </li>
                	<li class="row">
                	    <div class="cell"><span class="version">0.5.0</span></div>
                	    <div class="cell">Loader, input avec loader.</div>
                    </li>
                	<li class="row">
                	    <div class="cell"><span class="version">0.6.0</span></div>
                	    <div class="cell">Stepper, pagination.</div>
                    </li>
                	<li class="row">
                	    <div class="cell"><span class="version">0.7.0</span></div>
                	    <div class="cell">Popins</div>
                    </li>
                    <li class="row">
                	    <div class="cell"><span class="version">0.8.0</span></div>
                	    <div class="cell">Accordéons</div>
                    </li>
                    <li class="row">
                	    <div class="cell"><span class="version">0.9.0</span></div>
                	    <div class="cell">Onglets</div>
                    </li>
                	<li class="row">
                	    <div class="cell"><span class="version">1.0.0</span></div>
                	    <div class="cell">Début des composants éditoriaux (titraille, grille…)</div>
                    </li>
                </ul>
            </article>

        </main>
    </body>
</html>
