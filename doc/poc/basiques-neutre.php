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
                    <li><a href="basiques-neutre.php" class="actif">Objets basiques sans thème</a></li>
                    <li><a href="basiques-of.php">Objets basiques thème Ouest-France</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <h2>Objets basiques neutres</h2>
            <h3>Standards</h3>

        </main>
    </body>
</html>
