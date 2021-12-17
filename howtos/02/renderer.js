/**
This code will eventually run in the renderer process but not as is.
This module will get bundled by Webpack into a browser-compatible form.
**/
const answer = require('./answer');

module.exports = sel => {
  document.querySelector(sel).innerHTML = answer();
};
