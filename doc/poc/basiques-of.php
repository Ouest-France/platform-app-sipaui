<!DOCTYPE html>
<html lang="fr">
    <?php
    include("/doc/_fragments/_head-of.php");
    ?>
    <body>
        <?php
        include("/doc/_fragments/_header.php");
        ?>

        <nav>
            <?php
            $actif='poc';
            include("doc/_fragments/_nav.php");
            ?>
            <ul class="su-horizontal sous-menu">
                <li><a href="basiques-neutre.php">Objets basiques sans thème</a></li>
                <li><a href="basiques-of.php" class="actif">Objets basiques thème Ouest-France</a></li>
            </ul>
        </nav>

        <main>
            <h2>Objets basiques Ouest-France</h2>
            <h3>Standards</h3>

        </main>
    </body>
</html>
