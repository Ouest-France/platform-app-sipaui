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
                    <li><a href="texte-neutre.php" class="actif">Textes sans thème</a></li>
                    <li><a href="texte-of.php">Textes thème Ouest-France</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <h2>Textes neutres</h2>

            <h3>Titres</h3>

            <p class="su-h1">Titre <code>h1</code> ou <code>class="su-h1"</code></p>
            <p class="su-h2">Titre <code>h2</code> ou <code>class="su-h2"</code></p>
            <p class="su-h3">Titre <code>h3</code> ou <code>class="su-h3"</code></p>
            <p class="su-h4">Titre <code>h4</code> ou <code>class="su-h4"</code></p>
            <p class="su-h5">Titre <code>h5</code> ou <code>class="su-h5"</code></p>
            <p class="su-h6">Titre <code>h6</code> ou <code>class="su-h6"</code></p>

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
