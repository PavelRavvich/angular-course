# Angular 4

## Init project

`ng new project-name`

Args: 

`--skip-install` - does not install dependency

`--prefix [prefix]` - short app name

`--style scss` - determinates scss preprocessor

For example:

`ng new my-app-name --skip-install --prefix my-prefix --style scss`

## Often crashing dependencies. For fix:

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