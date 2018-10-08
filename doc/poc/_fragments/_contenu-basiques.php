<article class="conteneur" role="article">

                <h1 class="titre-doc">Objets basiques <?php if($template==true) echo $template ?></h1>

                <h2 class="titre-doc">Liens</h2>
                <h3 class="titre-doc">Liens standards <code>a[href]</code></h3>
                <p><a href="#">Lien standard</a></p>

                <h3 class="titre-doc">Liens avec <code>a[target="_blank"]</code> + <code>.su-old-blank</code></h3>
                <p><a href="#" target="_blank" class="su-old-blank">Lien _blank</a></p>

                <h3 class="titre-doc">Liens neutres <code>.su-old-neutral-link</code></h3>
                <p><a href="#" class="su-old-neutral-link">Lien neutre</a></p>

                <h3 class="titre-doc">Liens voyants <code>.su-old-bright-link</code></h3>
                <p><a href="#" class="su-old-bright-link">Lien voyant</a></p>

                <hr/><!--------------------------------------------------------------------------------- -->

                <h2 class="titre-doc">Listes</h2>
                <h3 class="titre-doc">Liste base <code><code>ul</code></code> (ou <code>ul.su-old-not-list</code> si dans un bloc <code>.su-old-editorial ul</code>)</h3>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>

                <h3 class="titre-doc">Liste à puces <code>ul.su-old-list</code> ou <code>.su-old-editorial ul</code></h3>
                <ul class="su-old-list">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>

                <h3 class="titre-doc">Liste à puces à 2 niveaux <code>ul.su-old-list / ul</code> ou <code>.su-old-editorial ul / ul</code></h3>
                <ul class="su-old-list">
                    <li>
                        Item 1
                        <ul class="su-old-list">
                            <li>Item n2 1</li>
                            <li>Item n2 2</li>
                            <li>Item n2 3</li>
                        </ul>
                    </li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>

                <h3 class="titre-doc">Liste numérotée <code>ol.su-old-list</code></h3>
                <ol class="su-old-list">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                    <li>Item 10</li>
                    <li>Item 11</li>
                    <li>Item 12</li>
                </ol>

                <hr/><!--------------------------------------------------------------------------------- -->

                <h2 class="titre-doc">Tableaux</h2>
                <h3 class="titre-doc">Tableau de base <code>table</code></h3>
                <table summary="Résumé du tableau" class="su-old-margin-b-standard">
                	<caption>Légende du tableau</caption>
                	<thead>
                		<tr>
                			<th>En-tête de colonne 1</th>
                			<th>En-tête de colonne 2</th>
                		</tr>
                	</thead>
                	<tfoot>
                		<tr>
                			<th>Pied de colonne 1</th>
                			<th>Pied de colonne 2</th>
                		</tr>
                	</tfoot>
                	<tbody>
                		<tr>
                			<td>Celulle</td>
                			<td>Celulle</td>
                		</tr>
                		<tr>
                			<td>Celulle</td>
                			<td>Celulle</td>
                		</tr>
                		<tr>
                			<td>Celulle</td>
                			<td>Celulle</td>
                		</tr>
                		<tr>
                			<td>Celulle</td>
                			<td>Celulle</td>
                		</tr>
                		<tr>
                			<td colspan="2">Celulle fusionnée</td>
                		</tr>
                	</tbody>
                </table>

                <h3 class="titre-doc">Tableau designé avec <code>.su-old-table</code></h3>
                <table summary="Résumé du tableau" class="su-old-table su-old-margin-b-standard">
                	<caption>Légende du tableau</caption>
                	<thead>
                		<tr>
                			<th>En-tête de colonne 1</th>
                			<th>En-tête de colonne 2</th>
                		</tr>
                	</thead>
                	<tfoot>
                		<tr>
                			<th>Pied de colonne 1</th>
                			<th>Pied de colonne 2</th>
                		</tr>
                	</tfoot>
                	<tbody>
                		<tr>
                			<td>Celulle</td>
                			<td>Celulle</td>
                		</tr>
                		<tr>
                			<td>Celulle</td>
                			<td>Celulle</td>
                		</tr>
                		<tr>
                			<td>Celulle</td>
                			<td>Celulle</td>
                		</tr>
                		<tr>
                			<td>Celulle</td>
                			<td>Celulle</td>
                		</tr>
                		<tr>
                			<td colspan="2">Celulle fusionnée</td>
                		</tr>
                	</tbody>
                </table>

                <h3 class="titre-doc">Tableau designé avec <code>.su-old-table</code> + <code>.su-old-plus</code></h3>
                <table summary="Résumé du tableau" class="su-old-table su-old-plus su-old-margin-b-standard">
                	<caption>Légende du tableau</caption>
                	<thead>
                		<tr>
                			<th>En-tête de colonne 1</th>
                			<th>En-tête de colonne 2</th>
                		</tr>
                	</thead>
                	<tfoot>
                		<tr>
                			<th>Pied de colonne 1</th>
                			<th>Pied de colonne 2</th>
                		</tr>
                	</tfoot>
                	<tbody>
                		<tr>
                			<td>Celulle</td>
                			<td>Celulle</td>
                		</tr>
                		<tr>
                			<td>Celulle</td>
                			<td>Celulle</td>
                		</tr>
                		<tr>
                			<td>Celulle</td>
                			<td>Celulle</td>
                		</tr>
                		<tr>
                			<td>Celulle</td>
                			<td>Celulle</td>
                		</tr>
                		<tr>
                			<td colspan="2">Celulle fusionnée</td>
                		</tr>
                	</tbody>
                </table>

                <hr/><!--------------------------------------------------------------------------------- -->

                <h2 class="titre-doc">Citations</h2>
                <h3 class="titre-doc">Bloc <code>blockquote</code></h3>
                <blockquote cite="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote>

                <h3 class="titre-doc">Incise <code>p q</code></h3>
                <p>Lorem ipsum <q cite="#">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</q></p>

                <h3 class="titre-doc">Origine <code>p cite</code></h3>
                <p>Lorem ipsum <cite>Cite</cite></p>



                <hr/><!--------------------------------------------------------------------------------- -->

                <h2 class="titre-doc">Séparateur</h2>
                <h3 class="titre-doc">Balise <code>hr</code></h3>
                <hr/>

                <hr/><!--------------------------------------------------------------------------------- -->

                <h2 class="titre-doc">Code</h2>
                <h3 class="titre-doc">Balise <code>code</code> dans <code>p</code></h3>
                <p>Lorem ipsum <code>Code</code></p>

                <h3 class="titre-doc">Balise <code>pre</code></h3>
                <pre>Lorem ipsum</pre>

            </article>
