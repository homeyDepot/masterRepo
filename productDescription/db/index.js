const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Db is connected');
  }
});

const readDb = {}

readDb.all = () => {
  return new Promise((resolve, reject)=>{
    connection.query(`Select *  from product where CAST(price as Decimal(19,2))`, (err, results)=>{
      if (err){
        return reject(err)
      }
      // console.log('This is results',results)
      return resolve(results)
    })
  })
};

readDb.one =(id)=>{

  return new Promise((resolve, reject)=>{
    connection.query(`Select *  from product where skuid =${id}`, (err, results)=>{
      if (err){
        return reject(err)
      }
      // console.log('This is results',results)
      return resolve(results)
    })
  })

}

//module.exports = connection;

module.exports = {
  readDb
};
