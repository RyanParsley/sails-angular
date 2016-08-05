# Sails-Angular

A sensible starting point with Angular2 on sails

## Installation

```
npm install
```

Change your database connections in `config/connections`

### Pre install (potientially optional)

If you don't have sails installed, install it globally for convinience commands to work

```
npm install -g sails
```

## Run locally

```
sails lift
```

## Run in production

For docker to be happy, the production port is `34567`.

```
pm2 start app.js -x -- --prod
```

Note: you'll need pm2 installed globally for this to work.

## Testing

Tests are written in mocha. Run tests with:

```
npm test
```

### Test coverage

Test coverage is checked with istanbul via the following command

```
grunt coverage
```
