#!/usr/bin/env node

'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  throw err;
});

const chalk = require('chalk');

console.log(
  chalk.bgBlack(`
${chalk.yellow('>> Better Coding Scripts for all web projects <<')}
${chalk.white('Making easy to run ESLint and Preetier into JS/TS projects')}
`),
);

console.log(chalk.bgBlack(chalk.yellow('Avaliable commands')));

console.log(
  chalk.bgBlack(`
${chalk.magenta('lint')}      ${chalk.cyan('run ESLint for all files in the project')}
          Additional Options:
            --fix           to apply the fixes)
            --style=<value> to show results in a different style (table/json/html/xml)
${chalk.magenta('linc')}      ${chalk.cyan('run ESLint for modified files only in the project')}
          Additional Options:
            --fix           to apply the fixes)
            --style=<value> to show results in a different style (table/json/html/xml)
${chalk.magenta('prettier')}  ${chalk.cyan('run Prettier check for all files in the project')}
          Additional Options:
            check-changed    run Prettier check for modified files only in the project
            write            run Prettier and fix styling for all files in the project
            write-changed    run Prettier and fix styling for modified files only in the project
`),
);

return true;
