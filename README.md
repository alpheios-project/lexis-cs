# lexis-cs
Lexical services for client side scripts. Right now it support the only one service type: CEDICT.

## Output files
This package produces several output files. They are located in either `prod` or `dev` directories inside a `dist` folder. They contain either production and development versions of a CEDICT service bundle.

`index.html` is a static file that is loaded within an iframe by the client. Its purpose is to load scripts (it loads only `service.min.js` currently) that will provide lexical services. 

`service.min.js` (a production version)/`service.js` (a development version) is the main and only script that provides lexical services. It currently serves CEDICT data only.