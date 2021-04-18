const express  = require('express');
const app = express();
var mysql      = require('mysql');

const PORT = 8082
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
    connection.query('INSERT INTO `orders` (`idOrder`, `ClientsAppidClient`, `RestaurantidRestaurant`, `OrderTime`, `TotalPrice`, `DescriptionToOrder`, `OrderStatus`) VALUES (NULL, ?, ?, CURRENT_TIMESTAMP, ?, ?, "Обрабатывается")', [req.query.idClient, req.query.idRest, req.query.priceTotal, req.query.description], function (error, results, fields) {
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

  app.get('/addNewReview', function (req, res){
    connection.query('INSERT INTO `reviews` (`idReview`, `ClientsAppidClient`, `RestaurantidRestaurant`, `DescriptionReview`, `RateOfRestaurant`) VALUES (NULL, ?, ?, ?, ?)', [req.query.idClient, req.query.idRest, req.query.description, req.query.rating], function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/userOrdersList', function (req, res){
    connection.query('SELECT orders.idOrder, restaurant.NameRestaurant, orders.OrderTime, orders.TotalPrice, orders.DescriptionToOrder, orders.OrderStatus, dishes.NameDish, groupdishes.AmountDishes FROM orders INNER JOIN restaurant ON restaurant.idRestaurant=orders.RestaurantidRestaurant INNER JOIN groupdishes ON groupdishes.OrdersidOrder=orders.idOrder INNER JOIN dishes ON groupdishes.DishesidDish=dishes.idDish WHERE orders.ClientsAppidClient=?', req.query.idClient, function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/registrationUser', function (req, res){
    connection.query('INSERT INTO `usersapp` (`idUser`, `UserLogin`, `UserPassword`, `UserRole`) VALUES (NULL, ?, ?, 0)', [req.query.login, req.query.password], function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/registrationClient', function (req, res){
    connection.query('INSERT INTO `clientsapp` (`idClient`, `FIO`, `PhoneNumber`, `DeliveryAddress`, `UsersAppIdUser`) VALUES (NULL, ?, ?, ?, ?)', [req.query.nameclient, req.query.phonenumber, req.query.address, req.query.iduser], function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/checkisuserregistered', function (req, res){
    connection.query('SELECT * FROM usersapp where UserLogin = ?', req.query.login, function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/updateOrderStatus', function (req, res){
    connection.query('UPDATE `orders` SET `OrderStatus` = ? WHERE `orders`.`idOrder` = ?', [req.query.orderStatus, req.query.idOrder], function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/infoAboutManager', function (req, res){
    connection.query('SELECT * FROM restaurantmanagers WHERE UsersAppidUser = ?', req.query.idUser, function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/managerOrdersList', function (req, res){
    connection.query('SELECT orders.idOrder, restaurant.NameRestaurant, orders.OrderTime, orders.TotalPrice, orders.DescriptionToOrder, orders.OrderStatus, dishes.NameDish, groupdishes.AmountDishes, clientsapp.FIO FROM orders INNER JOIN restaurant ON restaurant.idRestaurant=orders.RestaurantidRestaurant INNER JOIN groupdishes ON groupdishes.OrdersidOrder=orders.idOrder INNER JOIN dishes ON groupdishes.DishesidDish=dishes.idDish INNER JOIN clientsapp ON orders.ClientsAppidClient=clientsapp.idClient WHERE orders.RestaurantidRestaurant=?', req.query.idRest, function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/updateRatingRestaurants', function (req, res){
    connection.query('UPDATE restaurant SET restaurant.RatingRest=(SELECT ROUND(AVG(RateOfRestaurant),1) FROM reviews WHERE restaurant.idRestaurant=reviews.RestaurantidRestaurant GROUP BY reviews.RestaurantidRestaurant)', function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/getDeliveryAddress', function (req, res){
    connection.query('SELECT `DeliveryAddress` FROM `clientsapp` WHERE `clientsapp`.`idClient` = ?', req.query.idClient, function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/updateDeliveryAddress', function (req, res){
    connection.query('UPDATE `clientsapp` SET `DeliveryAddress` = ? WHERE `clientsapp`.`idClient` = ?', [req.query.deladdress, req.query.idClient], function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })

  app.get('/nameRestaurant', function (req, res){
    connection.query('SELECT NameRestaurant FROM restaurant where idRestaurant=?', req.query.idRest, function (error, results, fields) {
      if (error) throw error;
      else {
        res.send(results);
      }
    });
  })


  //UPDATE restaurant SET restaurant.RatingRest=(SELECT AVG(RateOfRestaurant) FROM reviews WHERE restaurant.idRestaurant=reviews.RestaurantidRestaurant GROUP BY reviews.RestaurantidRestaurant)
  //UPDATE `orders` SET `OrderStatus` = 'Hissss' WHERE `orders`.`idOrder` = 1;

  //INSERT INTO `orders` (`idOrder`, `ClientsAppidClient`, `RestaurantidRestaurant`, `OrderTime`, `TotalPrice`, `DescriptionToOrder`, `OrderStatus`) VALUES (NULL, '1', '1', CURRENT_TIMESTAMP, '2250', NULL, NULL);

app.listen(process.env.PORT || PORT, function () {
    console.log('okayyy')
});
console.log('App is listening on port ');
module.exports = app;
//connection.end();
