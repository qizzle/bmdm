#! /usr/bin/env node

const { program } = require("commander");

const package = require("./package.json");

const all = require("./commands/all");
const create = require("./commands/create");
const install = require("./commands/install");
const list = require("./commands/list");
const remove = require("./commands/remove");
const set = require("./commands/set");
const update = require("./commands/update");

program
  .name("bmdm")
  .description("Manage all your Bot Maker for Discord mods using one CLI tool.")
  .version(package.version);

program.command("all").description("install all available mods").action(all);

program
  .command("create")
  .alias("c")
  .description("create a new mod")
  .argument("<name>", "name of your mod")
  .action(create);

program
  .command("install")
  .alias("i")
  .description("install a specific mod")
  .argument("<mod>", "name of the mod")
  .action(install);

program
  .command("list")
  .alias("ls")
  .description("list all installed mods")
  .action(list);

program
  .command("remove")
  .alias("rm")
  .description("remove a specific installed mod")
  .argument("<mod>", "name of the mod")
  .action(remove);

program
  .command("set")
  .description("set your Bot Maker for Discord path")
  .argument("<path>", "Absolute path")
  .action(set);

program
  .command("update")
  .alias("up")
  .description("update all installed mods")
  .action(update);

program.parse();
