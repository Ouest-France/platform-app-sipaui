<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head.php");
    ?>
    <body class="sipaui route">
        <header role="banner">
            <?php
            include(__DIR__."/_fragments/_identite.php");
            ?>

            <nav role="navigation">
                <?php
                $actif='route';
                include(__DIR__."/_fragments/_nav.php");
                ?>
            </nav>
        </header>

        <main class="su-article su-old-editorial" role="main">

            <article class="su-container plan-versions" role="article">
                <h1>Feuille de route&nbsp;/ roadmap</h1>

                <ul class="su-old-not-list table">
                    <li class="row">
                        <div class="cell"><span class="version">1.2</span></div>
                        <div class="cell">Stepper.</div>
                    </li>
                    <li class="row">
                        <div class="cell"><span class="version">1.3</span></div>
                        <div class="cell">Mot de passe.</div>
                    </li>
                    <li class="row">
                        <div class="cell"><span class="version">1.4</span></div>
                        <div class="cell">Popin.</div>
                    </li>
                    <li class="row">
                        <div class="cell"><span class="version">1.5</span></div>
                        <div class="cell">Pagination.</div>
                    </li>
                    <li class="row">
                        <div class="cell"><span class="version">1.6</span></div>
                        <div class="cell">Réseaux sociaux.</div>
                    </li>
                    <li class="row">
                        <div class="cell"><span class="version">1.7</span></div>
                        <div class="cell">Tags.</div>
                    </li>
                </ul>

            </article>

        </main>
    </body>
</html>
