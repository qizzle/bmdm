const { Octokit } = require("@octokit/rest");
const package = require("../package.json");
const store = require("./store");

const token = store.getToken();

if (token === "") {
  var octo = new Octokit();
} else {
  var octo = new Octokit({ auth: token });
}

async function getSource(name) {
  const repo = await octo.repos.getContent({
    owner: package.owner,
    repo: "bmods",
    path: `Actions/${name}`,
  });
  const source = Buffer.from(repo.data.content, "base64").toString();
  return [source, repo.data.size];
}

async function getAllFiles() {
  const repo = await octo.repos.getContent({
    owner: package.owner,
    repo: "bmods",
    path: `Actions`,
  });
  return repo;
}

async function getSize(name) {
  const repo = await octo.repos.getContent({
    owner: package.owner,
    repo: "bmods",
    path: `Actions/${name}`,
  });
  return repo.data.size;
}

module.exports = { getSource, getAllFiles, getSize };
