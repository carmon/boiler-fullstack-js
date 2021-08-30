Carmon's fullstack boilerplate
==============================

> It's dangerous to go alone. Take this.

This is general purpose boilerplate, to kickstart a JS app with a minimal client & server side.

### Stack

- backend: **nodemon** runs **express-js** app
- frontend: **webpack** 4+ runs **reactjs**

### Quick look command

- `npm run publish`: uses concurrently to run server & client, don't expect to have hot module reloading

### How do I develop?

Run these two in parallel:
- `npm run client`: webpack dev server 
- `npm run server`: express-js http server

### Tests?

`.http` files are not properly *test files*, they are like *try files*, download **REST client** plugin for **VSCode**, and with a simple shortcut you'll have a way to try your local endpoints inside that IDE and get immediate feedback (more info [here](https://github.com/Huachao/vscode-restclient)). Check those files under `/test` folder.

So long.
