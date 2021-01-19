const testRegex = require("./testRegex");

const regex = /([0-9]+| +)+ (hours|minutes|seconds)/;
const input = process.argv.slice(2).join(" ");

testRegex(regex, input);
