<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head-of.php");
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
                    <li><a href="texte-neutre.php">Textes sans thème</a></li>
                    <li><a href="texte-of.php" class="actif">Textes thème OF</a></li>
                </ul>
            </nav>
        </header>

        <main role="main" class="su-editorial su-padding-standard">

            <?php
            $template='Ouest-France';
            include(__DIR__."/_fragments/_contenu-texte.php");
            ?>

        </main>
    </body>
</html>
