<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head.php");
    ?>
    <body class="sipaui installation">
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

            <article class="su-container" role="article">
                <h1>Installation</h1>

                <p>Il existe deux méthodes pour intégrer SipaUI à votre projet&nbsp;:</p>
                <ol>
                    <li>Appeler la version distante directement via un CDN.</li>
                    <li>Récupérer l’intégralité du code pour l’intégrer dans votre propre projet et compiler le tout.</li>
                </ol>

                <!-- ---------------–---------------–---------------–---------------–---------------–---------------–---------------–---------------– -->
                <h2 id="cdn">1. CDN</h2>
                <p>La méthode <strong>la plus simple</strong> (il n’y a rien à installer)&nbsp;: appeler la librairie dans vos pages depuis le <em>CDN (Content Delivery Network)</em> du groupe SIPA. Toutefois, cette méthode ne vous permet pas de choisir vos composants ni de leurs appliquer un thème.

                <h3>Import de la dernière version</h3>
                <p>Permet d’être toujours à jour, au risque de recevoir une version majeur avec de <strong>potentiels changements non rétro-compatibles</strong>…</p>
                <p>
                    <pre><code>&lt;link rel="stylesheet" href="https://cdn.sipaof.fr/sipaui/latest/css/main-sipaui.css" type="text/css" media="screen"/></code></pre>
                    <pre><code>&lt;script async src="https://cdn.sipaof.fr/sipaui/latest/js/sipaui.js">&lt;/script></code></pre>
                </p>

                <h3>Import d'une version figée</h3>
                <p>Oblige à faire les changements de version à la main.</p>
                <p>
                    <pre><code>&lt;link rel="stylesheet" href="https://cdn.sipaof.fr/sipaui/<?= $GLOBALS['sipaversion']; ?>/css/main-sipaui.css" type="text/css" media="screen"/></code></pre>
                    <pre><code>&lt;script async src="https://cdn.sipaof.fr/sipaui/<?= $GLOBALS['sipaversion']; ?>/js/sipaui.js">&lt;/script></code></pre>
                </p>

                <!-- ---------------–---------------–---------------–---------------–---------------–---------------–---------------–---------------– -->
                <h2 id="github">2. npmjs</h2>
                <p>La méthode <strong>la plus efficace</strong>&nbsp;: inclure la librairie dans votre projet pour qu'il en fasse partie intégrante et qu'il soit compilé avec. Cette méthode vous permettra de choisir les composants à intégrer ainsi que de personnaliser votre thème si nécessaire. Toutefois, vous devrez maîtriser Gulp (ou un autre préprocesseur) et comprendre au minimum le principe des variables SCSS. Par ailleurs, si vous voulez filtrer les composants, <strong>faites attention aux dépendances&nbsp;!</strong></p>
                <p>La dépôt npm est situé ici&nbsp;: <a href="https://www.npmjs.com/package/sipa-ui" target="_blank" class="su-old-blank">https://www.npmjs.com/package/sipa-ui</a>.</p>

                <h3>Méthodologie standard&nbsp;:</h3>
                    <ol>
                        <li><p>Récupérer le projet SipaUI en l’installant dans votre propre projet. Vous pouvez le faire via npm&nbsp;:
                            <pre><code>npm install sipa-ui</code></pre></p>
                            <p class="su-margin-bottom-s">Cela installera une dépendance dans votre dossier «&nbsp;node_modules&nbsp;».</p>
                        </li>
                        <li><p>Importer dans vos fichiers SCSS l’intégralité de ceux de notre framework ou bien juste les composants nécessaires (attention au dépendances). Vous pouvez le faire en appelant directement les fichiers présents dans «&nbsp;node_modules&nbsp;»&nbsp;:</p>
                            <ul>
                                <li>L’intégralité&nbsp;:
                                    <pre><code>@import "../node_modules/sipa-ui/src/core/scss/variables";
@import "../node_modules/sipa-ui/src/core/scss/mixins";
@import "../node_modules/sipa-ui/src/core/scss/main-sipaui";</code></pre>
                                </li>
                                <li>Exemple d’un composant&nbsp;:
                                    <pre><code>@import "../node_modules/sipa-ui/src/core/scss/variables";
@import "../node_modules/sipa-ui/src/core/scss/mixins";
@import "../node_modules/sipa-ui/src/components/COMPONENTS_Buttons/main";</code></pre>
                                </li>
                            </ul>
                            <p class="su-margin-top-0 su-margin-bottom-s">Ou vous pouvez aussi copier au préalable, avec un préprocesseur (comme Gulp), tous les fichiers de SipaUI dans vos propres assets et importer ensuite ceux-ci.</p>
                        </li>
                        <li>Configurer le préprocesseur de votre projet pour gérer la compilation…</li>
                    </ol>
                <p>Pour mieux comprendre le fonctionnement du framework, consultez l’<a href="architecture-fonctionnelle.php">architecture fonctionnelle</a>.


                <h3>Méthodologie avec un thème déjà créé à importer&nbsp;:</h3>
                <p>SipaUi intègre aujourd'hui un thème supplémentaire déjà fait, celui de «&nbsp;Voiles & voiliers&nbsp;». D’autres thèmes arriveront plus tard, au fur et à mesure des besoins.</p>
                <p>Pour utiliser un thème particulier dans votre projet, au point <strong>2.</strong> de la méthode standard, appelez le <em>main-sipaui</em> de ce thème&nbsp;:
                    <pre><code>@import "../node_modules/sipa-ui/src/core/scss/variables";
@import "../node_modules/sipa-ui/src/core/scss/mixins";
@import "../node_modules/sipa-ui/src/core/scss/main-sipaui-[mon-theme]";</code></pre>
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

