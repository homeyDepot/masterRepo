const express = require('express');
const mysql     = require('mysql');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 30013;

app.use(morgan('dev'))

app.use(express.static('dist'))
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database: 'item_list'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))


app.get('/products', (req,res) => {
    connection.query('SELECT * FROM products', (err, products) => {
        if(err){
            res.send('Ooos Error')
        } else {
            res.send(products)
        }
    }) 
  });

  app.get('/products/:id', (req,res) => {
    connection.query(`SELECT * FROM products WHERE id=${req.params.id}`, (err, products) => {
        if(err){
            res.send('error finding products')
        } else {
            res.send(products)
        }
    }) 
  });
  app.get('/products', (req, res) => {
    // console.log(path.join(`${__dirname}/../dist/bundle.js`));
    res.sendFile(path.join(`${__dirname}/../dist/bundle.js`));
  });
 


















app.listen(port, () => console.log(`Example app listening on port ${port}!`))