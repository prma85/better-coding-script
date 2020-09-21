#!/usr/bin/env node

"use strict";

process.env.FORCE_COLOR = "true";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

const chalk = require("chalk");
const runESLint = require("../../src/eslint/index");
const args = process.argv.slice(2).join(" ").trim();

const fix = args.includes("write") || args.includes("fix") ? true : false;
const style = args.includes("style") ? args.split(/style=/).pop() : undefined;

try {
  console.log(chalk.yellow("\n> Linting changed files... \n"));
  runESLint({ onlyChanged: true, fix, style });
} catch (e) {
  process.exit(e.status || 1);
}
