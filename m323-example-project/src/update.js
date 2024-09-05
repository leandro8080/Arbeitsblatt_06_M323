// Update function which takes a message and a model and returns a new/updated model
const MSGS = require("./app");
console.log(MSGS);
function update(msg, model) {
  switch (msg) {
    case MSGS.UPDATE_MODEL:
      console.log(msg);
      return { ...model, currentTime: new Date().toLocaleTimeString() };

    case MSGS.UPDATE_RANDOM_NUMBER:
      console.log(msg);
      return { ...model, randomNumber: Math.random() };
    default:
      console.log(msg);
      return model;
  }
}

module.exports = { update };
