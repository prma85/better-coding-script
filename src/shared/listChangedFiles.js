'use strict';

/* eslint-disable no-console */

const { execFileSync } = require('child_process');

const exec = (command, args) => {
  console.log(`> ${[command, ...args].join(' ')}`);
  const options = {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'pipe',
    encoding: 'utf-8',
  };
  return execFileSync(command, args, options);
};

const execGitCmd = (args) => exec('git', args).trim().toString().split('\n');

const listChangedFiles = () => {
  const branch = execGitCmd(['branch', '-r'])
    .filter((b) => b.includes('origin/HEAD'))[0]
    .replace('origin/HEAD ->', '')
    .replace('\n', '')
    .replace('\r', '')
    .trim();

  const mergeBase = execGitCmd(['merge-base', 'HEAD', branch]);
  return new Set([
    ...execGitCmd(['diff', '--name-only', '--diff-filter=ACMRTUB', mergeBase]),
    ...execGitCmd(['ls-files', '--others', '--exclude-standard']),
  ]);
};

module.exports = listChangedFiles;
