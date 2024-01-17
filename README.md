# Boilerplate: Angular 17 Web client application

A base functional Angular project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

*Change `PromoBoilerplateAngular` to your project name.*

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Features Summary:

- Base ctructure for starting project on Angular 17
- Configured environment
- Authorization module with base auth forms, service, guards and state
- State management by [NGXS](https://www.ngxs.io/)
- Internalization by [ngx-translate](https://github.com/ngx-translate/core)
- Testing by Karma

## Angular 17

The new Angular 17 version was released on November 8, 2023.
And the [Valletta Software](https://www.vallettasoftware.com/) team is already ready to develop and implement solutions for your business based on this modern stack.

## Base ctructure

We prepared base structure for new project.
It has components and services what used in every real project.
This boilerplate will help you get start new project faster.

## Authorization module

Auth module has base logic and structure
- AuthModule defines all auth entities
- AuthService provides data from store, methods for components and dispathes auth actions
- AuthApiServices makes requests to Auth endpoint
- AuthState store data about user's authorization
- AuthGuard provides CanActivate functions for security implementation
- SignIn and SignUp components have forms for login and registration

## State management

Included state managment by NGXS package. NGXS is modeled after the CQRS pattern popularly implemented in libraries like Redux and NgRx but reduces boilerplate by using modern TypeScript features such as classes and decorators.
Also we configured following really useful plugins:
- [Logger](https://www.ngxs.io/plugins/logger) outputs state and it's changes
- [Storage](https://www.ngxs.io/plugins/storage) saves selected parts of store between app reloading. It uses localStorage and restores previous state
- [Router](https://www.ngxs.io/plugins/router) allows to navigate by actions

AuthState can be used as example (State, Actions, Selectors) for your new states.

## Internalization

Native internalization in Angular very cumbersome and difficult.
Internalization with [ngx-translate](https://github.com/ngx-translate/core) is so easy.
Just create JSON dictionary `/assets/i18n/[lang].json` for each language and output it with translation pipe: `{{ 'MULTI-LEVEL.KEY' | translate }}`.

## Testing 

Karma is available in the boilerplate
