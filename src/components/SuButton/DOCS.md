# Button

Normal application button.

```js
import SuButton from 'components/SuButton';
```

<!-- STORY -->

### Standards
Chaque bouton a 4 états : **normal** (/ ou *link*), **survolé** (*hover*), **cliqué** (*active*) et **visité** (*visited*)

**basic** - état `repos`
normal

**primary** - call to action principal

**secondary** - call to action secondaire

**featured** -

```js
{
  components: { SuButton },
  template: `<su-buton class="secondary">bouton</su-button>`
}
```
