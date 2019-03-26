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

                <ul class="su-old-not-list table">
                    <li class="row">
                        <div class="cell"><span class="version">1.0</span></div>
                        <ul class="cell">
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
                                    <li>Réorganisation des composants dans le catalogue.</li>
                                    <li>Mise en avant de l’installation.</li>
                                    <li>Mise à jour de l’installation et de l’archi fonctionnelle.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

            </article>

        </main>
    </body>
</html>
