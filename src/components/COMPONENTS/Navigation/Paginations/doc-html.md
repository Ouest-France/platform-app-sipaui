# Paginations / Paginations

Donec sed odio dui. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Donec sed odio dui. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

<div class="sipaui">
	<nav id="pagination01">
		<ul class="surcharge-storybook su-pagination su-rich">
		    <li class="su-pagination-item su-page-link"><a href="#">1</a></li>
		    <li class="su-pagination-item su-page-link"><a href="#"><i class="su-icon">precedent</i></a></li>
		    <li class="su-pagination-item su-page-active">
		    	<button data-sutoggleclass='{"sel":"#pagination01","klass":"su-pages-list-in"}'>22<i class="su-icon">fleche_bas</i></button>
		    	<ul class="surcharge-storybook su-pages-list">
				    <li><a href="#">10</a></li>
				    <li><a href="#">20</a></li>
				    <li><a href="#">21</a></li>
				    <li><a href="#">22</a></li>
				    <li><a href="#">23</a></li>
				    <li><a href="#">24</a></li>
				    <li><a href="#">25</a></li>
				    <li><a href="#">26</a></li>
				    <li><a href="#">27</a></li>
				    <li><a href="#">28</a></li>
				    <li><a href="#">29</a></li>
				    <li><a href="#">30</a></li>
				    <li><a href="#">40</a></li>
				</ul>
		    </li>
		    <li class="su-pagination-item su-page-link"><a href="#"><i class="su-icon">suivant</i></a></li>
		    <li class="su-pagination-item su-page-link"><a href="#">45</a></li>
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
