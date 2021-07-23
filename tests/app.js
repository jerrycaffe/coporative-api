const ExpressLoader = require("../src/loaders/Express");

const Server = new ExpressLoader();
const app = Server.server;

module.exports = app;
