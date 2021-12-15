const answer = require('./answer');

module.exports = sel => {
  document.querySelector(sel).innerHTML = answer();
};
