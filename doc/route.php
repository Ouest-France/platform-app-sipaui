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

                <ul class="su-old-not-list">
                    <li class="table-row">
                        <div class="table-cell"><span class="version">1.2</span></div>
                        <div class="table-cell">Stepper.</div>
                    </li>
                    <li class="table-row">
                        <div class="table-cell"><span class="version">1.3</span></div>
                        <div class="table-cell">Mot de passe.</div>
                    </li>
                    <li class="table-row">
                        <div class="table-cell"><span class="version">1.4</span></div>
                        <div class="table-cell">Popin.</div>
                    </li>
                    <li class="table-row">
                        <div class="table-cell"><span class="version">1.5</span></div>
                        <div class="table-cell">Pagination.</div>
                    </li>
                    <li class="table-row">
                        <div class="table-cell"><span class="version">1.6</span></div>
                        <div class="table-cell">Réseaux sociaux.</div>
                    </li>
                    <li class="table-row">
                        <div class="table-cell"><span class="version">1.7</span></div>
                        <div class="table-cell">Tags.</div>
                    </li>
                </ul>

            </article>

        </main>
    </body>
</html>
