//const app = require('./app.js');

const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const app = express();
app.use(morgan('dev'))
app.use(express.json())

app.use(cors())
app.use(express.static('lib'));

const port = '3000';

// console.log(app);

// app.get('/',(req,res) => {
// 	console.log(path.join(`${__dirname}/../productDescription/dist/bundle.js`))
// 	// res.send('ok')
//     res.sendFile(path.join(`${__dirname}/../productDescription/dist/bundle.js`))
// })


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Now listening on http://localhost:${port}`);
});
