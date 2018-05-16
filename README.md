# SipaUI
Ouest-France/Sipa Group guidelines

# Installation

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
```


&nbsp;
---

# Storybook

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

