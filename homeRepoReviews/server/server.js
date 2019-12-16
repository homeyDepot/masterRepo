const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan')
const port = 5000;
const app = express();
app.use(cors());

app.use(morgan('dev'))


const connection = require('../db/config')


app.use(express.static('dist'));

connection.connect();

connection.query('SELECT reviewer FROM reviews', function (error, results) {
  if (error){
    console.log(error);
  };
  console.log('Db connected');
});

app.get('/reviews', (req, res) => {
  connection.query('SELECT * FROM reviews', function (error, results) {
    if (error){
      console.log('This is wrong: ' + error);
    };
    res.send(results)
  });
});


app.get('/reviewsComp', (req, res) => {
  // console.log(path.join(`${__dirname}/../dist/bundle.js`));
  res.sendFile(path.join(`${__dirname}/../dist/bundle.js`));
});



app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Now listening on localhost: ${port}`);
});
