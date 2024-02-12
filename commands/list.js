const log = require("../helpers/log");
const store = require("../helpers/store");

function list() {
  const installed = store.get("installed");

  if (installed === undefined || installed == []) {
    return log.info("No installed mods.");
  } else {
    for (let i of installed) {
      log.info(i[0], `(${i[1]})`);
    }
  }
}

module.exports = list;
