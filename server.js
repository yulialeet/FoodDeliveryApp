const express  = require('express');
const app = express();
var mysql      = require('mysql');


var connection = mysql.createConnection({
  host     : 'db4free.net',
  port: '3306',
  user     : 'yuliaveselova',
  password : 'FoodDelivery-11-YVBD!',
  database : 'fooddeliverydb'
});
//app.use(express.static(__dirname));

connection.connect();

// app.get('/restaurantsList', function (req, res){
//   console.log(req.query.idRestaurant)
//   connection.query('select * from restaurant where idRestaurant = ?',req.query.idRestaurant, function (error, results, fields) {
//     if (error) throw error;
//     else {
//       res.send(results);
//     }
//   });
// })
app.get('/restaurantsList', function (req, res){
  connection.query('select * from restaurant', function (error, results, fields) {
    if (error) throw error;
    else {
      res.send(results);
    }
  });
})

app.get('/dishesList', function (req, res){
  connection.query('select * from dishes where RestaurantidRestaurant = ?',req.query.idRest, function (error, results, fields) {
    if (error) throw error;
    else {
      res.send(results);
    }
  });
})

app.get('/restaurantsCategory', function (req, res){
  connection.query('select * from restaurantcategory', function (error, results, fields) {
    if (error) throw error;
    else {
      res.send(results);
    }
  });
})

app.get('/dishesCategory', function (req, res){
  connection.query('SELECT DISTINCT idCategoryDish, NameCategory FROM dishescategory JOIN dishes ON dishescategory.idCategoryDish=dishes.CategoriesidCategories WHERE RestaurantidRestaurant = ?', req.query.idRest, function (error, results, fields) {
    if (error) throw error;
    else {
      res.send(results);
    }
  });
})

app.get('/restaurantsForCategory', function (req, res){
    connection.query('SELECT restaurant.* from restaurant JOIN grouprestaurantcategory ON grouprestaurantcategory.Restaurantid = restaurant.idRestaurant JOIN restaurantcategory ON restaurantcategory.idCategoryRestaurant =grouprestaurantcategory.RestaurantCategoryid WHERE idCategoryRestaurant = ?',req.query.idCategory, function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/dishesForCategory', function (req, res){
    connection.query('SELECT dishes.* FROM dishes WHERE CategoriesidCategories = ? AND RestaurantidRestaurant = ?', [req.query.idCategory, req.query.idRest], function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/dishInformation', function (req, res){
  connection.query('SELECT dishes.* FROM dishes WHERE idDish = ?', req.query.idDish, function (error, results, fields) {
    if (error) throw error;
    else {
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
