var express = require('express');
var router = express.Router();

// Require controller modules. 
var api_controller = require('../controllers/api'); 
var guitar_controller = require('../controllers/guitarController'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// GUITAR ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/guitars/:id', guitar_controller.guitar_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/guitars/:id', guitar_controller.guitar_delete); 
 
// PUT request to update Costume. 
router.put('/resource/guitars/:id', 
guitar_controller.guitar_update_put); 
 
// GET request for one Costume. 
router.get('/resource/guitars/:id', guitar_controller.guitar_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/guitars', guitar_controller.guitar_list); 
 
module.exports = router; 