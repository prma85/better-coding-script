#!/usr/bin/env node

'use strict';

process.env.FORCE_COLOR = 'true';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  throw err;
});

const args = process.argv.slice(2).join(' ');
const execSync = require('child_process').execSync;
const path = require('path');
const cjsErr = require('commander.js-error');
const program = require('commander');

try {
  execSync(
    `node "${path.normalize(path.join(__dirname, '../../src/prettier/index.js'))}" ${args}`,
    {
      stdio: 'inherit',
      shell: true,
    },
  );
  return true;
} catch (e) {
  if (program.verbose || !program.quiet) {
    const opts = { verbose: program.verbose };
    cjsErr(opts, e);
  }
  process.exit(e.status || 144);
}
