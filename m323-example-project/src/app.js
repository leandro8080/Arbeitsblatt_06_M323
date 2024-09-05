// ⚠️ Impure code below (not avoidable but controllable)
// Messages which can be used to update the model
const MSGS = {
  UPDATE_MODEL: "UPDATE_MODEL",
  UPDATE_RANDOM_NUMBER: "UPDATE_RANDOM_NUMBER",
  // ... ℹ️ additional messages
};

const createElement = require("virtual-dom/create-element");
const { diff, patch } = require("virtual-dom");

function app(initModel, update, view, node) {
  let model = initModel;
  let currentView = view(dispatch, model);
  let rootNode = createElement(currentView);
  node.appendChild(rootNode);
  function dispatch(msg) {
    model = update(msg, model);
    const updatedView = view(dispatch, model);
    const patches = diff(currentView, updatedView);
    rootNode = patch(rootNode, patches);
    currentView = updatedView;
  }
}

module.exports = { app, MSGS };
