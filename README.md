# SipaUI
Ouest-France/Sipa Group guidelines

## Installation

```
yarn install
npx gulp
```

### build doc

Publish directory `dist/`

```
yarn install
yarn build
```

---

## Dev

### dev mode

```
yarn install
yarn watch
yarn storybook
```

### Add a component

```
yarn install
yarn add-component --name=comp-name
yarn build
```
Then, relaunch Storybook in build or dev mode.

---

## Technic architecture

SipaUI's content

Legend :
- **files in the deliverables**
- <span style="color: green">files for the documentation</span>
- <span style="color: red">files usefull to generate the catalog</span>


**src /
    components /
        [component-name]
            doc-design.md
            doc-html.md
            doc-vuejs.md
            main-[theme-name].scss ?> suivant resultat du poc Stephane
            main.scss
            index.vue.js
    core /
        _variables-[theme-name].scss
        _variables.scss
        _core.scss
dist /
    css / sipaui-xxx.css
    js  / sipaui-xxx.js
doc /
    index
    [page-name].php
src /
    plugins /
        [plugin-name].js
storybook /
    config.js
    head.html**
