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
                <h1>Installation</h1>

                <p>Il existe deux méthodes pour intégrer SipaUI à votre projet&nbsp;:</p>
                <ol>
                    <li>Appeler SipaUI distant directement via un CDN.</li>
                    <li>Récupérer l’intégralité du code pour l’intégrer dans votre propre projet et compiler le tout.</li>
                </ol>

                <!-- ---------------–---------------–---------------–---------------–---------------–---------------–---------------–---------------– -->
                <h2 id="cdn">1. CDN</h2>
                <p>La méthode <strong>la plus simple</strong> (il n’y a rien à installer)&nbsp;: appeler la librairie dans vos pages depuis le <em>CDN (Content Delivery Network)</em> du groupe SIPA. Toutefois, cette
                <p>
                    <pre><code>&lt;link rel="stylesheet" href="https://cdn.sipaof.fr/css/main-sipaui.css" type="text/css" media="screen"/></code></pre>
                    <pre><code>&lt;script async src="https://cdn.sipaof.fr/js/sipaui.js">&lt;/script></code></pre>
                </p>

                <!-- ---------------–---------------–---------------–---------------–---------------–---------------–---------------–---------------– -->
                <h2 id="github">2. npmjs</h2>
                <p>La méthode <strong>la plus efficace</strong>&nbsp;: inclure la librairie dans votre projet pour qu'il en fasse partie intégrante et qu'il soit compilé avec. Cette méthode vous permettra de choisir les composants à intégrer ainsi que de personnaliser votre thème si nécessaire. Toutefois, vous devrez maîtriser Gulp et comprendre au minimum le principe des variables SCSS. Par ailleurs, si vous voulez filtrer les composants, <strong>faites attention aux dépendances&nbsp;!</strong></p>

                <h3>Méthodologie standard&nbsp;:</h3>
                    <ol>
                        <li>Récupérer le projet SipaUI en l’installant dans votre propre projet via npm&nbsp;: <pre><code>npm install sipa-ui</code></pre></li>
                        <li>Importer l’intégralité de SipaUI ou juste les composants nécessaires (attention au dépendances).
                            <ul>
                                <li>L’intégralité&nbsp;:
                                    <pre><code>@import "../node_modules/sipa-ui/src/core/variables";
@import "../node_modules/sipa-ui/src/core/mixins";
@import "../node_modules/sipa-ui/src/core/main-sipaui";</code></pre>
                                </li>
                                <li>Exemple d’un composant&nbsp;:
                                    <pre><code>@import "../node_modules/sipa-ui/src/core/variables";
@import "../node_modules/sipa-ui/src/core/mixins";
@import "../node_modules/sipa-ui/src/components/COMPONENTS_Buttons/main";</code></pre>
                                </li>
                            </ul>
                        </li>
                        <li>Configurer votre fichier Gulp pour gérer la compilation.</li>
                    </ol>
                <p>Pour mieux comprendre le fonctionnement du framework, consultez l’<a href="architecture-fonctionnelle.php">architecture fonctionnelle</a> et l’<a href="architecture-technique.php">architecture technique</a>.


                <h3>Méthodologie avec un thème déjà créé à importer&nbsp;:</h3>
                <p>Au point <strong>2.</strong> de la méthode standard,
                    <pre><code>@import "../node_modules/sipa-ui/src/core/variables";
@import "../node_modules/sipa-ui/src/core/mixins";
@import "../node_modules/sipa-ui/src/core/main-sipaui-[mon-theme]";</code></pre>
                </p>

                <!--h3>Exemple d'import vuejs</h3>
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
                </p-->

            </article>

        </main>
    </body>
</html>

