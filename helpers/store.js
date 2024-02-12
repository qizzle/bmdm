const fs = require("node:fs");
const path = require("node:path");
const log = require("./log");

const PATH =
  process.env.APPDATA ||
  (process.platform == "darwin"
    ? process.env.HOME + "/Library/Preferences"
    : process.env.HOME + "/.local/share");

function init() {
  if (!fs.existsSync(path.join(PATH, "bmdm"))) {
    fs.mkdirSync(path.join(PATH, "bmdm"));
    log.ok("Initialized AppData", "bmdm");
    if (!fs.existsSync(path.join(PATH, "bmdm", "data.json"))) {
      fs.writeFileSync(path.join(PATH, "bmdm", "data.json"), "{}");
      fs.writeFileSync(path.join(PATH, "bmdm", "token.txt"), "");
      set("installed", []);
      log.ok("Initialized", "data.json");
    }
  }
}

function get(key) {
  init();
  var content = JSON.parse(
    fs.readFileSync(path.join(PATH, "bmdm", "data.json"))
  );
  return content[key];
}

function set(key, value) {
  init();
  var content = JSON.parse(
    fs.readFileSync(path.join(PATH, "bmdm", "data.json"))
  );
  content[key] = value;
  fs.writeFileSync(
    path.join(PATH, "bmdm", "data.json"),
    JSON.stringify(content, null, 2)
  );
}

function push(key, value) {
  init();
  var content = JSON.parse(
    fs.readFileSync(path.join(PATH, "bmdm", "data.json"))
  );
  for (let i of content[key]) {
    if (i[0] == value[0]) {
      content[key][content[key].indexOf(i)] = value;
      fs.writeFileSync(
        path.join(PATH, "bmdm", "data.json"),
        JSON.stringify(content, null, 2)
      );
      return;
    }
  }
  content[key].push(value);
  fs.writeFileSync(
    path.join(PATH, "bmdm", "data.json"),
    JSON.stringify(content, null, 2)
  );
}

function remove(key, value) {
  init();
  var content = JSON.parse(
    fs.readFileSync(path.join(PATH, "bmdm", "data.json"))
  );
  for (let i of content[key]) {
    if (i[0] == value[0]) {
      content[key].splice(content[key].indexOf(i), 1);
      fs.writeFileSync(
        path.join(PATH, "bmdm", "data.json"),
        JSON.stringify(content, null, 2)
      );
      return;
    }
  }
}

function getToken() {
  init();
  const token = fs.readFileSync(path.join(PATH, "bmdm", "token.txt"));
  return Buffer.from(token).toString();
}

module.exports = { init, get, set, getToken, push, remove };
