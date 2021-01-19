const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "index.html")));

app.get("/calculate", (req, res) => {
  req.setTimeout(10000);
  const { str } = req.query;

  const regex = /([0-9]+| +)+ (hour|minute|second)s?/;

  const data = str.match(regex);

  if (data) {
    let divisor;

    const num = Number(data[1]);

    if (data[2] === "hour") {
      divisor = 24;
    }

    if (data[2] === "second") {
      divisor = 86400;
    }

    if (data[2] === "minute") {
      divisor = 1440;
    }

    res.json({
      success: true,
      days: Math.round((num * 100) / divisor) / 100,
    });
  } else {
    res.json({
      success: false,
      error: "no match",
    });
  }
});

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
