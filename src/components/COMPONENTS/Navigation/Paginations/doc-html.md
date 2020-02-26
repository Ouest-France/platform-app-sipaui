# Paginations / Paginations



## Pagination pauvre

<div class="sipaui">
	<nav>
		<ul class="surcharge-storybook su-pagination">
		    <li class="su-page-item su-page-link"><a href="#">1</a></li>
		    <li class="su-page-item su-page-link"><a href="#">2</a></li>
		    <li class="su-page-item su-page-link"><a href="#">3</a></li>
		    <li class="su-page-item su-page-active"><span>4</span></li>
		    <li class="su-page-item su-page-link"><a href="#">5</a></li>
		</ul>
	</nav>
</div>

## Pagination riche

<div class="sipaui">
	<nav>
		<ul class="surcharge-storybook su-pagination">
		    <li class="su-page-item su-page-link"><a href="#">1</a></li>
		    <li class="su-page-item su-page-link"><a href="#">Précédent</a></li>
		    <li class="su-page-item su-page-active"><a href="#">22</a></li>
		    <ul class="surcharge-storybook">
			    <li class="su-page-link"><a href="#">10</a></li>
			    <li class="su-page-link"><a href="#">20</a></li>
			    <li class="su-page-link"><a href="#">21</a></li>
			    <li class="su-page-link"><a href="#">22</a></li>
			    <li class="su-page-link"><a href="#">23</a></li>
			    <li class="su-page-link"><a href="#">24</a></li>
			    <li class="su-page-link"><a href="#">25</a></li>
			    <li class="su-page-link"><a href="#">26</a></li>
			    <li class="su-page-link"><a href="#">27</a></li>
			    <li class="su-page-link"><a href="#">28</a></li>
			    <li class="su-page-link"><a href="#">29</a></li>
			    <li class="su-page-link"><a href="#">30</a></li>
			    <li class="su-page-link"><a href="#">40</a></li>
			</ul>
		    <li class="su-page-item su-page-link"><a href="#">Suivant</a></li>
		    <li class="su-page-item su-page-link"><a href="#">45</a></li>
		</ul>
	</nav>
</div>










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
