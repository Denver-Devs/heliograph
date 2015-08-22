# heliograph

# commands

## build the js

Transpile `src/js` to `build/js/bundle.js` using webpack and Babel

```shell
npm run js
```

## watch and build the js

```shell
npm run js:watch
```

## build, watch and serve the app 

Spins up a dev server to host the static files/watches the js files and transpiles on changes.

```shell
npm run serve
```

## lint the js

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

JSX and ES2015 are supported. Add/modify the rules in `.eslintrc` to taste.

```shell
npm run lint 
```

## test

Uses `tape` to run the tests required in `test/index.js`

```shell
npm run test 
```

## deploy

Deploys the static files to  [surge](http://surge.sh).

Optionally create a `gh-pages` branch and deploy straight to github.

```shell
npm run deploy 
```
