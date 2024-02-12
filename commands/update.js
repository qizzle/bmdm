const github = require("../helpers/github");
const store = require("../helpers/store");
const install = require("./install");
const log = require("../helpers/log");

async function update() {
  var count = 0;
  const installed = store.get("installed");

  for (let i of installed) {
    const size = await github.getSize(i[0]);

    if (size !== i[1]) {
      await install(i[0], null, true);
      count += 1;
      log.ok(`Updated ${i[0]}`, `(${i[1]}) -> (${size})`);
    }
  }

  if (count === 0) {
    log.info("Everything up-to-date");
  }
}

module.exports = update;
