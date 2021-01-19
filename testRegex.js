const vm = require("vm");

async function testRegex(regex, str) {
  const start = new Date();

  const sandbox = {
    regex,
    str,
    result: null,
  };

  const context = vm.createContext(sandbox);
  const script = new vm.Script("result = regex.test(str);");
  try {
    script.runInContext(context, { timeout: 250 });

    const { result } = sandbox;
    const end = new Date();
    const runtime = end - start;

    console.log(
      "Tested regex: " +
        regex +
        "\nWith string: " +
        str +
        "\nMatch: " +
        result +
        "\nRuntime: " +
        runtime +
        "ms"
    );
  } catch (e) {
    console.log("Timeout, expression took longer than 250ms to evaluate");
  }
}

module.exports = testRegex;
