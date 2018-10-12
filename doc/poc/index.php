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

            <article class="conteneur" role="article">
                <h1 class="titre-doc">Proof Of Concept</h1>

                <h2 class="titre-doc">Les boutons</h2>

                 <?php
                $template='neutres';
                include(__DIR__."/_fragments/_contenu-boutons.php");
                ?>

            </article>

        </main>
    </body>
</html>
