var express = require('express');
var router = express.Router();

//R3quire controller modules
var api_controller = require('../controllers/api');
var guitar_controller = require('../controllers/guitarController');

/// API ROUTE ///

// GET resources base
router.get('/', api_controller.api);

/// GUITAR ROUTES ///

//POST request for creating a Guitar
router.post('/guitarController', guitar_controller.guitar_create_post);

//DELETE request to delete Guitar
router.delete('/guitarController/:id', guitar_controller.guitar_delete);

//PUT request to update Guitar
router.get('/guitarController/:id', guitar_controller.guitar_detail);

//GET request for list of all Guitar items
router.get('/guitarController', guitar_controller.guitar_list);

module.exports = router;