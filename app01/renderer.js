const fs = require('fs');
const path = require('path');
const secret = fs.readFileSync(path.join(__dirname, 'secret.txt'));
document.querySelector('pre').innerHTML = secret;
