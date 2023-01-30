const fs = require("fs").promises;
const getTheme = require("./theme");

const darkDefaultTheme = getTheme({
  theme: "dark",
  name: "Blackout",
});

const darkDimmedTheme = getTheme({
  theme: "dark_dimmed",
  name: "Blackout Dimmed"
})

// Write themes

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/dark-default.json", JSON.stringify(darkDefaultTheme, null, 2)),
    fs.writeFile("./themes/dark-dimmed.json", JSON.stringify(darkDimmedTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))
