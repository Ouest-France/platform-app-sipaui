<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head.php");
    ?>
    <body class="sipaui">
        <header role="banner">
            <?php
            include(__DIR__."/_fragments/_identite.php");
            ?>

            <nav role="navigation">
                <?php
                $actif='installation';
                include(__DIR__."/_fragments/_nav.php");
                ?>
            </nav>
        </header>


        <main class="su-article su-old-editorial" role="main">

            <article class="conteneur" role="article">
                <h1>Installation</h2>

                <p>Il existe plusieurs méthodes pour récupérer SipaUI&nbsp;:</p>
                <ul>
                    <li>Récupération de l’intégralité du code sur <a href="https://github.com/Ouest-France/platform-app-sipaui" target="_blank" class="su-old-blank">GitHub</a> afin de l’intégrer avec son propre code et compiler le tout.</li>
                    <li>Appeler SipaUI distant directement dans sa page via un CDN.</li>
                    <li>Appeler des composants de SipaUI via npmjs.</li>
                </ul>

                <h2>cdn</h2>
                <p>La méthode la plus simple: inclure la librairie depuis le CDN:</p>
                <p>
                    <pre><code>&lt;link rel="stylesheet" href="https://cdn.sipaof.fr/css/main-sipaui-xxx.css"/></code></pre>
                    <pre><code>&lt;script async src="https://cdn.sipaof.fr/js/sipaui.js">&lt;/script></code></pre>
                </p>

                <h2>npmjs</h2>
                <p>Il est aussi possible de customiser selon vos besoins en passant par npm:</p>
                <p>
                    <pre><code>npm install sipaui</code></pre>
                </p>

                <h3>Exemple d'un composant Scss</h3>
                <p>
                    <pre><code>@import "sipaui/core/main";
@import "sipaui/button/main";</code></pre>
                </p>

                <h3>Et avec thème</h3>
                <p>
                    <pre><code>@import "sipaui/theme-[nom du theme].scss";
@import "sipaui/core";
@import "sipaui/button";</code></pre>
                </p>

                <h3>Exemple d'import vuejs</h3>
                <p>
                    <pre><code>require('sipaui/button');</code></pre>
                </p>

                <h3>Exemple d'un plugin js</h3>
                <p>
                    <pre><code>require("sipaui/core");
require("sipaui/toggle");</code></pre>
                </p>

                <h3>Exemple fonts local plutot que googlefonts</h3>
                <p>
                    <pre><code>$font-import-use-local: true;
                        @import "sipaui/core/main-sipaui";</code></pre>
                </p>

            </article>

        </main>
    </body>
</html>

