const express = require('express');
const router = express.Router();
const CustomerController = require('./controllers/CustomerController.js');

router.get('/get-customer-data', CustomerController.getCustomerData);

module.exports = router;
