const express = require("express");
const app = express();
const port = process.env.PORT || 8088;

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/login", (req, res) => {
  setTimeout(() => {
    res.send();
  }, Math.random() * 1000);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
