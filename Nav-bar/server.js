const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(cors());
const port = 3002;

app.use(express.static("dist"));

app.get("/Navbar", (req, res) => {
  // console.log(path.join(`${__dirname}/../dist/bundle.js`));

  res.sendFile(path.join(`${__dirname}/dist/bundle.js`));
});

app.listen(port, () => console.log(`listening from port: ${port}`));
