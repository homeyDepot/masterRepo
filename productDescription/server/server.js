//const app = require('./app.js');

const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();
app.use(cors());
app.use(express.static('dist'));
const readDb = require('../db/index');
const port = process.env.port || '3001';



var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
console.log(randomCard)

app.get('/product/:id', async (req, res) => {
  let id = req.path.split('/product/');
  // console.log(id)

  try {
    let results = await readDb.readDb.one(Number(id[1]));
    res.send(results);
  } catch (e) {
    console.error(e);
  }
});
app.get('/ok', (req, res) => {
  // console.log(path.join(`${__dirname}/../dist/bundle.js`));
  res.sendFile(path.join(`${__dirname}/../dist/bundle.js`));
});
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Now listening on http://localhost:${port}`);
});
