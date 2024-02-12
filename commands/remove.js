const path = require("node:path");
const log = require("../helpers/log");
const store = require("../helpers/store");
const fs = require("node:fs");

function remove(mod) {
  const allMods = store.get("installed");
  const bmdPath = store.get("path");

  for (let i of allMods) {
    if (String(i[0]).toLowerCase().startsWith(String(mod).toLowerCase())) {
      fs.unlinkSync(path.join(bmdPath, "AppData", "Actions", i[0]));
      store.remove("installed", i);
      log.ok("Removed mod", `${i[0]} (${i[1]})`);
      return;
    }
  }
  log.error("Couldn't find any mod with query", mod);
}

module.exports = remove;
