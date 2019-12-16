const express = require('express');
const path = require ('path');
const app = express();
const port = 3000;

app.use(express.static('dist'));


app.get('/Navbar', (req, res)=>{
    console.log(__dirname)
    res.sendFile(path.join(`${__dirname}/dist/bundle.js`));
})
app.listen(port, () => console.log(`listening from port: ${port}`));