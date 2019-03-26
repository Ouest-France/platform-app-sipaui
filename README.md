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

```
src /
    components /
        [component-name]
            doc-design.md (files for the documentation)
            doc-html.md (files for the documentation)
            doc-vuejs.md (files for the documentation)
            main-[theme-name].scss
            main.scss
            index.vue.js  
    core /
        _variables-[theme-name].scss
        _variables.scss
        _core.scss  
dist /

    css / sipaui-xxx.css
    js  / sipaui-xxx.js
doc / (directory for the website)
    index.php
    [page-name].php
    ...
storybook / (usefull directory to generate the catalog)
    config.js
    head.html
```
