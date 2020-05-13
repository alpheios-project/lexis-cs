# lexis-cs
Lexical services for client side scripts. Right now it support the only one service type: CEDICT.

## Output files
This package produces several output files. They are located in either `prod` or `dev` directories inside a `dist` folder. They contain either production and development versions of a CEDICT service bundle.

`index.html` is a static file that is loaded within an iframe by the client. Its purpose is to load scripts (it loads only `service.min.js` currently) that will provide lexical services.

`service.min.js` (a production version)/`service.dev.js` (a development version) is the main and only script that provides lexical services. It currently serves CEDICT data only.

## Deployment

The deployment of the lexis-cs service includes
* an index.html file which loads the service code
* the service.js library
* the data files

Data deployment is managed by the separate data repositories
(currently only alpheios-project/cedict) to a subdirectory under the
main service directory and data file versioning is handled by version
stamped file names.

The lexis-cs service identifies which version of the data files to use in the
configuration file for that dataset (currently only configurations/cedict.js).
The configuration file(s) get included in the built and minified code
for the service.

Deployment of the service files is handled via Travis. Commits to the `master`
branch result in deployments of the updated `dist/dev` directory.  Commits to the
`production` branch result in deployments of the updated `dist/prod` directory.





