# Paginations / Paginations




<div class="sipaui">
	<nav id="pagination01">
		<ul class="surcharge-storybook su-pagination su-rich">
		    <li class="su-pagination-item su-page-link"><a href="#">1</a></li>
		    <li class="su-pagination-item su-page-link"><a href="#"><i class="su-icon">precedent</i></a></li>
		    <li class="su-pagination-item su-page-select">
		    	<button data-sutoggleclass='{"sel":"#pagination01","klass":"su-pages-list-in"}'>3<i class="su-icon">fleche_bas</i></button>
		    	<ul class="surcharge-storybook su-pages-list">
				    <li><a href="#">1</a></li>
				    <li><a href="#">2</a></li>
				    <li class="su-page-active"><a href="#">3</a></li>
				    <li><a href="#">4</a></li>
				    <li><a href="#">5</a></li>
				    <li><a href="#">6</a></li>
				    <li><a href="#">7</a></li>
				</ul>
		    </li>
		    <li class="su-pagination-item su-page-link"><a href="#"><i class="su-icon">suivant</i></a></li>
		    <li class="su-pagination-item su-page-link"><a href="#">7</a></li>
		</ul>
	</nav>
</div>

<div class="sipaui">
	<nav id="pagination02">
		<ul class="surcharge-storybook su-pagination su-rich">
		    <li class="su-pagination-item su-page-link"><a href="#">1</a></li>
		    <li class="su-pagination-item su-page-link"><a href="#"><i class="su-icon">precedent</i></a></li>
		    <li class="su-pagination-item su-page-select">
		    	<button data-sutoggleclass='{"sel":"#pagination02","klass":"su-pages-list-in"}'>1<i class="su-icon">fleche_bas</i></button>
		    	<ul class="surcharge-storybook su-pages-list">
				    <li class="su-page-active"><a href="#">1</a></li>
				    <li><a href="#">2</a></li>
				    <li><a href="#">3</a></li>
				    <li><a href="#">4</a></li>
				    <li><a href="#">5</a></li>
				    <li><a href="#">6</a></li>
				    <li><a href="#">7</a></li>
				    <li><a href="#">8</a></li>
				    <li><a href="#">9</a></li>
				    <li><a href="#">10</a></li>
				    <li><a href="#">20</a></li>
				    <li><a href="#">30</a></li>
				    <li><a href="#">40</a></li>
				    <li><a href="#">50</a></li>
				    <li><a href="#">60</a></li>
				    <li><a href="#">70</a></li>
				    <li><a href="#">80</a></li>
				    <li><a href="#">90</a></li>
				    <li><a href="#">100</a></li>
				    <li><a href="#">200</a></li>
				    <li><a href="#">300</a></li>
				    <li><a href="#">400</a></li>
				    <li><a href="#">500</a></li>
				    <li><a href="#">600</a></li>
				    <li><a href="#">700</a></li>
				    <li><a href="#">800</a></li>
				    <li><a href="#">900</a></li>
				    <li><a href="#">1000</a></li>
				    <li><a href="#">2000</a></li>
				</ul>
		    </li>
		    <li class="su-pagination-item su-page-link"><a href="#"><i class="su-icon">suivant</i></a></li>
		    <li class="su-pagination-item su-page-link"><a href="#">2045</a></li>
		</ul>
	</nav>
</div>


<div class="sipaui">
	<nav id="pagination03">
		<ul class="surcharge-storybook su-pagination su-rich">
		    <li class="su-pagination-item su-page-link"><a href="#">1</a></li>
		    <li class="su-pagination-item su-page-link"><a href="#"><i class="su-icon">precedent</i></a></li>
		    <li class="su-pagination-item su-page-select">
		    	<button data-sutoggleclass='{"sel":"#pagination03","klass":"su-pages-list-in"}'>1002<i class="su-icon">fleche_bas</i></button>
		    	<ul class="surcharge-storybook su-pages-list">
				    <li><a href="#">1001</a></li>
				    <li class="su-page-active"><a href="#">1002</a></li>
				    <li><a href="#">1003</a></li>
				    <li><a href="#">1004</a></li>
				    <li><a href="#">1005</a></li>
				    <li><a href="#">1006</a></li>
				    <li><a href="#">1007</a></li>
				    <li><a href="#">1008</a></li>
				    <li><a href="#">1009</a></li>
				    <li><a href="#">1010</a></li>
				    <li><a href="#">1020</a></li>
				    <li><a href="#">1030</a></li>
				    <li><a href="#">1040</a></li>
				    <li><a href="#">1050</a></li>
				    <li><a href="#">1060</a></li>
				    <li><a href="#">1070</a></li>
				    <li><a href="#">1080</a></li>
				    <li><a href="#">1090</a></li>
				    <li><a href="#">1100</a></li>
				    <li><a href="#">1200</a></li>
				    <li><a href="#">1300</a></li>
				    <li><a href="#">1400</a></li>
				    <li><a href="#">1500</a></li>
				    <li><a href="#">1600</a></li>
				    <li><a href="#">1700</a></li>
				    <li><a href="#">1800</a></li>
				    <li><a href="#">1900</a></li>
				    <li><a href="#">2000</a></li>
				</ul>
		    </li>
		    <li class="su-pagination-item su-page-link"><a href="#"><i class="su-icon">suivant</i></a></li>
		    <li class="su-pagination-item su-page-link"><a href="#">2045</a></li>
		</ul>
	</nav>
</div>



disabled pas su-page-active





## Accessibilité

Règles minimales&nbsp;:
- Chaque bouton doit avoir un "nom" explicite (`value` sur un input, texte dans les les balises `<button>` ou `<a>`).
- Si le bouton ne peut avoir ce nom explicite, lui ajouter un `aria-label` (ie&nbsp;: `aria-label="Fermer"` sur un bouton qui ne comporte que le "X").
- Si votre bouton n’est pas un bouton au sens HTML (ie&nbsp;: une balise `<a>`) il faut lui adjoindre `role="button"`.

Possibilité supplémentaire&nbsp;:
- utiliser l’attribut `aria-labelledby` (<a href="https://developer.mozilla.org/fr/docs/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-labelledby" target="_blank" rel="noopener">pour en savoir plus</a>)



- role="button"
- aria-readonly="true"
- role="dialog"
- aria-label="Fermer"
- aria-labelledby
- nav ?
