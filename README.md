# SipaUI
Ouest-France/Sipa Group guidelines

## How is it organized

Every components are exposed in [src/components](src/components).
Every component have:
- file `{component-name}-design.md` : design document
- file `{component-name}.sketch` : sketch symbol
- file `{component-name}-js.md` : vanilla js version development document
- file `{component-name}-vue.md` : vue.js version development document
- folder `design` : contain component screenshots
- folder `code` : contain component code
  - folder `js` : contain vanilla js component code
  - folder `vue` : contain uve js component code


## Installation

```
yarn install
gulp
```

### local testing

goto [http://localhost:9001/doc/index.php](http://localhost:9001/doc/index.php)

```
cd .
python -m SimpleHTTPServer
```

### build doc

Publish directory `dist/`

```
yarn install
gulp html
npm run build-storybook
```


&nbsp;
---

## Storybook

### dev

goto [http://localhost:9001/](http://localhost:9001/)

```
yarn install
gulp
npm run storybook
```

### build

Publish directory `dist/storybook/`

```
yarn install
gulp
npm run build-storybook
```
