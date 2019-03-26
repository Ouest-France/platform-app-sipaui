<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head.php");
    ?>
    <body class="sipaui journal">
        <header role="banner">
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

        <main class="su-article su-old-editorial" role="main">

            <article class="su-container plan-versions" role="article">
                <h1>Journal des modifications&nbsp;/ changelog</h1>

                <ul class="su-old-not-list su-grid-auto su-wrap su-row su-has-gutter">
                    <li class="su-col table-row">
                        <div class="table-cell"><span class="version">1.0</span></div>
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

                    <li class="su-col table-row">
                        <div class="table-cell"><span class="version">1.1</span></div>
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
                </ul>

            </article>

        </main>
    </body>
</html>
