# Links / Liens

Les liens permettent à l'utilisateur d'atteindre un autre endroit de la page, une autre page, un autre site ou un document non web.

## Usage

**Les liens rendent les actions visibles** et permettent aux utilisateurs d'effectuer une action.

## Types de liens

### Lien léger
- Un lien léger est **peu perceptible** et se trouve parmi un bloc de texte.
- Les informations fournies à l'utilisateur sont souvent légales.


Enabled | Hover / Focus / Pressed
------------ | ------------- |
![light-link__enabled](design/light-link__enabled.png) | ![light-link__hover](design/light-link__hover.png)
Hauteur du texte  <br> Largeur du texte <br> **Couleur de son contexte** <br> Taille de caractère de son contexte  <br> Graisse de son contexte <br> Police du thème <br> **Ligne sous le texte : couleur du contexte** | - <br> - <br> **Couleur : #B40015** <br> - <br> - <br> - <br> Ligne sous le texte : #B40015

### Lien article
- Un lien article se trouve **parmi un bloc de texte de type article.** Il apporte une information supplémentaire à celui-ci.
- Les informations fournies par un lien article sont plus impactantes que celles du lien léger.

Enabled | Hover / Focus / Pressed
------------ | ------------- |
![article-link__enabled](components/COMPONENTS/Text/Links/design/article-link__enabled.png) | ![article-link__hover](components/COMPONENTS/Text/Links/design/article-link__hover.png)
Hauteur du texte  <br> Largeur du texte <br> **Couleur : #E2001A** <br> Taille de caractère de son contexte  <br> **Graisse de son contexte** <br> Police du thème <br> Ligne sous le texte : #E2001A | - <br> - <br> **Couleur : #B40015** <br> - <br> - <br> - <br> Ligne sous le texte : #B40015

### Lien bouton
- Un lien bouton **se positionne comme un bouton** mais a l’apparence d’un lien. Son action est mineure par rapport aux boutons primaires et secondaires.
- Un tel lien ne peut donc pas être inclus dans du texte.

Enabled | Hover / Focus / Pressed | Disabled
------------ | ------------- | ------------- |
![button-link__enabled](components/COMPONENTS/Text/Links/design/button-link__enabled.png) | ![button-link__hover](components/COMPONENTS/Text/Links/design/button-link__hover.png) | ![button-link__disabled](components/COMPONENTS/Text/Links/design/button-link__disabled.png)
Hauteur : 44px  <br> Largeur du texte <br> **Couleur : #E2001A** <br> Taille de caractère : 16px <br> **Graisse : bold** <br> Police du thème | - <br> - <br> **Couleur : #B40015**  <br> - <br> - <br> - <br> Ligne sous le texte : #B40015 | Opacité : 40 %

Contrairement aux boutons primaires et secondaires, le lien bouton ne présente pas de padding et sa largeur minimale n'est pas définie.


## Bonnes pratiques
### Comportement

<div class="do-dont">
<div class="do">

![button-link__ex__button-do](components/COMPONENTS/Text/Links/design/button-link__ex__button-do.png)  |
------------ |
**Do**
<p class="legende">Si l'action modifie des données, utiliser un bouton.</p> |

 </div>

 <div class="dont">

![button-link__ex__enable-dont](components/COMPONENTS/Text/Links/design/button-link__ex__enable-dont.png)  |
------------ |
**Don’t**
<p class="legende">Si l'action modifie des données, ne pas utiliser un lien.</p> |

 </div>
 </div>

- Lorsque vous utilisez un bouton primaire et un bouton secondaire, le bouton primaire doit être placé à gauche. **Une exception s'applique dans le cas d'écran séquentiel**, le bouton primaire est à droite.


### Contenu

- Mettre le minimum de texte tout en expliquant clairement ce qui se passe lorsque ce lien est activé.
- Évitez les termes génériques tels que «Cliquez ici», «Ici», «En savoir plus» ou l'adresse Web qui ne fournissent pas d'information aux utilisateurs sur le contenu du lien.
- Sur une même page, mettre des noms distincts pour des liens différents.

#### Lien article

Enabled | Hover / Focus / Pressed
------------ | -------------
![article-link__exemples__default-link](components/COMPONENTS/Text/Links/design/article-link__exemples__default-link.png) |![article-link__ex__hover](components/COMPONENTS/Text/Links/design/article-link__ex__hover.png)

- Commencer par les mots-clés.
- Il est conseillé que le lien n’ait pas plus de 10 mots pour une meilleure performance.
- Le texte du lien doit être similaire au titre de la page qu'il ouvre.
- Ne pas mettre le même nom pour différents liens.

#### Lien bouton
- La 1re lettre du lien est en majuscule, le reste est en minuscule.
- Le texte du lien doit être uniquement sur une seule ligne.
- Ne pas finaliser le texte par une ponctuation.

### Types d'ouverture
#### Le même onglet
- Suite à un tape sur un lien interne, une page s'ouvre dans le même onglet. Les deux sous-domaines sont identiques, ex : ouest-france.fr et voilesetvoiliers.ouest-france.fr

#### Une nouvel onglet
- Suite à un tape sur un lien externe, une page s'ouvre dans une nouvelle onglet. Un lien externe ouvre une page dans un autre sous-domaine, ex : ouest-france.fr et ouestfrance-auto.com
