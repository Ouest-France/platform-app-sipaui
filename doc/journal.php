<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head.php");
    ?>
    <body class="sipaui journal">
         <header role="banner" class="header">
            <?php
            include(__DIR__."/_fragments/_identite.php");
            ?>

            <nav role="navigation">
                <?php
                $actif='journal';
                include(__DIR__."/_fragments/_nav.php");
                ?>
            </nav>
        </header>

        <main class="su-article" role="main">

            <article class="su-container plan-versions" role="article">
                <h1>Journal</h1>

                <div class="su-row">
                    <section class="su-col-lg-18">
                        <h2>Changelog</h2>

                        <ul class="su-not-list">
                            <li class="table-row">
                                <div class="table-cell"><span class="version">1.2.1</span></div>
                                <ul class="table-cell">
                                    <li>Composants&nbsp;:
                                        <ul>
                                            <li>Petit texte</li>
                                            <li>Boutons&nbsp;: largeur min de 120px au lieu de 140</li>
                                            <li>Stepper</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="table-row">
                                <div class="table-cell"><span class="version">1.1.6</span></div>
                                <ul class="table-cell">
                                    <li>Composants&nbsp;:
                                        <ul>
                                            <li>Listes</li>
                                            <li>Page loader</li>
                                            <li>Regroupement Abonnement et Premium</li>
                                        </ul>
                                    </li>
                                    <li>Documentation&nbsp;:
                                        <ul>
                                            <li>Réorganisation de ce site</li>
                                            <li>CDN par versions</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="table-row">
                                <div class="table-cell"><span class="version">1.0.12</span></div>
                                <ul class="table-cell">
                                    <li>Composants&nbsp;:
                                        <ul>
                                            <li>Fix&nbsp;: passage des mixins en kebab-case pour les rendre compatibles avec OuestStrap</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="table-row">
                                <div class="table-cell"><span class="version breaking">1.0.11</span></div>
                                <ul class="table-cell">
                                    <li>Composants&nbsp;:
                                        <ul>
                                            <li>Points de rupture</li>
                                            <li>Grille (standard et libre)</li>
                                            <li>Classes d’aide (clearfix, masquage, display…)</li>
                                            <li>Icônes</li>
                                            <li>Marges</li>
                                            <li>Texte standard</li>
                                            <li>Titre</li>
                                            <li>Liens</li>
                                            <li>Boutons</li>
                                            <li>Labels</li>
                                            <li>Cases à cocher</li>
                                            <li>Boutons radio</li>
                                            <li>Champs texte</li>
                                            <li>Listes déroulantes</li>
                                            <li>Erreurs</li>
                                        </ul>
                                    </li>
                                    <li>Documentation&nbsp;:
                                        <ul>
                                            <li>Réorganisation des composants dans le catalogue</li>
                                            <li>Mise en avant de l’installation</li>
                                            <li>Mise à jour de l’installation et de l’archi fonctionnelle</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section class="su-col-lg-6">
                        <h2>Roadmap</h2>

                        <ul class="su-not-list">
                            <li class="table-row">
                                <div class="table-cell"><span class="version breaking">2.0</span></div>
                                <div class="table-cell">La grille «&nbsp;md&nbsp;» passe de 6 à 24 colonnes.</div>
                            </li>
                            <li class="table-row">
                                <div class="table-cell"><span class="version">2.1</span></div>
                                <div class="table-cell">Mot de passe.</div>
                            </li>
                            <li class="table-row">
                                <div class="table-cell"><span class="version">2.2</span></div>
                                <div class="table-cell">Popin.</div>
                            </li>
                            <li class="table-row">
                                <div class="table-cell"><span class="version">2.3</span></div>
                                <div class="table-cell">Pagination.</div>
                            </li>
                            <li class="table-row">
                                <div class="table-cell"><span class="version">2.4</span></div>
                                <div class="table-cell">Réseaux sociaux.</div>
                            </li>
                            <li class="table-row">
                                <div class="table-cell"><span class="version">2.5</span></div>
                                <div class="table-cell">Tags.</div>
                            </li>
                        </ul>
                    </section>

                </div>
            </article>

        </main>
    </body>
</html>
