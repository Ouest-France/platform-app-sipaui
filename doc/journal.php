<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head.php");
    ?>
    <body class="sipaui journal">
         <header role="banner" class="header">
            <?php
            include(__DIR__."/_fragments/_identite.php");
            ?>

            <nav role="navigation">
                <?php
                $actif='journal';
                include(__DIR__."/_fragments/_nav.php");
                ?>
            </nav>
        </header>

        <main class="su-article" role="main">

            <article class="su-container plan-versions" role="article">
                <h1>Journal</h1>

                <div class="su-row">
                    <section class="su-col-lg-18">
                        <h2>Changelog</h2>

                        <ul class="su-not-list">
                            <li class="table-row">
                                <div class="table-cell"><span class="version"><?= $GLOBALS['sipaversion']; ?></span></div>
                                <div class="table-cell">
                                    <ul>
                                        <li>Composants&nbsp;:
                                            <ul>
                                                <li><strong>Nouveauté&nbsp;: chapeau (Components/Text/Standfirst).</strong></li>
                                                <li>Évolution&nbsp;: Titres dans une liste d’articles&nbsp;-> les <code>.su-h2</code> et <code>.su-h3</code> ne sont plus impactés par <code>.su-articles-list</code>.</li>
                                                <li>Évolution&nbsp;: Sources&nbsp;-> le poids sélecteur des liens de source surcharge maintenant celui des liens d’article.</li-->
                                                <li>Évolution&nbsp;: Mot de passe&nbsp;-> la fonction d’affichage du mot de passe (œil) apparaît après la saisie d’un premier caractère.</li-->
                                                <li>Évolution&nbsp;: Titres&nbsp;-> les titres dans les articles ne sont plus modifiés par <code>&lt;strong&gt;</code>, <code>&lt;b&gt;</code>, <code>&lt;em&gt;</code> ou <code>&lt;i&gt;</code>.</li>
                                                <li>Évolution&nbsp;: Liens&nbsp;-> ajout de la classe <code>.su-not-link</code> pour les cas où l’apparence de lien est gênante (ie&nbsp;: lien sur un bloc).</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="table-row">
                                <div class="table-cell"><span class="version">3.4.7</span></div>
                                <div class="table-cell">
                                    <ul>
                                        <li>Composants&nbsp;:
                                            <ul>
                                                <li><strong>Nouveauté&nbsp;: voile (Utilities/Veil).</strong></li>
                                                <li><strong>Nouveauté&nbsp;: pop-ins (Components/Notifiers/Pop-ins).</strong></li>
                                                <li>Évolution&nbsp;: liens&nbsp;/ Thème OF&nbsp;-> liens éditoriaux OF passent en rouge.</li>
                                                <li>Évolution&nbsp;: titres&nbsp;/ Thème OF&nbsp;-> H3 non-éditoriaux passent de 18 à 20px.</li>
                                                <li>Évolution&nbsp;: Classes d’aide&nbsp;-> ajout de la classe <code>.su-no-scroll</code>.</li>
                                                <li>Évolution&nbsp;: Sources&nbsp;-> gestion d’un lien sur une source.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="table-row">
                                <div class="table-cell"><span class="version">3.3.4</span></div>
                                <div class="table-cell">
                                    <ul>
                                        <li>Composants&nbsp;:
                                            <ul>
                                                <li><strong>Nouveauté&nbsp;: couleurs thématiques (Utilities/Colors).</strong></li>
                                                <li><strong>Nouveauté&nbsp;: couleurs de marques (Components/Identities/Brand-colors).</strong></li>
                                                <li>Évolution&nbsp;: grille, ajout d’une classe <code>.su-filling-…</code> pour permettre d’utiliser un nombre de colonnes «&nbsp;implicite&nbsp;» inférieur à celui attendu par la grille.</li>
                                                <li>Évolution&nbsp;: grille, possibilité de mettre les classes <code>.su-container</code> et <code>.su-row</code> au même niveau que <code>.sipaui</code>.</li>
                                                <li>Évolution&nbsp;: marges, ajout d’une nouvelle taille de marge à 50&nbsp;px.</li>
                                                <li>Évolution&nbsp;: liens éditoriaux OF passent en rouge.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="table-row">
                                <div class="table-cell"><span class="version">3.2.6</span></div>
                                <div class="table-cell">
                                    <ul>
                                        <li>Composants&nbsp;:
                                            <ul>
                                                <li><strong>Nouveauté&nbsp;: sources.</strong></li>
                                                <li><strong>Nouveauté&nbsp;: cocardes pour les sources journalistiques.</strong></li>
                                                <li>Évolution&nbsp;: typographie, ajout de la variable $font-weight-normale à 400 qui remplace $font-weight-medium quand elle était utilisée.</li>
                                            </ul>
                                        </li>
                                        <li>Documentation&nbsp;:
                                            <ul>
                                                <li>Mise à jour de la page d’installation.</li>
                                            </ul>
                                        </li>
                                        <li>Divers&nbsp;:
                                            <ul>
                                                <li>Suppression du téléchargement des dépendances du projet lors de l’installation via NPM.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="table-row">
                                <div class="table-cell"><span class="version">3.1.7</span></div>
                                <div class="table-cell">
                                    <ul>
                                        <li>Composants&nbsp;:
                                            <ul>
                                                <li><strong>Nouveauté&nbsp;: mot de passe.</strong></li>
                                                <li>Nouveauté&nbsp;: <code>&lt;hr&gt;</code>, <code>&lt;code&gt;</code>, <code>&lt;kbd&gt;</code>, <code>&lt;samp&gt;</code>&nbsp;: basique (pas dans le catalogue et non paramétrables).</li>
                                                <li>Évolution&nbsp;: texte standard (ajout d'une version <em>xsmall</em>).</li>
                                                <li>Évolution&nbsp;: icônes (ajout de <em>valide</em>, <em>invalide</em>, <em>bloqué (cadenas article payant)</em> et <em>débloqué (cadenas article payé)</em>).</li>
                                                <li>Évolution&nbsp;: gestion de l’anticrénelage (anti-aliasing) des textes sur Mac (quel que soit le navigateur).</li>
                                                <li>Évolution&nbsp;: les polices (Oswald et pictos) sont appelées par défaut sur notre CDN.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="table-row">
                                <div class="table-cell"><span class="version breaking">3.0.7</span></div>
                                <div class="table-cell">
                                    <p><strong>Breaking change&nbsp;!</strong></p>
                                    <ul>
                                        <li>Composants&nbsp;:
                                            <ul>
                                                <li class="breaking">Évolution&nbsp;: grille, amélioration de la grille auto.</li>
                                                <li>Évolution&nbsp;: titres, prise en compte des listes d’article.</li>
                                                <li>Évolution&nbsp;: réordonnancement de l’arborescence des composants.</li>
                                                <li>Évolution&nbsp;: amélioration du système de thèmes.</li>
                                                <li>Évolution&nbsp;: gestion de la hauteur de ligne du petit texte.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="table-row">
                                <div class="table-cell"><span class="version">2.1.3</span></div>
                                <div class="table-cell">
                                    <ul>
                                        <li>Composants&nbsp;:
                                            <ul>
                                                <li><strong>Nouveauté&nbsp;: petit select.</strong></li>
                                                <li>Évolution&nbsp;: liens, prise en compte de  <code>&lt;a&gt;</code> sans classe.</li>
                                                <li>Évolution&nbsp;: champs texte, prise en charge basique d’input search.</li>
                                            </ul>
                                        </li>
                                        <li>Documentation&nbsp;:
                                        <ul>
                                            <li>Passage à StoryBook 5 pour le catalogue de composants</li>
                                        </ul>
                                    </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="table-row">
                                <div class="table-cell"><span class="version breaking">2.0.4</span></div>
                                <div class="table-cell">
                                    <p><strong>Breaking change&nbsp;!</strong></p>
                                    <ul>
                                        <li>Composants&nbsp;:
                                            <ul>
                                                <li class="breaking">Évolution&nbsp;: la grille «&nbsp;md&nbsp;» passe de 6 à 24 colonnes.</li>
                                                <li><strong>Nouveauté&nbsp;: stepper</strong></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="table-row">
                                <div class="table-cell"><span class="version">1.2.1</span></div>
                                <ul class="table-cell">
                                    <li>Composants&nbsp;:
                                        <ul>
                                            <li><strong>Nouveauté&nbsp;: petit texte</strong></li>
                                            <li>Évolution&nbsp;: mutualisation des sous-thèmes «&nbsp;abonnement&nbsp;» et «&nbsp;premium&nbsp;»</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="table-row">
                                <div class="table-cell"><span class="version">1.1.6</span></div>
                                <ul class="table-cell">
                                    <li>Composants&nbsp;:
                                        <ul>
                                            <li><strong>Nouveauté&nbsp;: listes</strong></li>
                                            <li><strong>Nouveauté&nbsp;: page loader</strong></li>
                                            <li>Évolution&nbsp;: regroupement Abonnement et Premium</li>
                                        </ul>
                                    </li>
                                    <li>Documentation&nbsp;:
                                        <ul>
                                            <li>Réorganisation de ce site</li>
                                            <li>CDN par versions</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="table-row">
                                <div class="table-cell"><span class="version">1.0.12</span></div>
                                <ul class="table-cell">
                                    <li>Composants&nbsp;:
                                        <ul>
                                            <li>Fix&nbsp;: passage des mixins en kebab-case pour les rendre compatibles avec OuestStrap</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="table-row">
                                <div class="table-cell"><span class="version breaking">1.0.11</span></div>
                                <ul class="table-cell">
                                    <li>Composants&nbsp;:
                                        <ul>
                                            <li><strong>Points de rupture</strong></li>
                                            <li><strong>Grille</strong> (standard et libre)</li>
                                            <li><strong>Classes d’aide</strong> (clearfix, masquage, display…)</li>
                                            <li><strong>Icônes</strong></li>
                                            <li><strong>Marges</strong></li>
                                            <li><strong>Texte standard</strong></li>
                                            <li><strong>Titre</strong></li>
                                            <li><strong>Liens</strong></li>
                                            <li><strong>Boutons</strong></li>
                                            <li><strong>Labels</strong></li>
                                            <li><strong>Cases à cocher</strong></li>
                                            <li><strong>Boutons radio</strong></li>
                                            <li><strong>Champs texte</strong></li>
                                            <li><strong>Listes déroulantes</strong></li>
                                            <li><strong>Erreurs</strong></li>
                                        </ul>
                                    </li>
                                    <li>Documentation&nbsp;:
                                        <ul>
                                            <li>Réorganisation des composants dans le catalogue</li>
                                            <li>Mise en avant de l’installation</li>
                                            <li>Mise à jour de l’installation et de l’archi fonctionnelle</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section class="su-col-lg-6">
                        <h2>Roadmap</h2>

                        <ul class="su-not-list">
                            <li class="table-row">
                                <div class="table-cell"><span class="version">3.6</span></div>
                                <div class="table-cell">Accordéon.</div>
                            </li>
                            <li class="table-row">
                                <div class="table-cell"><span class="version">3.7</span></div>
                                <div class="table-cell">Pagination.</div>
                            </li>
                        </ul>
                    </section>

                </div>
            </article>

        </main>
    </body>
</html>
