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
                                <div class="table-cell"><span class="version breaking">3.0.0</span></div>
                                <div class="table-cell">
                                    <p><strong>Breaking change&nbsp;!</strong></p>
                                    <ul>
                                        <li>Composants&nbsp;:
                                            <ul>
                                                <li class="breaking">Évol&nbsp;: grille, amélioration de la grille auto.</li>
                                                <li class="breaking">Évol&nbsp;: titres, </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="table-row">
                                <div class="table-cell"><span class="version">2.1.3</span></div>
                                <div class="table-cell">
                                    <ul>
                                        <li>Composants&nbsp;:
                                            <ul>
                                                <li>Petit select.</li>
                                                <li>Liens&nbsp;: prise en compte de &lt;a&gt; sans classe.</li>
                                                <li>Champs texte&nbsp;: prise en charge basique d’input search.</li>
                                            </ul>
                                        </li>
                                        <li>Documentation&nbsp;:
                                        <ul>
                                            <li>Passage à StoryBook 5 pour le catalogue de composants</li>
                                        </ul>
                                    </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="table-row">
                                <div class="table-cell"><span class="version breaking">2.0.4</span></div>
                                <div class="table-cell">
                                    <p><strong>Breaking change&nbsp;!</strong></p>
                                    <ul>
                                        <li>Composants&nbsp;:
                                            <ul>
                                                <li class="breaking">Évol&nbsp;: la grille «&nbsp;md&nbsp;» passe de 6 à 24 colonnes.</li>
                                                <li>Stepper</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="table-row">
                                <div class="table-cell"><span class="version">1.2.1</span></div>
                                <ul class="table-cell">
                                    <li>Composants&nbsp;:
                                        <ul>
                                            <li>Petit texte</li>
                                            <li>Mutualisation des sous-thèmes «&nbsp;abonnement&nbsp;» et «&nbsp;premium&nbsp;»</li>
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
                                <div class="table-cell"><span class="version">3.1</span></div>
                                <div class="table-cell">Mot de passe.</div>
                            </li>
                            <li class="table-row">
                                <div class="table-cell"><span class="version">3.2</span></div>
                                <div class="table-cell">Popin.</div>
                            </li>
                            <li class="table-row">
                                <div class="table-cell"><span class="version">3.3</span></div>
                                <div class="table-cell">Pagination.</div>
                            </li>
                        </ul>
                    </section>

                </div>
            </article>

        </main>
    </body>
</html>
