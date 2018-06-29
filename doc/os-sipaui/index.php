<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>POC OS/SIPAUI</title>

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="x-ua-compatible" content="ie=edge">

        <!-- Styles -->
        <link rel="stylesheet" media="all" href="css/oueststrap-of-base.css">
        <link rel="stylesheet" media="screen and (max-width: 979px)" href="css/oueststrap-of-small.css">
        <link rel="stylesheet" media="screen and (min-width: 980px)" href="css/oueststrap-of-medium.css">
        <link rel="stylesheet" media="screen and (min-width: 1280px)" href="css/oueststrap-of-large.css">

        <link rel="stylesheet" media="all" href="/dist/css/default-sipa-of.css">
        <link rel="stylesheet" media="screen and (min-width: 61.25em)" href="/dist/css/large-sipa-of.css">

    <style type="text/css"></style></head>
    <body>
        <header role="banner">
            <nav role="navigation">
                <a href="javascript:history.back()" style="display:block; margin: 20px;">&larr; Retour</a>
            </nav>
        </header>

        <main class="container su-editorial su-padding-b-standard" role="main">
        <h1>Test du passage progressif de Oueststrap à SipaUI sur les boutons</h1>

            </article>
                <h2>Boutons Oueststrap</h2>
                <!-- Boutons -->
                <h3>Inputs standards&nbsp;:</h3>
                <p>
                    <form>
                        <input class="btn btn-n2" type="reset" value="Clear" /> <input class="btn btn-n1" type="submit" value="Submit" />
                    </form>
                </p>

                <h3>Bouton &lt;a> sans autre classe&nbsp;:</h3>
                <p>
                    <a href="#" class="btn btn-n1">Bouton lien sans autre classe</a>
                </p>

                <h3>Bouton &lt;a> primary&nbsp;:</h3>
                <p>
                    <a href="#" class="btn btn-n1">Bouton lien primary</a>
                </p>

                <h3>Bouton &lt;a> secondary&nbsp;:</h3>
                <p>
                    <a href="#" class="btn btn-n2">Bouton secondary</a>
                </p>

                <h3>Bouton &lt;a> basic&nbsp;:</h3>
                <p style="padding-top:1rem; background: #efefef">
                    <a href="#" class="btn btn-n3-blanc">Bouton basic</a>
                </p>

                <h3>Bouton &lt;a> basic avec icone&nbsp;:</h3>
                <p>
                    <a href="#" class="btn btn-n3-blanc btn-n3-icone"><span class="icon icon-fete-locale"></span>Bouton basic avec icone</a>
                </p>

                <h3>Bouton &lt;a> basic léger&nbsp;:</h3>
                <p style="padding-top:1rem; background: #efefef">
                    <a href="#" class="btn btn-n3">Bouton lien basic léger</a>
                </p>

                <h3>Bouton &lt;a> basic petit</h3>

                <p id="id3">
                    <a href="javascript:;" class="btn btn-n3 btn-petit">Voir tous les articles</a>
                </p>

                <h3>Bouton abonnement&nbsp;:</h3>
                <p>
                <a href="#" class="btn btn-abonnement">Bouton abonnement</a>
                </p>

                <h3>Bouton premium&nbsp;:</h3>
                <p>
                <a href="#" class="btn btn-premium">Bouton premium</a>
                </p>

                <h3>Bouton premium blanc&nbsp;:</h3>
                <p style="padding-top:1rem; background: #dba504">
                    <a href="#" class="btn btn-premium-blanc">Bouton premium blanc</a>
                </p>
            </article>

            <article style="margin-top:40px; background: #eee">
                <h2>Boutons SipaUI</h2>
                <!-- Boutons -->
                <h3>Inputs standards&nbsp;:</h3>
                <p>
                    <form>
                        <input class="su-button su-secondary" type="reset" value="Clear" /> <input class="su-button su-primary" type="submit" value="Submit" />
                    </form>
                </p>

                <h3>Bouton &lt;a> sans autre classe que .su-button&nbsp;:</h3>
                <p>
                    <a href="#" class="su-button">Bouton lien sans autre classe</a>
                </p>

                <h3>Bouton primary disabled&nbsp;:</h3>
                <p>
                    <button disabled class="su-button su-primary su-disabled">Bouton lien primary</button>
                </p>

                <h3>Bouton &lt;a> secondary&nbsp;:</h3>
                <p>
                    <a href="#" class="su-button su-secondary">Bouton lien secondary</a>
                </p>

                <h3>Bouton &lt;a> basic&nbsp;:</h3>
                <p style="padding-top:1rem; background: #efefef">
                    <a href="#" class="su-button su-basic">Bouton lien basic</a>
                </p>

                <h3>Bouton &lt;a> basic avec icone&nbsp;:</h3>
                <p>
                    <a href="#" class="su-button su-basic"><span class=""></span>Bouton basic avec icone</a>
                </p>

                <h3>Bouton &lt;a> basic léger&nbsp;:</h3>
                <p style="padding-top:1rem; background: #efefef">
                    <a href="#" class="su-button su-basic su-light">Bouton lien basic léger</a>
                </p>

                <h3>Bouton &lt;a> basic petit</h3>
                <p id="id3">
                    <a href="javascript:;" class="su-button su-basic su-xsmall">Voir tous les articles</a>
                </p>

                <h3>Bouton abonnement&nbsp;:</h3>
                <p>
                <a href="#" class="su-button su-subscription">Bouton abonnement</a>
                </p>

                <h3>Bouton premium&nbsp;:</h3>
                <p>
                <a href="#" class="su-button su-premium">Bouton premium</a>
                </p>

                <h3>Bouton premium blanc&nbsp;:</h3>
                <p style="padding:1rem 0; background: #dba504">
                    <a href="#" class="su-button su-inverted su-premium">Bouton premium blanc</a>
                </p>
            </article>


        </main>
    </body>
</html>
