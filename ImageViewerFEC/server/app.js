// const express = require('express');
// const app = express();
// const mysql = require('mysql');
// const cors = require('cors');
// const connection = mysql.createConnection ({
//   host : 'localhost',
//   user : 'root',
//   password : 'donuts23',
//   database : 'imageGallery'
// })

// module.exports = connection;

// connection.connect((err) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log('Connection Successful!!')
// })


const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
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


app.get('/test_pic/:id', (req, res) => {
  let id = req.path.split('/test_pic/')
  connection.query(`SELECT * FROM test_pic where skuid = ${id[1]}`, (err, data) => {
      if(err){
          res.send('something went wrong');
      }
          res.send(data);
  })
});

app.get('/Pictures', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../dist/bundle.js`))
})


module.exports = app;