# Better Coding Script

[![npm version](https://badge.fury.io/js/better-coding-script.svg)](https://badge.fury.io/js/better-coding-script) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/ecb6da0297ea4bf48d71b6096f834691)](https://www.codacy.com/manual/paulo85br/better-coding-script?utm_source=github.com&utm_medium=referral&utm_content=prma85/better-coding-script&utm_campaign=Badge_Grade)

This package is a set of scripts to run in JavaScript and Typescript projects to parse your code easily through ESLint recommended rules and prettier. It also has specific rules for React projects (both JSX and TSX).

This is the initial idea, and I have already been using it for a long list of projects, so, decided to share it with the community.

## Installation

```shell
npm install better-coding-script --save-dev
```

or

```shell
yarn add better-coding-script --dev
```

> You can also install the package globally (`-g`) to run it in any project without adding a new dependency!

## Style Guide

It uses an automatic code formatter called [Prettier](https://prettier.io/). Run `bcs prettier` after making any changes to the code.

Then, our linter will catch most issues that may exist in your code. You can check the status of your code styling by simply running `bcs linc`.

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at [Airbnb’s Style Guide](https://github.com/airbnb/javascript) will guide you in the right direction.

## Usage

> The main command is `better-coding-script` but there is a short/alias as `bcs`

```shell
npx better-coding-script <command> <option>
```

Or add a script to your `packages.json`

```json
"command": "bcs <command> <option>"
```

### API

```bash
lint       run ESLint for all files in the project (add --fix to apply the fixes)
linc       run ESLint for modified files only in the project (add --fix to apply the fixes)
prettier   run Prettier check for all files in the project
           Additional Options:
              check-changed    run Prettier check for modified files only in the project
              write            run Prettier and fix styling for all files in the project
              write-changed    run Prettier and fix styling for modified files only in the project

```

### Using each command

- `bcs lint`: run ESLint for all files in the project
- `bcs lint --fix`: run ESLint for all files and fix the code when possible in the project
- `bcs linc`: run ESLint for modified files only in the project
- `bcs linc --fix`: run ESLint for modified files only and fix the code when possible in the project
- `bcs prettier`: run Prettier `check` for all files in the project
- `bcs prettier check-changed`: run Prettier `check` for modified files only in the project
- `bcs prettier write`: run Prettier and fix styling for all files in the project
- `bcs prettier write-changed`: run Prettier and fix styling for modified files only in the project
- `bcs -h`: show list of commands
- `bcs -v`: show version

## ESLINT in your project

Create a file called `.eslintrc.js` and add the following content

```js
module.exports = {
  extends: [require.resolve('better-coding-script')],
};
```

## Other points

### Code of Conduct

I decided to adopted (as Facebook) the [Contributor Covenant]https://www.contributor-covenant.org/) as our Code of Conduct, and we expect project participants to adhere to it. Please read the full text so that you can understand what actions will and will not be tolerated.

### Semantic Versioning

`Better Coding Script` follows semantic versioning. We release patch versions for critical bugfixes, minor versions for new features or non-essential changes, and major versions for any breaking changes.

### Branch Organization

Submit all changes directly to the `master branch`. We don’t use separate branches for development or for upcoming releases. We do our best to keep master in good shape, with all tests passing.
