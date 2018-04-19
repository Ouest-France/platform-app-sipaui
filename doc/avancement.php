<!DOCTYPE html>
<html lang="fr">
    <?php
    include(__DIR__."/_fragments/_head.php");
    ?>
    <body>
        <header>
            <?php
            include(__DIR__."/_fragments/_titre.php");
            ?>

            <nav>
                <?php
                $actif='avancement';
                include(__DIR__."/_fragments/_nav.php");
                ?>
            </nav>
        </header>

        <main class="su-editorial">
            <h2>Suivi de l’avancement du projet</h2>

            <h3>Réunions d’avancement</h3>
            <div class="trop-large-responsif">
                <table class="su-table su-plus tableau-suivi">
                    <caption>Tableau des réunions par dates antichronologiques. En gris, interrogations résolues.</caption>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Validé</th>
                            <th>En interrogation</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td><time datetime="2018-03-15">12/04/2018</time></td>
                            <td>
                                <ol>
                                    <li>Afin de pouvoir avancer sur ce projet qui est assez attendu et peut devenir un point de blocage pour d’autres projets, il a été accepté que&nbsp;:
                                        <ul>
                                            <li>chaque semaine un jour minimum lui serait réservé</li>
                                            <li>sur cette journée, au minimum 1 intégrateur travaillera sur le projet et 1 designer pourra être sollicité</li>
                                            <li>des besoins UX, DEV ou OPS pourrait éventuellement être exprimés, on avisera au cas par cas</li>
                                            <li>sur les différents profils, il serait utile de faire tourner les personnes afin que tout le monde s’approprie l’outil ainsi que de l’enrichir de la vision de chacun
                                                <br />->&nbsp;le jour bloqué sera le jeudi.
                                                <br />->&nbsp;Corine Monnerie sera référante sur la partie Design et les membres du studio seront affectés au projet à tour de rôle.</li>
                                        </ul>
                                    </li>
                                    <li>Présentation de la nouvelle vision de sipaUI (cf. <a href="architecture.php">Architecture</a>).</li>
                                    <li>Après GitLab, un GitHub a été ouvert&nbsp;: <a href="https://github.com/ouest-france/sipaui" target="_blank" class="su-blank">github.com/ouest-france/sipaui</a>
                                        <br />Reste à le remplir…
                                    </li>
                                    <li>Vue.js.&nbsp;: après présentation du framework par OFM, il s’avère qu’il n’est pas vraiment adapté aux besoins d’un framework de composants graphiques. En effets les composants vue.js sont des composants au sens informatique, pas forcément au sens graphique. Du coup, sipaUI restera sur les technos JS présentes dans OuestStrap (jQuery + Vanilla).</li>
                                    <li>Pour avancer, une date de réunion sur les points de rupture sera fixée avec le studio, ainsi qu’une date pour avancer sur les composants graphiques (faire une liste des objets à créer et les classer par priorité).</li>
                                    <li>Document technique en cours&nbsp;: <a href="https://docs.google.com/document/d/12kJPyE8PlvCnfkdUXbfUci_c5qZUAvK82zpYEgcVqzk" target="_blank" class="su-blank">document Google</a></li>
                                </ol>
                            </td>
                            <td>
                                <ul>
                                    <li>Les points de rupture aujourd'hui en place sur SipaUI (480, 768, 980, 1280) ne répondent pas forcément au besoins du Studio.<br />
                                        -> à rediscuter. </li>
                                </ul>
                            </td>
                        </tr>
                        <!-- ---------------------------------------------------------------------->
                        <tr>
                            <td><time datetime="2018-03-15">15/03/2018</time></td>
                            <td>
                                <ul>
                                    <li>Périodicité des réunions&nbsp;: les jeudis, tous les 15 jours à 16h00.</li>
                                    <li>Rappel de la création du canal Slack #sipa-ui</li>
                                    <li>Présentation de l’architecture CSS en cours de réflexion (cf. colonne interrogations).</li>
                                    <li>Annonce d'une réunion prévue sur vue.js avec un représentant d‘OFM (Ouest-France Multimédia).</li>
                                    <li>Besoin de standardisations des composants entre le Studio et l’Intégration.<br />
                                        -> Planification d’une réunion pour avancer sur ce point.</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li class="resolu">Grosse inconnue technique sur la gestion des appels CSS et de leur inter-opérabilité&nbsp;: comment les blocs des Blocks Providers vont-ils intégrer leurs CSS dans le site (attention aux problèmes de performance)</li>
                                    <li class="resolu">Incompréhension sur le terme «&nbsp;composants&nbsp;»&nbsp;: pour l’équipe qui gère le Page-Builder, un composant a un sens technique différent («&nbsp;composants on the shelf&nbsp;») du sens donné par le Studio et l’Intégration. Du coup quel sera l’approche composants de sipaUI&nbsp;?</li>
                                </ul>
                            </td>
                        </tr>
                        <!-- ---------------------------------------------------------------------->
                        <tr>
                            <td><time datetime="2018-03-02">02/03/2018</time></td>
                            <td>
                                <ul>
                                    <li>Le nom du framework a été défini à SipaUI</li>
                                    <li>Préfixage : les classes utilisées par SipaUI seront toutes préfixées par «&nbsp;su-&nbsp;» ou par «&nbsp;su-js-&nbsp;» s'il s'agit d’une classe utilisée par du JS.</li>
                                    <li>Mise en place de ce site (non accessible de l’extérieur).</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li class="resolu">Nombre d’appels CSS dans le header&nbsp;:
                                        <ul>
                                            <li>2 (base/mobile + tablette/desktop/large),</li>
                                            <li>3 (base/mobile + phablette/tablette/ + desktop/large),</li>
                                            <li>ou 4 comme sur Ouest-France (base + mobile/phablette + tablette/desktop + large).</li>
                                        </ul>
                                        <p class="su-margin-0">La dernière solution présente l’inconvénient de faire charger 2 CSS (bloquantes) sur mobile, au lieu d’une seule, mais offre l’avantage d’avoir peu de phénomènes de surcharge.</p>
                                    </li>
                                    <li class="resolu">Périodicité des réunions&nbsp;:
                                        <ul>
                                            <li>tous les 15 jours ?</li>
                                            <li>Le jeudi&nbsp;?</li>
                                            <li>10h00, 16h00 ou 17h00&nbsp;?</li>
                                       </ul>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <!-- ---------------------------------------------------------------------->
                        <tr>
                            <td><time datetime="2018-02-15">15/02/2018</time></td>
                            <td>
                                <ul>
                                    <li>Le nom des composant sera en anglais, excepté pour des notions métier où le français pourrait être utilisé, si jamais le cas devait se présenter</li>
                                    <li>Le type de nommage des classes pour les composants s’appuiera sur <a href="https://semantic-ui.com" target="_blank" class="su-blank">SemanticUI</a>.</li>
                                </ul>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </body>
</html>
