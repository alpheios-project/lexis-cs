# lexis-cs
Lexical services for client side scripts. Right now it support the only one service type: CEDICT.

## Output
This package produces several output files. 

`index.html` is a static file that is located in a `dist` directory. This file will be loaded within an iframe by the client and its sole purpose is to load scripts (it loads only `service.min.js` currently) that will provide lexical services. 

`service.min.js` is the main and only script that provides lexical services. It currently serves a CEDICT data only.

`lexis-cs-test-bundle.js` is the bundle of client-side LexisCS classes. Clients don't need this file usually as they will import classes directly from `index.js` via ESM modules. It's not so, however, with Jest. Because Jest does not support ES6 modules at its current state we need to have a transpiled bundle that Jest will be able to load and execute. This is what `lexis-cs-test-bundle.js` is for, and that's why it has a word `test` in its name.

`package.json` lists `lexis-cs-test-bundle.js` as the value of `main`. That's for Jest only so that it will use `lexis-cs-test-bundle.js` for importing JS objects. It would be great if someone will be able to offer a more transparent Jest configuration, but it seems the current one is the only option that works.

All ESM-aware clients are advised to import directly from `indes.js` that is listed as a value of the `module` field of `package.json`.