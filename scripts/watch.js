const fs = require('fs');
const path = require('path');
const engine = require('./engine');

(() => {
  fs.watch(path.join(__dirname, `../src`), (event, filename)  => {
    engine();
    console.log(`Theme updated ...`);
  });
})();