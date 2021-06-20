An Angular application that interacts with the [Marvel Comics API](https://developer.marvel.com/documentation/getting_started). 


## Setup

Clone this repo to your desktop and run `npm install` to install all the dependencies.

## Usage

Before you start, you must acquire a developer key from [Marvel Developer Portal](https://developer.marvel.com/). After you get one, replace `apiKey` and  `hash` variables in `src/environments` files.

```
export const environment = {
  ...
  baseUrl: 'https://gateway.marvel.com/v1/public/characters',
  apiKey: '<Your public key here>',
  hash:'<Your private key here>'
};
```

Run `ng serve` to start the application. You will then be able to access it at http://localhost:4200. The app will automatically reload if you change any of the source files.


## Unit Test

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Demo

http://jeffersonsantana.com.br/marvel-app/
