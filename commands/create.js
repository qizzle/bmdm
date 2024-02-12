const fs = require("node:fs");
const path = require("path");
const store = require("../helpers/store");
const log = require("../helpers/log");

function create(name) {
  const bmdPath = store.get("path");
  name = name.split("_")[0].split(".")[0];
  const finalName = name.split("_")[0].split(".")[0] + "_MOD.js";
  const finalPath = path.join(bmdPath, "AppData", "Actions", finalName);

  if (fs.existsSync(finalPath)) {
    return log.error("There is already a mod with this name", finalName);
  }

  fs.writeFileSync(
    finalPath,
    `
/*
  ${name.charAt(0).toUpperCase() + name.slice(1)} mod by NAME
  Licensed under MIT License

  DESCRIPTION
*/

module.exports = {
  data: {
    name: "${name.charAt(0).toUpperCase() + name.slice(1)}",
  },
  UI: [
    {
      element: "input",
      storeAs: "text",
      name: "Text",
    },
  ],

  async run(values, interaction, client, bridge) {
    const text = bridge.transf(values.text);
  },
};
`
  );

  log.ok("Created new mod", finalName);
  log.info(`code "${finalPath}"`);
}

module.exports = create;
