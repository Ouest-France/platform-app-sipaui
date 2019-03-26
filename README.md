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
build / (usefull directory to generate the dist)
dist / (compilated files)
doc / (directory for the website)
    index.php
    [page-name].php
    ...
src /
    components /
        [component-name]
            doc-design.md (files for the documentation)
            doc-html.md (files for the documentation)
            doc-vuejs.md (files for the documentation)
            main.scss
            _variables.scss
            _theme-[name].scss
            index.vue.js  
    core /
        fonts /
        js /
        scss / 
.storybook / (usefull directory to generate the catalog)
    config.js
    head.html
```
