const app = require('./app.js');
const port ='3014';

app.listen(port,  () => {
  // eslint-disable-next-line no-console
  console.log(`Now listening on${port}`);
});
