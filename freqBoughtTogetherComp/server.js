const express = require('express');
const app = express();
const cors = require('cors');
const path = require ('path');
const port = 3003;

app.use(express.static('dist'));

app.get('/frequent', (req, res)=>{
    res.sendFile(path.join(`${__dirname}/dist/bundle.js`));
});

app.listen(port, () => console.log(`listening from port: ${port}`));