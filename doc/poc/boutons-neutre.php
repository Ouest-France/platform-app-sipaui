<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head.php");
    ?>
    <body>
        <header>
            <?php
            include(__DIR__."/../_fragments/_titre.php");
            ?>

            <nav>
                <?php
                $actif='poc';
                include(__DIR__."/../_fragments/_nav.php");
                ?>
                <ul class="su-horizontal sous-menu">
                <li><a href="boutons-neutre.php" class="actif">Boutons sans thème</a></li>
                <li><a href="boutons-of.php">Boutons thème Ouest-France</a></li>
            </ul>
            </nav>
        </header>

        <main>

            <?php
            $template='neutres';
            include(__DIR__."/_fragments/_contenu-boutons.php");
            ?>

        </main>
    </body>
</html>
