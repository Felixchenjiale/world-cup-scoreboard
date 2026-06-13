import { execFileSync } from "node:child_process";

function run(command, args, options = {}) {
  execFileSync(command, args, {
    stdio: "inherit",
    ...options
  });
}

function output(command, args) {
  return execFileSync(command, args, {
    encoding: "utf8"
  }).trim();
}

run("node", ["scripts/update-schedule.mjs"]);
run("node", ["scripts/update-results.mjs"]);

const changed = output("git", ["status", "--porcelain"]);
if (!changed) {
  console.log("No local changes to push.");
  process.exit(0);
}

run("git", ["add", "data.js"]);

const staged = output("git", ["diff", "--cached", "--name-only"]);
if (!staged) {
  console.log("No data.js changes to commit.");
  process.exit(0);
}

run("git", ["commit", "-m", "Update World Cup data"]);
run("git", ["pull", "--rebase", "origin", "main"]);
run("git", ["push", "origin", "main"]);
