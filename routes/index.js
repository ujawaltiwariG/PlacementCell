const express = require('express');




const router = express.Router();
const homeController = require('../controllers/home_controller');
const app = express();
console.log("router loaded");

router.get('/', homeController.home);
router.use('/users', require('./users'));


module.exports = router;