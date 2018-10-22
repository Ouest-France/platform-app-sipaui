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
npx gulp html
npm run build-storybook
```

---

## Dev

### dev mode

```
yarn install
npx gulp watch
npm run storybook
```

### Add a component

```
yarn install
npm run add-component --name=comp-name
npx gulp html
```
Then, relaunch Storybook in build or dev mode.
