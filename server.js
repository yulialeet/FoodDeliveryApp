const express  = require('express');
const app = express();
const path = require('path');
var mysql      = require('mysql');

const conn = require('connect')

var connection = mysql.createConnection({
  host     : 'db4free.net',
  port: '3306',
  user     : 'yuliaveselova',
  password : 'FoodDelivery-11-YVBD!',
  database : 'fooddeliverydb'
});
app.use(express.static(__dirname));

connection.connect();

app.get('/restaurantsList', function (req, res){
connection.query('select * from reviews', function (error, results, fields) {
    if (error) throw error;
    else {
      console.log('The solution is: ', results);
      res.send(results);
    }
  });
})

app.listen(8082, function () {
    console.log('okayyy')
});
console.log('App is listening on port ');
module.exports = app;
//connection.end();
