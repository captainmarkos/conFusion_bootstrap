### Getting started
```
npm install
```

### Start the lite server:
```
npm run lite
```

### Compiling less and scss files:

```
node-sass -o css/ css/
lessc styles.less styles.css

npm run scss
npm run lessc
```

### Using npm scripts
Use node modules `onchange` and `parallelshell` to allow us to setup and run
npm scripts that will watch for file changes and run the appropriate tasks.

*Note* Need to use this particular version of `parallelshell`:
```
npm install --save-dev parallelshell@3.0.1
```

Looking at `package.json` we can now run `npm start` that will watch for files
changed and also run the lite server.
