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
                <li><a href="texte-neutre.php">Textes sans thème</a></li>
                <li><a href="texte-of.php" class="actif">Textes thème Ouest-France</a></li>
            </ul>
        </nav>

        <main>
            <h2>Textes Ouest-France</h2>
            <h3>Standards</h3>

            <h3>Titres</h3>

            <p class="h1">Titre <code>h1</code> ou <code>class="h1"</code></p>
            <p class="h2">Titre <code>h2</code> ou <code>class="h2"</code></p>
            <p class="h3">Titre <code>h3</code> ou <code>class="h3"</code></p>
            <p class="h4">Titre <code>h4</code> ou <code>class="h4"</code></p>
            <p class="h5">Titre <code>h5</code> ou <code>class="h5"</code></p>
            <p class="h6">Titre <code>h6</code> ou <code>class="h6"</code></p>

            <hr/><!--------------------------------------------------------------------------------- -->

            <h3>Paragraphe</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <hr/><!--------------------------------------------------------------------------------- -->

            <h3>Emphase</h3>

            <h4>Classe <code>class="su-important"</code></h4>

            <p>Lorem ipsum <span class="su-important">dolor sit amet</em>.</p>

            <h4>Gras <code>strong</code></h4>

            <p>Lorem ipsum <strong>dolor sit amet</strong>.</p>

            <h4>Italique <code>em</code></h4>

            <p>Lorem ipsum <em>dolor sit amet</em>.</p>

        </main>
    </body>
</html>
