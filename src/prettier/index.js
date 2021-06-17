"use strict";

/* eslint-disable no-console */

// Based on similar script in Jest
// https://github.com/facebook/jest/blob/a7acc5ae519613647ff2c253dd21933d6f94b47f/scripts/prettier.js

const chalk = require("chalk");
const glob = require("glob");
const prettier = require("prettier");
const fs = require("fs");
const listChangedFiles = require("../shared/listChangedFiles");

const prettierConfigPath = require.resolve("./.prettierrc");

const mode = process.argv[2] || "check";
const shouldWrite = mode === "write" || mode === "write-changed";
const onlyChanged = mode === "check-changed" || mode === "write-changed";

const changedFiles = onlyChanged ? listChangedFiles() : null;
let didWarn = false;
let didError = false;

const filesToIgnore = ["**/node_modules/**", "**/dist/**", "**/package.json", "**/tsconfig.json", "**/webpack.*"];

const runPrettier = fileList => {
  fileList.forEach(file => {
    const options = prettier.resolveConfig.sync(file, {
      config: prettierConfigPath,
    });
    try {
      const input = fs.readFileSync(file, "utf8");
      if (shouldWrite) {
        const output = prettier.format(input, options);
        if (output !== input) {
          fs.writeFileSync(file, output, "utf8");
        }
      } else if (!prettier.check(input, options)) {
        if (!didWarn) {
          console.log(`\n\r
            \r${chalk.red("  This project uses prettier to format all JavaScript code.")}
            \r${chalk.dim("  Please run")} ${chalk.reset("prettier --write")}
            \r${chalk.dim("  and add changes to files listed below to your commit:")}
              
          `);
          didWarn = true;
        }
        console.log(file);
      }
    } catch (error) {
      didError = true;
      console.log(`\n\n ${error.message}`);
      console.log(file);
    }
  });

  if (didError) {
    process.exit(1);
  }
};

/* TS and TSX */
const filesTS = glob.sync("**/*.ts", { ignore: filesToIgnore }).filter(f => !onlyChanged || changedFiles.has(f));
const filesTSX = glob.sync("**/*.tsx", { ignore: filesToIgnore }).filter(f => !onlyChanged || changedFiles.has(f));
if (filesTSX.length || filesTS.length) runPrettier([...filesTSX, ...filesTS]);

/* Javascript */
const filesJS = glob.sync("**/*.js", { ignore: filesToIgnore }).filter(f => !onlyChanged || changedFiles.has(f));
if (filesJS.length) runPrettier(filesJS);

/* YAML */
const filesYML = glob.sync("**/*.yml", { ignore: filesToIgnore }).filter(f => !onlyChanged || changedFiles.has(f));
if (filesYML.length) runPrettier(filesYML);

/* MARKDOWN */
const filesMD = glob.sync("**/*.md", { ignore: filesToIgnore }).filter(f => !onlyChanged || changedFiles.has(f));
const filesMDX = glob.sync("**/*.mdx", { ignore: filesToIgnore }).filter(f => !onlyChanged || changedFiles.has(f));
if (filesMD.length || filesMDX.length) runPrettier([...filesMD, ...filesMDX]);

/* JSON */
const filesJSON = glob.sync("**/*.json", { ignore: filesToIgnore }).filter(f => !onlyChanged || changedFiles.has(f));
if (filesJSON.length) runPrettier(filesJSON);

/* LESS */
const filesLESS = glob.sync("**/*.less", { ignore: filesToIgnore }).filter(f => !onlyChanged || changedFiles.has(f));
if (filesLESS.length) runPrettier(filesLESS);

/* SCSS */
const filesSCSS = glob.sync("**/*.scss", { ignore: filesToIgnore }).filter(f => !onlyChanged || changedFiles.has(f));
if (filesSCSS.length) runPrettier(filesSCSS);
