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
                $actif='tech';
                include(__DIR__."/_fragments/_nav.php");
                ?>
            </nav>
        </header>


        <main class="su-old-editorial su-old-padding-b-standard" role="main">

            <article class="conteneur" role="article">
                <h1>Architecture Technique</h2>

                <h2>Contenu de SipaUi</h2>
                <p>Légende:
                <ul>
                    <li>les fichiers présent dans le <i class="noir">livrable</i></li>
                    <li>les éléments lié à l'explication du <i class="green">projet</i> et de la documentation</li>
                    <li>les fichiers nécéssaire à la génération du <i class="red">catalogue</i></li>
                </ul>
                </p>

                <pre class="noir">
<i class="green">src / </i>
    components /
        <i class="green">doc-design.md </i>
        <i class="green">doc-html.md </i>
        <i class="green">doc-vuejs.md </i>
        ( [component-name]-[theme-name].js )? > suivant resultat du poc Stephane
        [component-name].scss
        [component-name].vue.js

    core /
        _variables-[theme-name].scss
        _variables.scss
        _core.scss

dist /
    css / sipaui-xxx.css
    js  / sipaui-xxx.js

<i class="green">
doc /
    index
    [page-name].php</i>

<i class="green">src /</i>
    plugins /
        [plugin-name].js

<i class="red">storybook /
    config.js
    head.html </i>
                </pre>


            </article>

        </main>
    </body>
</html>
