"use strict";

/* eslint-disable no-console */

const minimatch = require("minimatch");
const { ESLint } = require("eslint");
const glob = require("glob");
const listChangedFiles = require("../shared/listChangedFiles");
const rules = require("./rules");

function intersect(files, patterns) {
  let intersection = [];
  patterns.forEach(pattern => {
    intersection = [...intersection, ...minimatch.match(files, pattern, { matchBase: true })];
  });
  return [...new Set(intersection)];
}

async function runESLintOnFilesWithOptions({ onlyChanged, fix = false, style = "stylish" } = {}) {
  // Define files to lint
  const allPaths = [];

  const filesToIgnore = ["**/node_modules/**", "**/dist/**", "**/package.json", "**/tsconfig.json", "**/webpack.*"];

  if (glob.sync("**/*.ts", { ignore: filesToIgnore }).length) allPaths.push("**/*.ts");
  if (glob.sync("**/*.tsx", { ignore: filesToIgnore }).length) allPaths.push("**/*.tsx");
  if (glob.sync("**/*.js", { ignore: filesToIgnore }).length) allPaths.push("**/*.js");
  if (glob.sync("**/*.jsx", { ignore: filesToIgnore }).length) allPaths.push("**/*.jsx");

  let changedFiles = [];
  if (onlyChanged) {
    changedFiles = [...listChangedFiles()];
  }
  const finalFilePatterns = onlyChanged ? intersect(changedFiles, allPaths) : allPaths;

  // Create an instance with the `fix` option.
  const eslint = new ESLint({
    baseConfig: rules,
    fix,
  });

  // Lint files. This doesn't modify target files.
  const results = await eslint.lintFiles(finalFilePatterns);

  // Modify the files with the fixed code.
  if (fix) await ESLint.outputFixes(results);

  // Format the results.
  const formatter = await eslint.loadFormatter(style);
  const resultText = formatter.format(results);

  // Print results
  console.log(resultText);
}

function runESLint({ onlyChanged = false, fix = false, style = "stylish" } = {}) {
  if (typeof onlyChanged !== "boolean") {
    throw new Error("Pass options.onlyChanged as a boolean.");
  }
  runESLintOnFilesWithOptions({ onlyChanged, fix, style }).catch(error => {
    process.exitCode = 1;
    console.error(error);
  });

  return true;
}

module.exports = runESLint;
