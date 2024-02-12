const github = require("../helpers/github");
const install = require("./install");

async function all() {
  const allFiles = (await github.getAllFiles()).data;

  for (let i of allFiles) {
    install(i.name);
  }
}

module.exports = all;
