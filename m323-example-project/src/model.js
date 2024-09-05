// ⚠️ Impure code below (not avoidable but controllable)
// The initial model when the app starts
const initModel = {
  currentTime: new Date().toLocaleTimeString(),
  randomNumber: 1,
};

module.exports = { initModel };
