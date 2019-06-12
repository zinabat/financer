var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/userController');

router.get('/login', user_controller.user_login);

module.exports = router;