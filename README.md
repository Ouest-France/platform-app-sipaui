# SipaUI
Ouest-France/Sipa Group guidelines

## Installation

```
yarn install
npx gulp
```

NodeJS version >= 10.10.0 is required

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

## Docker

```
docker build -t sipa-ui . -f .utils/Dockerfile-local
docker run -v `pwd`:/sipaui -v /sipaui/node_modules/ -d -p 8789:80 -p 9001:9001 --name sipa-ui_1 sipa-ui
docker exec -it sipa-ui_1 bash

yarn install
yarn build
yarn storybook
```

Stop

```
docker stop sipa-ui_1
```

Start

```
docker start sipa-ui_1
docker exec -it sipa-ui_1 bash
yarn storybook
```

URL

mode doc:
```
http://localhost:8789/
http://localhost:8789/storybook/?path=/story/intro--documentation
```

mode catalogue
```
http://localhost:9001/?path=/story/intro--documentation
```
