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
                $actif='tech';
                include(__DIR__."/_fragments/_nav.php");
                ?>
            </nav>
        </header>


        <main class="su-article su-old-editorial" role="main">

            <article class="conteneur" role="article">
                <h1>Architecture Technique</h2>

                <h2>Contenu de SipaUI</h2>
                <p>Légende:
                <ul>
                    <li>les fichiers présent dans le <i class="livrable">livrable</i></li>
                    <li>les éléments lié à l'explication du <i class="documentation">projet</i> et de la documentation</li>
                    <li>les fichiers nécéssaire à la génération du <i class="catalogue">catalogue</i></li>
                </ul>
                </p>

                <pre class="livrable">
<i class="documentation">src / </i>
    components /
        [component-name]
            <i class="documentation">doc-design.md </i>
            <i class="documentation">doc-html.md </i>
            <i class="documentation">doc-vuejs.md </i>
            main-[theme-name].scss ?> suivant resultat du poc Stephane
            main.scss
            index.vue.js

    core /
        _variables-[theme-name].scss
        _variables.scss
        _core.scss

dist /
    css / sipaui-xxx.css
    js  / sipaui-xxx.js

<i class="documentation">
doc /
    index
    [page-name].php</i>

<i class="documentation">src /</i>
    plugins /
        [plugin-name].js

<i class="catalogue">storybook /
    config.js
    head.html </i>
                </pre>


            </article>

        </main>
    </body>
</html>
