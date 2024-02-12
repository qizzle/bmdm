const fs = require("node:fs");
const log = require("../helpers/log");
const store = require("../helpers/store");

function set(path) {
  if (fs.existsSync(path)) {
    if (
      fs.readdirSync(path).includes("Bot Maker For Discord.exe") ||
      fs.readdirSync(path).includes("Studio Bot Maker.exe")
    ) {
      store.set("path", path);
      log.ok("Set Bot Maker for Discord path to", path);
    } else {
      return log.error("No .exe in path", path);
    }
  } else {
    return log.error("Invalid path", path);
  }
}

module.exports = set;
