#!/usr/bin/env node

"use strict";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

const crossSpawn = require("cross-spawn");
const args = process.argv.slice(2);
const validScripts = ["lint", "linc", "prettier", "help"];

// check for valid commands
let scriptIndex = args.findIndex(x => validScripts.includes(x));
let script = scriptIndex === -1 ? args[0] : args[scriptIndex];

// check for extra node args
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];
const extraArgs = args.slice(scriptIndex + 1);

// alias for help script
if (["-h", "--help"].includes(script)) {
  scriptIndex = 0;
  script = "help";
} else if (validScripts.includes(script)) {
  // check if it using a valid script
  const result = crossSpawn.sync("node", nodeArgs.concat(require.resolve("./bin/" + script)).concat(extraArgs), {
    stdio: "inherit",
  });
  if (result.signal) {
    if (result.signal === "SIGKILL") {
      console.log(
        "The build failed because the process exited too early. " +
          "This probably means the system ran out of memory or someone called " +
          "`kill -9` on the process."
      );
    } else if (result.signal === "SIGTERM") {
      console.log(
        "The build failed because the process exited too early. " +
          "Someone might have called `kill` or `killall`, or the system could " +
          "be shutting down."
      );
    }
    process.exit(1);
  }
  process.exit(result.status);
} else {
  console.log(`Unknown script ${script}`);
  console.log("Perhaps you need to update iq-web-scripts?");
}
