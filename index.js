const express = require("express");
const app = express();
const port = env.PORT || 8088;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
