# Breakpoints / Points de rupture

Ci-dessous vous trouverez la liste des variables SCSS de points de rupture à utiliser dans vos media querries.

<div class="alerte">
	<p>Les points de rupture ne sont pas un composant en tant que tel, ils font partie du «&nbsp;core&nbsp;», c'est à dire des éléments obligatoires.</p>
</div>



## Tableau de correspondances

### Minima
Taille en *px* | Taille en *em* | Variable SCSS 
------------ | ------------- | ------------- |
**360px** | 22.5em | `$min-breakpoint-sm`
**768px** | 48em   | `$min-breakpoint-md`
**980px** | 61.25em |`$min-breakpoint-lg`
**1280px** | 80em   | `$min-breakpoint-xl`

### Maxima
Taille en *px* | Taille en *em* | Variable SCSS 
------------ | ------------- | ------------- |
**359px** | 22.438em | `$max-breakpoint-xs`
**767px** | 47.938em | `$max-breakpoint-sm`
**979px** | 61.188em | `$max-breakpoint-md`
**1279px** | 79.938em  | `$max-breakpoint-lg`


### Exemple

```css
@media screen and (max-width: $max-breakpoint-xs) {
	.sipaui .exemple {
		background: #EB7D5B;
	}
}
@media screen and (min-width: $min-breakpoint-sm) and (max-width: $max-breakpoint-sm) {
	.sipaui .exemple {
		background: #FED23F;
	}
}
@media screen and (min-width: $min-breakpoint-md) and (max-width: $max-breakpoint-md) {
	.sipaui .exemple {
		background: #B5D33D;
	}
}
@media screen and (min-width: $min-breakpoint-lg) and (max-width: $max-breakpoint-lg) {
	.sipaui .exemple {
		background: #6CA2EA;
	}
}
@media screen and (min-width: $min-breakpoint-xl) {
	.sipaui .exemple {
		background: #603ba3;
		color: #fff;
	}
}
```
<style>
.sipaui .exemple {
    	width: 100px;
    	height: 100px;
    	line-height: 100px;
    	margin: auto;
    	text-align: center;
    }

    @media screen and (max-width: 22.438em) {
    	.sipaui .exemple {
    		background: #EB7D5B;
    	}
    }
    @media screen and (min-width: 22.5em) and (max-width: 47.938em) {
    	.sipaui .exemple {
    		background: #FED23F;
    	}
    }
    @media screen and (min-width: 48em) and (max-width: 61.188em) {
    	.sipaui .exemple {
    		background: #B5D33D;
    	}
    }
    @media screen and (min-width: 61.25em) and (max-width: 79.938em) {
    	.sipaui .exemple {
    		background: #6CA2EA;
    	}
    }
    @media screen and (min-width: 80em) {
    	.sipaui .exemple {
    		background: #603ba3;
    		color: #fff;
    	}
    }
</style>
<div class="sipaui">
	<div class="exemple">Exemple</div>
</div>
