const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan')
const port = 5000;
const app = express();
app.use(cors());

// app.use(morgan('dev'))


const connection = require('../db/config')


app.use(express.static('dist'));

connection.connect();


app.get('/reviews/:id', (req, res) => {
  console.log('I am path',req.path)
  let id = req.path.split('/reviews/')
  console.log(id)
  connection.query(`SELECT * FROM reviews where skuid =${id[1]} `, function (error, results) {
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
