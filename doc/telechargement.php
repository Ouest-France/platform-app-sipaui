<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head.php");
    ?>
    <body>
        <header role="banner">
            <?php
            include(__DIR__."/_fragments/_identite.php");
            ?>

            <nav role="navigation">
                <?php
                $actif='telechargement';
                include(__DIR__."/_fragments/_nav.php");
                ?>
            </nav>
        </header>


        <main class="su-old-editorial su-padding-b-standard" role="main">

            <article class="conteneur" role="article">
                <h1>Téléchargement</h2>


                <h2>cdn</h2>
                <p>La méthode la plus simple: inclure la librairie depuis le CDN:</p>
                <p>
                    <pre><code>&lt;link rel="stylesheet" href="https://sipaui.ouest-france.fr/cdn/sipaui-xxx.css"/></code></pre>
                    <pre><code>&lt;script async src="https://sipaui.ouest-france.fr/cdn/sipaui-xxx.js">&lt;/script></code></pre>
                </p>

                <h2>npmjs</h2>
                <p>Il est aussi possible de customiser selon vos besoins en passant par npm:</p>
                <p>
                    <pre><code>npm install sipaui</code></pre>
                </p>

                <h4>Exemple d'un composant Scss</h4>
                <p>
                    <pre><code>@import "sipaui/core";
@import "sipaui/button";</code></pre>
                </p>

                <h4>Et avec thème</h4>
                <p>
                    <pre><code>@import "sipaui/theme-[nom du theme].scss";
@import "sipaui/core";
@import "sipaui/button";</code></pre>
                </p>

                <h4>Exemple d'import vuejs</h4>
                <p>
                    <pre><code>require('sipaui/button');</code></pre>
                </p>

                <h4>Exemple d'un plugin js</h4>
                <p>
                    <pre><code>require("sipaui/core");
require("sipaui/toggle");</code></pre>
                </p>

            </article>

        </main>
    </body>
</html>
