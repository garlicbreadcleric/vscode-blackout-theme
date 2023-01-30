const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const dimmedColors = require("@primer/primitives/dist/json/colors/dark_dimmed.json");

function getColors(theme) {

  switch(theme) {
    case "dark":
      return darkColors;
    case "dark_dimmed":
      return dimmedColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

module.exports = {
  getColors,
};
