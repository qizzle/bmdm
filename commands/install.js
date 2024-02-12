const path = require("node:path");
const github = require("../helpers/github");
const log = require("../helpers/log");
const store = require("../helpers/store");
const fs = require("node:fs");

async function install(mod, str, force) {
  const bmdPath = store.get("path");
  if (bmdPath === undefined) {
    log.error("No path set.", "Use bmdm set");
    return;
  }

  if (!force) {
    const installed = store.get("installed");
    for (let i of installed) {
      if (String(i[0]).toLowerCase().startsWith(String(mod).toLowerCase())) {
        return log.info("Already installed", `${i[0]} (${i[1]})`);
      }
    }
  }

  const allMods = await github.getAllFiles();
  for (let i of allMods.data) {
    if (String(i.name).toLowerCase().startsWith(String(mod).toLowerCase())) {
      const [source, size] = await github.getSource(i.name);

      store.push("installed", [i.name, size]);

      fs.writeFileSync(
        path.join(bmdPath, "AppData", "Actions", i.name),
        source
      );

      return log.ok("Successfully installed", `${i.name} (${size})`);
    }
  }
  log.error("Couldn't find any mod with query", mod);
}

module.exports = install;
