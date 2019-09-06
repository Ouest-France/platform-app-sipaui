<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head.php");
    ?>
    <body class="sipaui installation">
         <header role="banner" class="header">
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


        <main class="su-article" role="main">

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

                <h3>Import de la toute dernière version</h3>
                <p>Permet d’être toujours à jour, au risque de recevoir une version majeur avec de <strong>potentiels changements non rétro-compatibles</strong>…</p>
                <p>
                    <pre><code>&lt;link rel="stylesheet" href="https://cdn.sipaof.fr/sipaui/<strong>latest</strong>/css/main-sipaui.css" type="text/css" media="screen"/></code></pre>
                    <pre><code>&lt;script async src="https://cdn.sipaof.fr/sipaui/<strong>latest</strong>/js/sipaui.min.js">&lt;/script></code></pre>
                </p>

                <h3>Import d'une version majeure spécifique</h3>
                <p>Permet d’être toujours à jour sur une version majeur sans risquer de changements non rétro-compatibles…</p>
                <p>Il suffit de remplacer <code>3</code> par le numéro de version majeur voulu.</p>
                <p>
                    <pre><code>&lt;link rel="stylesheet" href="https://cdn.sipaof.fr/sipaui/<strong>3</strong>/css/main-sipaui.css" type="text/css" media="screen"/></code></pre>
                    <pre><code>&lt;script async src="https://cdn.sipaof.fr/sipaui/<strong>3</strong>/js/sipaui.min.js">&lt;/script></code></pre>
                </p>

                <h3>Import d'une version figée</h3>
                <p>Oblige à faire les changements de version à la main.</p>
                <p>Il suffit de remplacer <code><?= $GLOBALS['sipaversion']; ?></code> par le numéro de version détaillé voulu.</p>
                <p>
                    <pre><code>&lt;link rel="stylesheet" href="https://cdn.sipaof.fr/sipaui/<strong><?= $GLOBALS['sipaversion']; ?></strong>/css/main-sipaui.css" type="text/css" media="screen"/></code></pre>
                    <pre><code>&lt;script async src="https://cdn.sipaof.fr/sipaui/<strong><?= $GLOBALS['sipaversion']; ?></strong>/js/sipaui.min.js">&lt;/script></code></pre>
                </p>

                <p><strong>N.B.&nbsp;: la balise script est bien sûr à appeler en bas du <code>&lt;body></code>.</strong>

                <!-- ---------------–---------------–---------------–---------------–---------------–---------------–---------------–---------------– -->
                <h2 id="github">2. npmjs</h2>
                <p>La méthode <strong>la plus efficace</strong>&nbsp;: inclure la librairie dans votre projet pour qu'il en fasse partie intégrante et qu'il soit compilé avec. Cette méthode vous permettra de choisir les composants à intégrer ainsi que de personnaliser votre thème si nécessaire. Toutefois, <strong>vous devrez maîtriser un exécuteur de tâches (comme Gulp) et utiliser un préprocesseur SASS (fichiers SCSS au lieu de CSS)</strong>. Par ailleurs, si vous voulez filtrer les composants, <strong>faites attention aux dépendances&nbsp;!</strong> (Certains composants sont dépendants d’autres pour s'afficher correctement.)</p>
                <p>SipaUI est hébergé sur un dépôt NPM&nbsp;: <a href="https://www.npmjs.com/package/sipa-ui" target="_blank" class="blank">https://www.npmjs.com/package/sipa-ui</a>. On appelle cela un «&nbsp;paquet&nbsp;». Pour l’installer, il faut l’appeler avec un gestionnaire de paquets que vous devrez installer sur votre machine si vous n’en avez pas&nbsp;: NPM, Yarn…</p>

                <h3>Méthodologie standard&nbsp;:</h3>
                <p class="su-margin-bottom-m"><em>Les lignes de commande ci-dessous sont pour le gestionnaire de paquet standard NPM… À vous de les adapter à votre gestionnaire si vous en utilisez un autre.</em></p>
                    <ol>
                        <li><p><strong>Récupérer le projet SipaUI</strong> en l’installant dans votre propre projet.</p>
                            <p>Via un terminal&nbsp;:</p>
                            <pre><code>npm install sipa-ui</code></pre>
                            <p class="su-margin-bottom-s">Cela installera une dépendance à sipaUI et aux paquets dont il a besoin dans votre dossier «&nbsp;node_modules&nbsp;» à la racine de votre projet.</p>
                        </li>
                        <li><p><strong>Pour les  CSS.</strong></p>
                            <p>Importer dans vos fichiers SCSS l’intégralité de ceux de notre framework ou bien juste les composants nécessaires (attention au dépendances). Vous pouvez le faire en appelant directement les fichiers présents dans «&nbsp;node_modules&nbsp;»&nbsp;:</p>
                            <ul>
                                <li>Pour l’intégralité de SipaUI&nbsp;:
                                    <pre><code>@import "../node_modules/sipa-ui/src/core/scss/variables";
@import "../node_modules/sipa-ui/src/core/scss/mixins";
@import "../node_modules/sipa-ui/src/core/scss/main-sipaui";</code></pre>
                                </li>
                                <li>Pour un composant (le bouton plus sa dépendance aux classes d’aide)&nbsp;:
                                    <pre><code>@import "../node_modules/sipa-ui/src/core/scss/variables";
@import "../node_modules/sipa-ui/src/core/scss/mixins";
@import "../node_modules/sipa-ui/src/components/COMPONENTS/Inputs/Buttons/main";
@import "../node_modules/sipa-ui/src/components/UTILITIES/Helpers/main";</code></pre>
                                </li>
                            </ul>
                            <p class="su-margin-top-0 su-margin-bottom-s"><strong>Autre possibilité</strong>, vous pouvez aussi choisir de <strong>copier</strong> avec votre exécuteur de tâches <strong> tous les fichiers de SipaUI présents dans  «&nbsp;node_modules&nbsp;» vers vos propres assets et appeler ensuite ceux-ci dans vos fichiers SCSS</strong>.</p>
                        </li>
                        <li><p><strong>Pour le JS.</strong></p>
                            <p class="su-margin-bottom-s">Si vous ne souhaitez pas minifier le JS de SipaUI avec le vôtre, vous pouvez simplement utiliser la méthode du CDN ci-dessus. Dans le cas contraire, appliquez la même logique que pour les CSS.</p>
                        </li>
                        <li>Configurer le préprocesseur de votre projet pour gérer la compilation…</li>
                    </ol>
                <p>Pour mieux comprendre le fonctionnement du framework, consultez l’<a href="architecture-fonctionnelle.php">architecture fonctionnelle</a>.


                <h3>Méthodologie avec un thème déjà créé à importer&nbsp;:</h3>
                <p>SipaUi intègre aujourd'hui un thème supplémentaire déjà fait, celui de «&nbsp;<em>Voiles & voiliers</em>&nbsp;». D’autres thèmes arriveront plus tard, au fur et à mesure des besoins.</p>
                <p>Pour utiliser un thème particulier dans votre projet, au point <strong>2.</strong> de la méthode standard, appelez le <em>main-sipaui</em> de ce thème. Le nom du thème de Voiles & voiliers étant <em>vv</em>, cela donne&nbsp;:
                    <pre><code>@import "../node_modules/sipa-ui/src/core/scss/variables";
@import "../node_modules/sipa-ui/src/core/scss/mixins";
@import "../node_modules/sipa-ui/src/core/scss/main-sipaui-vv";</code></pre>
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

