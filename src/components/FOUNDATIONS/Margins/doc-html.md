# Margins / Marges

SipaUI fournit différents outils pour intégrer des marges **à l’extérieur** d’un composant. Il y a bien sûr, *quelques* classes pour gérer les cas courants, mais il y a surtout les **variables SASS** pour vous permettre d’intégrer les tailles de marge directement dans vos propres fichiers SCSS quand vous en avez besoin. En effet, dans la plupart des cas ce seront **les CSS du site (via les variables) qui devront gérer l’espacement entre les blocs et non l’utilisation des classes de marge**.

<a href="#liste-classes" target="_self" class="link-button">Liste des classes disponibles</a>

<div class="dependances">

## Dépendances
- classe `sipaui` sur un parent (par exemple le `<body>`)

</div>

<!-- STORY -->

## Variables SASS

Pour gérer l’espace entre les blocs, vous aurez besoin des 5 tailles de marge standard dans vos fichiers SCSS. Voici les 5 variables&nbsp;:
- `$margin-xsmall` (par défaut = 5 px)
- `$margin-small` (par défaut = 10 px)
- `$margin-medium` (par défaut = 20 px)
- `$margin-large` (par défaut = 30 px)
- `$margin-xlarge` (par défaut = 40 px)

## Classes
De façon **exceptionnelle**, vous pourriez avoir besoin de classes pour forcer des marges. Ces classes sont préfixées `su-margin-…`. Le cas les plus courant sont les marges supérieures et inférieures, pour gérer l’espace entres les composants dans le flux de lecture vertical. Nous avons toutefois créé des classes pour les marges latérales ainsi qu'une classe pour la marge tournante. Chacune de ces classes existent dans les 5 tailles standards définies par le design. Le processus de nommage des classes de marge est sous la forme `su-margin-*position*-*taille*`. Ainsi on aura par exemple `su-margin-bottom-xs`. En plus de ces classes de tailles, il existe des classes de **remise à zéro** de la marge&nbsp;: `su-margin-0`…

<p class="alerte">
Ces classes sont des outils. Leur utilisation est réservée pour des cas exceptionnels, où l’utilisation des variables SASS au sein de votre propre code n’est pas possible. <strong>C'est encore plus vrai pour les classes de marge nulle</strong> où leur utilisation démontre un problème dans le code CSS.
</p>

Liste des positions possibles&nbsp;:
- `top`
- `right`
- `bottom`
- `left`
- `*vide*` (quand la position n’est pas donnée, il s'agit d’une marge tournante)

Liste des tailles possibles&nbsp;:
- `0`
- `xs` ("xsmall" = 5 px)
- `s` ("small" = 10 px)
- `m` ("medium" = 20 px)
- `l` ("large" = 30 px)
- `xl` ("xlarge" = 40 px)

Il existe par conséquent 30 classes de taille de marges (5X6).

Voici *un* exemple d’utilisation de classe de marge avec la classe `su-margin-right-l`.

```html
<div class="bloc-gris su-margin-right-l">Bloc 1</div>
<div class="bloc-rouge">Bloc 2</div>
```
<style>
	.flex {
		display: flex;
	}
	.bloc-gris,
	.bloc-rouge {
		color: #fff !important;
		padding: 10px;
	}
	.bloc-gris {
		background: #333;
	}
	.bloc-rouge {
		background: #b40015;
	}
</style>
<div class="sipaui flex">
	<div class="bloc-gris su-margin-right-l">Bloc 1</div>
	<div class="bloc-rouge">Bloc 2</div>
</div>




<div id="liste-classes" class="control-titres">

## Liste des classes disponibles
- `su-margin-0`
- `su-margin-xs`
- `su-margin-s`
- `su-margin-m`
- `su-margin-l`
- `su-margin-xl`
- `su-margin-top-0`
- `su-margin-top-xs`
- `su-margin-top-s`
- `su-margin-top-m`
- `su-margin-top-l`
- `su-margin-top-xl`
- `su-margin-right-0`
- `su-margin-right-xs`
- `su-margin-right-s`
- `su-margin-right-m`
- `su-margin-right-l`
- `su-margin-right-xl`
- `su-margin-bottom-0`
- `su-margin-bottom-xs`
- `su-margin-bottom-s`
- `su-margin-bottom-m`
- `su-margin-bottom-l`
- `su-margin-bottom-xl`
- `su-margin-left-0`
- `su-margin-left-xs`
- `su-margin-left-s`
- `su-margin-left-m`
- `su-margin-left-l`
- `su-margin-left-xl`
</div>
