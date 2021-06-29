const fs = require('fs');
const path = require('path');
const jsonc = require('jsonc');

const commonDark = `../src/commonDark.jsonc`;
const darkItalicFile = `TheUnnamed-dark-theme.json`;
const darkNoItalicFile = `TheUnnamed-dark-no-italics-theme.json`;

(() => {
  const commonDarkContents = jsonc.parse(fs.readFileSync(path.join(__dirname, commonDark), { encoding: "utf-8" }));
  const darkItalicContents = jsonc.parse(fs.readFileSync(path.join(__dirname, `../src/`, darkItalicFile), { encoding: "utf-8" }));
  const darkNoItalicContents = jsonc.parse(fs.readFileSync(path.join(__dirname, `../src/`, darkNoItalicFile), { encoding: "utf-8" }));

  const darkItalic = { ...commonDarkContents, ...darkItalicContents };
  const darkNoItalic = { ...commonDarkContents, ...darkNoItalicContents };

  fs.writeFileSync(path.join(__dirname, `../themes`, darkItalic), jsonc.stringify(dictionary, null, 2), { encoding: "utf-8" });
  fs.writeFileSync(path.join(__dirname, `../themes`, darkNoItalic), jsonc.stringify(dictionary, null, 2), { encoding: "utf-8" });
})();