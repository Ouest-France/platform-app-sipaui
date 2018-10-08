<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head.php");
    ?>
    <body>
        <header role="banner">
            <?php
            include(__DIR__."/../_fragments/_identite.php");
            ?>

            <nav role="navigation">
                <?php
                $actif='poc';
                include(__DIR__."/../_fragments/_nav.php");
                ?>
            </nav>
        </header>

        <main class="su-padding-b-standard" role="main">

            <article class="conteneur su-editorial" role="article">
                <h1>Proof Of Concept</h1>

                <h2>Les boutons</h2>

                <p>Système de thèmes sur les boutons&nbsp;:</p>
                <ul>
                    <li><a href="boutons-neutre.php">Boutons sans thème</a></li>
                    <li><a href="boutons-of.php">Boutons thème Ouest-France</a></li>
                </ul>
            </article>

        </main>
    </body>
</html>
