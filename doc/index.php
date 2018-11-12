<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head.php");
    ?>
    <body class="accueil">
        <header role="banner">
            <?php
            include(__DIR__."/_fragments/_identite.php");
            ?>

            <nav role="navigation">
                <?php
                include(__DIR__."/_fragments/_nav.php");
                ?>
            </nav>
        </header>


        <main class="su-old-editorial su-padding-b-standard" role="main">
            <article class="presentation su-margin-b-large" role="article">
                <div class="conteneur">
                    <div class="titre">
                        <h1>SipaUI</h1>
                        <span class="version">0.2.5</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 565" class="illustration su-block-center su-margin-b-standard">
                        <style>.illustSipaUi{fill:#fff}</style><g id="Navigateur_coupé"><path class="illustSipaUi" d="M96.5 271.6h317v201.2c-1.1 1.5-2.2 3.1-3.4 4.6 26-33.9 41.4-76.3 41.4-122.4 0-111.3-90.2-201.5-201.5-201.5S48.5 243.7 48.5 355c0 49.8 18.1 95.4 48 130.5V271.6z" opacity=".5"/><path opacity=".2" fill="#fff" d="M96.5 271.6h316v35.9h-316z"/><circle cx="114.3" cy="290" r="5" opacity=".7" fill="#fff"/><circle cx="135" cy="290" r="5" opacity=".4" fill="#fff"/><circle cx="155.7" cy="290" r="5" opacity=".5" fill="#fff"/></g><path class="illustSipaUi" d="M443.5 273.3c-10.6-25-25.7-47.5-45-66.7-7.4-7.4-15.2-14.1-23.5-20.3V85h80c2 0 3.8-1.2 4.6-3.1.8-1.9.3-4-1.1-5.4l-20-20c-.9-.9-2.2-1.5-3.5-1.5h-17.1L353.2 1.2s-.1-.1-.2-.1c-.1-.1-.3-.2-.4-.3-.1-.1-.2-.1-.3-.2-.2-.1-.3-.2-.5-.2-.1 0-.2-.1-.3-.1-.2-.1-.4-.1-.5-.1-.1 0-.2 0-.2-.1-.3-.1-.5-.1-.8-.1-.3 0-.5 0-.8.1h-.2c-.2 0-.4.1-.5.1L184.2 55H95c-.8 0-1.5.2-2.2.5l-40 20c-2.1 1-3.2 3.4-2.6 5.6.5 2.3 2.5 3.9 4.9 3.9h192.5v60c-27.5.3-54.1 5.8-79.2 16.5-25 10.6-47.5 25.7-66.7 45-19.3 19.3-34.4 41.7-45 66.7C45.6 299.2 40 326.7 40 355s5.6 55.8 16.5 81.7c10.6 25 25.7 47.5 45 66.7 19.3 19.3 41.7 34.4 66.7 45 25.9 11 53.4 16.5 81.7 16.5s55.8-5.6 81.7-16.5c25-10.6 47.5-25.7 66.7-45 19.3-19.3 34.4-41.7 45-66.7 11-25.9 16.5-53.4 16.5-81.7s-5.4-55.8-16.3-81.7zM410 305H272.1c-1.2-.6-2.4-1.1-3.7-1.6v1.6h-4.9v-3.3c-3.5-1-7.2-1.6-11-1.8V275H410v30zm-162.5-5.1c-7 .3-13.6 2.1-19.6 5.1H100v-30h147.5v24.9zm-16.2 31h32.2V310h4.9V335.8h-37.1v-4.9zM252.5 155c25.6.3 50.1 5.4 72.5 14.5V265h-72.5V155zM118.7 70.1L128.8 60h2.7l10.1 10.1-9.9 9.9h-3.2l-9.8-9.9zm2.8 9.9h-12.7l6.3-6.3 6.4 6.3zm-6.4-13.4l-6.6-6.6h13.2l-6.6 6.6zm23.4-6.6h13.2l-6.6 6.6-6.6-6.6zm6.6 13.7l6.3 6.3h-12.7l6.4-6.3zm3.6-3.6L158.8 60h2.7l10.1 10.1-9.9 9.9h-3.2l-9.8-9.9zM168.5 60h13.2l-6.6 6.6-6.6-6.6zm6.6 13.7l6.3 6.3h-12.7l6.4-6.3zm3.6-3.6L188.8 60h2.7l10.1 10.1-9.9 9.9h-3.2l-9.8-9.9zM198.5 60h13.2l-6.6 6.6-6.6-6.6zm6.6 13.7l6.3 6.3h-12.7l6.4-6.3zm3.6-3.6L218.8 60h2.7l10.1 10.1-9.9 9.9h-3.2l-9.8-9.9zM228.5 60h13.2l-6.6 6.6-6.6-6.6zm6.6 13.7l6.3 6.3h-12.7l6.4-6.3zm3.6-3.6L248.8 60h2.7l10.1 10.1-9.9 9.9h-3.2l-9.8-9.9zM258.5 60h13.2l-6.6 6.6-6.6-6.6zm6.6 13.7l6.3 6.3h-12.7l6.4-6.3zm13.4 6.3l-9.9-9.9L278.8 60h2.7l10.1 10.1-9.9 9.9h-3.2zm10-20h13.2l-6.6 6.6-6.6-6.6zm6.6 13.7l6.3 6.3h-12.7l6.4-6.3zm13.4 6.3l-9.9-9.9L308.8 60h2.7l10.1 10.1-9.9 9.9h-3.2zm93-20l10.1 10.1-9.9 9.9h-3.2l-9.9-9.9L398.8 60h2.7zm7 0h13.2l-6.6 6.6-6.6-6.6zm6.6 13.7l6.3 6.3h-12.7l6.4-6.3zM370 80h-1.5l-9.9-9.9L368.8 60h2.7l10.1 10.1-9.9 9.9H370zm-40 170.6v-31l.2-.2 15.8 15.8-15.8 15.8-.2-.4zm0 9l.2-.2 5.6 5.6H330v-5.4zm14.4 5.4l-9.9-9.9 15.8-15.8 15.8 15.8-9.9 9.9h-11.8zm10.1-29.9l15.5-15.5v31l-15.5-15.5zm-4.3-4.2l-15.8-15.8 15.8-15.8 15.8 15.8-15.8 15.8zm-20-20l-.2-.2v-31l.2-.2 15.8 15.8-15.8 15.6zm4.3-35.8l1-1c7 3.3 13.8 7.1 20.4 11.1l-5.6 5.6-15.8-15.7zm8.5-8.4l7.3-7.3 15.8 15.8-2.9 2.9c-6.6-4.2-13.3-8-20.2-11.4zm-13-36.1V99.3l.1-.1 15.9 15.9-15.8 15.8-.2-.3zm20.2-11.2l15.8 15.8-15.8 15.8-15.8-15.8 15.8-15.8zm19.8 11.2l-15.5-15.5L370 99.6v31zm0 9v31l-15.5-15.5 15.5-15.5zm-19.8-28.7L334.3 95l10-10h11.9l10 10-16 15.9zM334.4 55L350 39.4 365.6 55h-31.2zm27.3 5l-6.6 6.6-6.6-6.6h13.2zm-20.2 0l10.1 10.1-9.9 9.9h-3.2l-9.9-9.9L338.8 60h2.7zm7.3 20l6.3-6.3 6.3 6.3h-12.6zm36.3-6.3l6.3 6.3h-12.7l6.4-6.3zm0-7.1l-6.6-6.6h13.2l-6.6 6.6zm-30.9-31.4l5.6-5.6 7.5 18.7-13.1-13.1zM350 31l-7.4-7.4L350 5l7.4 18.5L350 31zm-9.8-1.4l5.6 5.6-13.1 13.1 7.5-18.7zM331.7 60l-6.6 6.6-6.6-6.6h13.2zm-6.6 13.7l6.3 6.3h-12.6l6.3-6.3zM335.8 85l-5.7 5.7-.1-.1V85h5.8zm-5.8 54.6l.2-.2 15.8 15.8-8.8 8.8c-1.8-.8-3.6-1.6-5.5-2.4-.6-.2-1.2-.5-1.7-.7v-21.3zM364.6 265l5.4-5.4v5.4h-5.4zm5.4-54.4l-15.5-15.5 6.5-6.5c3.1 2 6.1 4.2 9 6.4v15.6zm-1.8-29.2l1.8-1.8v3l-1.8-1.2zm1.8-91.1l-5.3-5.3h5.3v5.3zM455 80h-26.5l-9.9-9.9L428.8 60h6.2l20 20zm-79.7-25L358 11.7 410 55h-34.7zM343.8 7.1l-19 47.6v.3H200L343.8 7.1zM95 60h6.5l10.1 10.1-9.9 9.9H55l40-20zm230 25v73.8c-23.1-8.9-47.5-13.5-72.5-13.8V85H325zM50 355c0-109.6 88.2-198.6 197.5-200v110H100c-5.5 0-10 4.5-10 10v200c-25.1-33.4-40-75-40-120zm200 200c-59.7 0-113.4-26.2-150-67.7V310h119.8c-12.1 9.1-19.8 23.6-19.8 39.9 0 21 12.9 38.9 31.3 46.4v-31.5h37.1v5h-32.2v28.3c4.4 1.3 9.1 2 13.9 2 27.6 0 50-22.4 50-50 0-16.3-7.8-30.7-19.8-39.9H410v165c-36.5 48.4-94.6 79.8-160 79.8zm170-94.6V275c0-5.5-4.5-10-10-10h-35v-66.1c45.7 36.7 75 93 75 156.1 0 38.7-11 74.8-30 105.4z" id="Certi_1_"/>
                    </svg>
                    <p class="baseline su-margin-b-large">Framework frontend (CSS et JS) de composants graphiques et de styles éditoriaux pour les sites du Groupe SIPA-Ouest‑France.</p>
                    <section class="intro su-justify">
                        <p>SipaUI vous permettra de construire vos sites <strong>SIPA</strong> ou vos blocs de contenu en responsif et «&nbsp;mobile-first&nbsp;», tout en l’adaptant au thème visuel de votre marque&nbsp;! SipaUI est un framework agnostique, un fichier de variables SASS vous permet de thématiser l’apparence des composants visuels en fonction de vos besoins.</p>
                        <p>Vous pourrez aussi utiliser/créer la version <strong>Vue.js</strong> d’un composant dans vos projets orientés <strong>application web</strong>.</p>
                    </section>
                </div>
            </article>
            <article class="conteneur">
                <h1>SipaUI sur Github&nbsp;!</h1>
                <p>Vous pouvez trouver le repository GIT de SipaUI à cette adresse&nbsp;: <a href="https://github.com/Ouest-France/platform-app-sipaui" target="_blank" class="su-old-blank">github.com/Ouest-France/platform-app-sipaui</a>.</p>
            </article>
        </main>
    </body>
</html>
