# AngularStateManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Prerequisites:
Make sure Node.js and Angular CLI are installed. Information can be found below links

Nodejs: https://nodejs.org/

Angular CLI: https://cli.angular.io/

To find out the Node.js and Angular CLI versions in your machine, run

node --version

ng --version

## Basics of NgRx & What to install to run this project

NgRx Schematics provides scaffolding. NgRx commands get integrated into the Angular CLI, and most of the NgRx elements can be created using angular CLI. So, let's add NgRx Schematics. 

ng add @ngrx/schematics@latest

Configure the Schematics so that NgRx commands are available in Angular CLI by default.

ng config cli.defaultCollection @ngrx/schematics

Let’s install the NgRx,  dependencies, and dev-tools now.

npm install @ngrx/store --save 

npm install @ngrx/effects --save 

npm install @ngrx/entity --save 

npm install @ngrx/store-devtools --save

Notice that package.json has been updated.


Add an NgRx Store to the App
Let’s generate NgRx Store in the app.

ng generate @ngrx/schematics:store State --root --module app.module.ts

Notice that the following line has been added to the app.module.ts
