const { app } = require("./app");
const { initModel } = require("./model");
const { update } = require("./update");
const { view } = require("./view");

// ⚠️ Impure code below (not avoidable but controllable)
// The root node of the app (the div with id="app" in index.html)
const rootNode = document.getElementById("app");

// Start the app
app(initModel, update, view, rootNode);
