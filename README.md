# Angular 4

## Init project

`ng new project-name`

Args: 

`--skip-install` - does not install dependency

`--prefix [prefix]` - short app name

`--style scss` - determinates scss preprocessor

For example:

`ng new my-app-name --skip-install --prefix my-prefix --style scss`

For crossplatform development:

`npm i --save-dev concurrently`

Into `package.json` add:

`"scripts": {
  "ng": "ng",
  "start": "ng serve",
  "build": "ng build --prod",
  "test": "ng test",
  "lint": "ng lint",
  "e2e": "ng e2e",
  "server": "json-server --watch db.json --port 3000",
  "dev": "concurrently --kill-others npm \"un start\" && \"npm run server\""
}`

## Often crashing dependencies. For fix:

`npm install -g nodemailer`

Exchange deprecadat uuid:

`npm uninstall --save node-uuid`
`npm install --save uuid`

`npm install core-js`

`npm i ajv@^6.0.0`

`npm install rxjs`

`npm i --save jquery popper.js`

`npm i bootstrap --save`

If problem with module routing used prev cli version:

`sudo npm install -g @angular/cli@1.6.5`

## Project generation 

`ng new p-name`

## Component generation

`ng g c component-name`

## Directive generation

`ng g d component-name`

## Directive pipe

`ng g p pipe-name`