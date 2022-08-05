const fs = require('fs');
const path = require('path');
const jsonc = require('jsonc-parser');

const commonDark = `../src/commonDark.jsonc`;
const darkItalicFile = `TheUnnamed-dark-theme.json`;
const darkNoItalicFile = `TheUnnamed-dark-no-italics-theme.json`;

const commonLight = `../src/commonLight.jsonc`;
const lightItalicFile = `TheUnnamed-light-theme.json`;

function engine() {
  const commonDarkContents = jsonc.parse(fs.readFileSync(path.join(__dirname, commonDark), { encoding: "utf-8" }));
  const darkItalicContents = JSON.parse(fs.readFileSync(path.join(__dirname, `../src/`, darkItalicFile), { encoding: "utf-8" }));
  const darkNoItalicContents = JSON.parse(fs.readFileSync(path.join(__dirname, `../src/`, darkNoItalicFile), { encoding: "utf-8" }));

  const darkItalic = { ...commonDarkContents, ...darkItalicContents };
  const darkNoItalic = { ...commonDarkContents, ...darkNoItalicContents };

  fs.writeFileSync(path.join(__dirname, `../themes`, darkItalicFile), JSON.stringify(darkItalic, null, 2), { encoding: "utf-8" });
  fs.writeFileSync(path.join(__dirname, `../themes`, darkNoItalicFile), JSON.stringify(darkNoItalic, null, 2), { encoding: "utf-8" });


  // const commonLightContents = jsonc.parse(fs.readFileSync(path.join(__dirname, commonLight), { encoding: "utf-8" }));
  // const lightItalicContents = JSON.parse(fs.readFileSync(path.join(__dirname, `../src/`, lightItalicFile), { encoding: "utf-8" }));

  // const lightItalic = { ...commonLightContents, ...lightItalicContents };

  // fs.writeFileSync(path.join(__dirname, `../themes`, lightItalicFile), JSON.stringify(lightItalic, null, 2), { encoding: "utf-8" });
};

module.exports = engine;