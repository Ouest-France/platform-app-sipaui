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
                <li><a href="boutons-neutre.php">Boutons sans thème</a></li>
                <li><a href="boutons-of.php" class="actif">Boutons thème Ouest-France</a></li>
            </ul>
            </nav>
        </header>

        <main>

            <?php
            $template='Ouest-France';
            include(__DIR__."/_fragments/_contenu-boutons.php");
            ?>

        </main>
    </body>
</html>
