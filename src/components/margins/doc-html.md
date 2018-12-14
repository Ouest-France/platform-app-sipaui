# Margins / Marges

SipaUI fournit différents outils pour intégrer des marges. Il y a tout d’abord, bien sûr, *quelques* classes pour gérer les cas courants, mais il y a surtout les **variables SASS** pour vous permettre d’intégrer les tailles de marge directement dans vos propres fichiers SCSS quand vous en avez besoin.

<a href="#liste-classes" target="_self" class="su-link-button">Liste des classes disponibles</a>

<!-- STORY -->

## Variables SASS

Si vous avez besoin d’utiliser les 5 tailles de marge standard dans vos fichiers SCSS, voici les 5 variables&nbsp;:
- `$margin-xsmall`
- `$margin-small`
- `$margin-medium`
- `$margin-large`
- `$margin-xlarge`

## Classes
Pour bénéficier de marges directement sans faire de CSS, vous pouvez utiliser ces classes

### Margin

Les classes `su-margin-…` permettent de rajouter une marge **à l’extérieur** d’un composant. Le cas les plus courant sont les marges supérieures et inférieures, pour gérer l’espace entres les composants dans le flux de lecture vertical. Nous avons toutefois créé des classes pour les marges latérales ainsi qu'une classe pour la marge tournante. Chacune de ces classes existent dans les 5 tailles standards définies par le design. Le processus de nommage des classes de marge est sous la forme `su-margin-*position*-*taille*`. Ainsi on aura par exemple `su-margin-bottom-xsmall`.

Liste des positions possibles&nbsp;:
- `top`
- `right`
- `bottom`
- `left`
- `*vide*` (quand la position n’est pas donnée, il s'agit d’une marge tournante)

Liste des tailles possibles&nbsp;:
- `xsmall` (5 px)
- `small` (10 px)
- `medium` (20 px)
- `large` (30 px)
- `xlarge` (40 px)

Il existe par conséquent 25 classes de marges (cf. la <a href="#liste-classes" target="_self" class="su-link">liste des classes</a>).

```html

```



<div id="liste-classes">

## Liste des classes disponibles
- `su-margin-xsmall`
- `su-margin-small`
- `su-margin-medium`
- `su-margin-large`
- `su-margin-xlarge`
- `su-margin-top-xsmall`
- `su-margin-top-small`
- `su-margin-top-medium`
- `su-margin-top-large`
- `su-margin-top-xlarge`
- `su-margin-right-xsmall`
- `su-margin-right-small`
- `su-margin-right-medium`
- `su-margin-right-large`
- `su-margin-right-xlarge`
- `su-margin-bottom-xsmall`
- `su-margin-bottom-small`
- `su-margin-bottom-medium`
- `su-margin-bottom-large`
- `su-margin-bottom-xlarge`
- `su-margin-left-xsmall`
- `su-margin-left-small`
- `su-margin-left-medium`
- `su-margin-left-large`
- `su-margin-left-xlarge`
</div>
