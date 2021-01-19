const safeRegex = require("safe-regex");
const regex = process.argv.slice(2).join(" ");
const determination = safeRegex(regex)
  ? "is a safe regex"
  : "is susceptible to ReDoS";

console.log(`\x1b[36m%s\x1b[0m`, regex, determination);
