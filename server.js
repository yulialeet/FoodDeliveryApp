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

connection.connect();


app.get('/restaurantsList', function (req, res){
  connection.query('select * from restaurant', function (error, results, fields) {
    if (error) throw error;
    else {
      res.send(results);
    }
  });
})

app.get('/infoAboutRestaurant', function (req, res){
  connection.query('select * from restaurant WHERE idRestaurant = ?', req.query.idRest, function (error, results, fields) {
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

app.get('/deliveryPrices', function (req, res){
    connection.query('SELECT DeliveryPrice, FreeDeliveryFrom, TimeToDelivery FROM restaurant WHERE idRestaurant = ?', req.query.idRest, function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/loginuser', function (req, res){
    connection.query('SELECT * FROM usersapp WHERE UserLogin = ? AND UserPassword = ?', [req.query.login, req.query.password], function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/reviewsList', function (req, res){
    connection.query('SELECT clientsapp.FIO, clientsapp.idClient, reviews.* FROM reviews,clientsapp WHERE reviews.ClientsAppidClient=clientsapp.idClient AND RestaurantidRestaurant = ?', req.query.idRest, function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/getClientId', function (req, res){
    connection.query('SELECT clientsapp.idClient FROM clientsapp WHERE clientsapp.UsersAppIdUser = ?', req.query.idUser, function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/createNewOrder', function (req, res){
    connection.query('INSERT INTO `orders` (`idOrder`, `ClientsAppidClient`, `RestaurantidRestaurant`, `OrderTime`, `TotalPrice`, `DescriptionToOrder`, `OrderStatus`) VALUES (NULL, ?, ?, CURRENT_TIMESTAMP, ?, NULL, NULL)', [req.query.idClient, req.query.idRest, req.query.priceTotal], function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/dishesInNewOrder', function (req, res){
    connection.query('INSERT INTO `groupdishes` (`idGroupDishes`, `DishesidDish`, `AmountDishes`, `OrdersidOrder`) VALUES (NULL, ?, ?, ?)', [req.query.idDish, req.query.quant, req.query.order], function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })


  //INSERT INTO `orders` (`idOrder`, `ClientsAppidClient`, `RestaurantidRestaurant`, `OrderTime`, `TotalPrice`, `DescriptionToOrder`, `OrderStatus`) VALUES (NULL, '1', '1', CURRENT_TIMESTAMP, '2250', NULL, NULL);

app.listen(8082, function () {
    console.log('okayyy')
});
console.log('App is listening on port ');
module.exports = app;
//connection.end();
