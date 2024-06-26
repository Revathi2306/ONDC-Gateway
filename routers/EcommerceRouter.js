const express = require('express');
const Commerce_controller=require('../controllers/EcommerceController');
const authorizeBuyer = require('../middlewares/authorizeBuyer')

const Router = express.Router();


// get search product
Router.get('/commerce/searchProduct',authorizeBuyer,Commerce_controller.searchProduct)

// get particular product
Router.get('/commerce/:platformId/:productId',authorizeBuyer,Commerce_controller.getProduct)

// place order
Router.post('/commerce/placeOrder',authorizeBuyer,Commerce_controller.placeOrder)

// get Order details
Router.get('/commerce/order/:platformId/:orderId',authorizeBuyer,Commerce_controller.getOrderDetail)

// cancel order --buyer
Router.put('/commerce/cancelOrder',authorizeBuyer,Commerce_controller.cancelOrder)


// get review
Router.get('/commerce/getReview',authorizeBuyer,Commerce_controller.getReview)

// add review
Router.post('/commerce/addReview',authorizeBuyer,Commerce_controller.addReview)


module.exports = Router;