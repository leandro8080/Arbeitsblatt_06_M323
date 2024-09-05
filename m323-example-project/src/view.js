// View function which represents the UI as HTML-tag functions
// A combination of Tailwind classes which represent a (more or less nice) button style
const MSGS = require("./app");
const btnStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
const hh = require("hyperscript-helpers");
const { h } = require("virtual-dom");
const { div, button, p, h1 } = hh(h);
console.log(MSGS);

function view(dispatch, model) {
  return div({ className: "flex flex-col gap-4 items-center" }, [
    h1({ className: "text-2xl" }, `My Title`),
    button({ className: btnStyle, onclick: () => dispatch(MSGS.UPDATE_MODEL) }, "Update Model"),
    p({ className: "text-2xl" }, `Time: ${model.currentTime}`),
    button({ className: btnStyle, onclick: () => dispatch(MSGS.UPDATE_RANDOM_NUMBER) }, "Update Random Number"),
    p({ className: "text-2xl" }, `Random Number: ${model.randomNumber}`),
    // ... ℹ️ additional elements
  ]);
}

module.exports = { view };
