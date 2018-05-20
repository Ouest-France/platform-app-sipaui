<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head-neutre.php");
    ?>
    <body>
        <header role="banner">
            <?php
            include(__DIR__."/../_fragments/_titre.php");
            ?>

            <nav role="navigation">
                <?php
                $actif='poc';
                include(__DIR__."/../_fragments/_nav.php");
                ?>
                <ul class="su-horizontal sous-menu">
                    <li><a href="texte-neutre.php" class="actif">Textes sans thème</a></li>
                    <li><a href="texte-of.php">Textes thème OF</a></li>
                </ul>
            </nav>
        </header>

        <main role="main" class="su-editorial su-padding-b-standard">

            <?php
            $template='neutres';
            include(__DIR__."/_fragments/_contenu-texte.php");
            ?>

        </main>
    </body>
</html>
