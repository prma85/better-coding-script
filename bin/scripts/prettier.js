#!/usr/bin/env node

"use strict";

process.env.FORCE_COLOR = "true";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

const args = process.argv.slice(2).join(" ");
const execSync = require("child_process").execSync;

try {
  execSync("node " + require.resolve("../../src/prettier/index.js") + " " + args, { stdio: "inherit" });
  return true;
} catch (e) {
  process.exit(e.status || 1);
}
