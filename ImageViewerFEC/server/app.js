const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const connection = mysql.createConnection ({
  host : 'localhost',
  user : 'root',
  password : 'donuts23',
  database : 'imageGallery'
})

module.exports = connection;

connection.connect((err) => {
  if (err) {
    console.log(err)
  }
  console.log('Connection Successful!!')
})


app.use(cors());
app.use(express.static('dist'));


app.get('/test_pic', (req, res) => {
  connection.query('SELECT * FROM test_pic', (err, data) => {
      if(err){
          res.send('something went wrong');
      }
          res.send(data);
  })
});


module.exports = app;