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

            <article class="conteneur">
                <h1>Boutons neutres</h1>
                <h2>Standards</h2>
                <p>Chaque bouton a 4 états : normal (/ ou <code>link</code>), survolé (<code>hover</code>), cliqué (<code>active</code>) et visité (<code>visited</code>)</p>
                <ul class="liste-boutons">
                    <li>
                        <a class="su-button" href="#">Bouton <code>basic</code></a>
                    </li>
                    <li>
                        <a class="su-button" href="#">Bouton <code>primary</code></a>
                    </li>
                    <li>
                        <a class="su-button" href="#">Bouton <code>secondary</code></a>
                    </li>
                    <li>
                        <a class="su-button" href="#">Bouton <code>featured</code></a>
                    </li>
                </ul>
                <h2>Tailles</h2>
                <p>Chaque taille peut être appliquée à chaque type de bouton.</p>
                <ul class="liste-boutons">
                    <li>
                        <a class="su-button" href="#">Bouton <code>small</code></a>
                    </li>
                    <li>
                        <a class="su-button" href="#">Bouton <code>medium</code></a>
                    </li>
                    <li>
                        <a class="su-button" href="#">Bouton <code>big</code></a>
                    </li>
                </ul>
                <h2>Fluides</h2>
                <ul class="liste-boutons">
                    <li>
                        <a class="su-button" href="#">Bouton <code>fluid</code></a>
                    </li>
                    <li>
                        <a class="su-button" href="#">Bouton <code>fluid-mobile</code></a>
                    </li>
                </ul>
                <p>Positive, negative, icône seule, icône à gauche, icône à droite, circulaire</p>
            </article>

        </main>
    </body>
</html>
