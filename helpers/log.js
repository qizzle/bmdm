const color = require("colors");

function error(message, special = "") {
  console.log(color.bgRed("error"), message, color.cyan(special));
}

function ok(message, special = "") {
  console.log(color.bgGreen("ok"), message, color.cyan(special));
}

function warn(message, special = "") {
  console.log(color.bgYellow("warn"), message, color.cyan(special));
}

function info(message, special = "") {
  console.log(color.bgWhite(color.black("info")), message, color.cyan(special));
}

module.exports = { error, ok, warn, info };
