<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head-of.php");
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
                <ul class="su-old-horizontal sous-menu">
                <li><a href="boutons-neutre.php">Boutons sans thème</a></li>
                <li><a href="boutons-of.php" class="actif">Boutons thème OF</a></li>
            </ul>
            </nav>
        </header>

        <main role="main" class="su-old-padding-b-standard">

            <?php
            $template='Ouest-France';
            include(__DIR__."/_fragments/_contenu-boutons.php");
            ?>

        </main>
    </body>
</html>
