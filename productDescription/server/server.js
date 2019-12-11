//const app = require('./app.js');

const express = require('express');

const app = express();

app.use(express.static('dist'));
const readDb = require('../db/index');
const port = process.env.port || '8080';

console.log(app);
app.get('/product', async (req, res) => {
  try {
    let results = await readDb.readDb.all();

    res.send(results);
  } catch (e) {
    console.log(e);
    res.send('error');
  }

  //res.send("okay boomer")
});

app.get('/product/:id', async (req, res) => {
  let id = req.path.split('/product/');

  try {
    let results = await readDb.readDb.one(Number(id[1]));
    res.send(results);
  } catch (e) {
    console.error(e);
  }
});
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Now listening on ${port}`);
});
