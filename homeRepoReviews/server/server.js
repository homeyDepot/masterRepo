const express = require('express');

const connection = require('/Users/studentThirteen/Desktop/masterRepo/homeRepoReviews/db/config.js')

const app = express();

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

const port = 5000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Now listening on localhost: ${port}`);
});
