# Button

### Usage

```js
import SuButton from 'components/SuButton';
```

<!-- STORY -->

### Properties

* `onClick` - click callback
* `label` - button text

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| onClick  | func     | -            |            |
| alert    | boolean  | false        | -          |
| success  | boolean  | false        | -          |

### Roadmap

#### Icons

```js
{
  components: { SuButton },
  template: `<su-old-buton icon="mail">Send mail</su-old-button>`
}

{
  components: { SuButton },
  template: `<su-old-buton icon="trash" iconPosition="right">Send mail</su-old-button>`
}
```

#### Value

Add `value` property that will be available at all event callback. Helps to prevent numbers of bind usage

For example:

```js
{
  components: { SuButton },
  template: `<su-old-buton v-on:click=={remove} value={item.id}>Remove</su-old-button>`
}
```
