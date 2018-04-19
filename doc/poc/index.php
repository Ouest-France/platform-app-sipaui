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
            </nav>
        </header>

        <main class="su-editorial">
            <h2>Proof Of Concept</h2>

            <h3>La typo</h3>

            <p>Présentation du système de thèmes sur la typographie (titres, textes)&nbsp;:</p>
            <ul>
                <li><a href="texte-neutre.php">Typo sans thème</a></li>
                <li><a href="texte-of.php">Typo thème Ouest-France</a></li>
            </ul>

            <h3>Les objets HTML basiques&nbsp;:</h3>

            <p>Système de thèmes sur les objets de base (liens, listes, tableaux…)&nbsp;:</p>
            <ul>
                <li><a href="basiques-neutre.php">Objets basiques sans thème</a></li>
                <li><a href="basiques-of.php">Objets basiques thème Ouest-France</a></li>
            </ul>

            <h3>Les boutons</h3>

            <p>Système de thèmes sur les boutons&nbsp;:</p>
            <ul>
                <li><a href="boutons-neutre.php">Boutons sans thème</a></li>
                <li><a href="boutons-of.php">Boutons thème Ouest-France</a></li>
            </ul>
        </main>
    </body>
</html>
