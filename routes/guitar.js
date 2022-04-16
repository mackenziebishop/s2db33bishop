var express = require('express');
const guitar_controllers = require('../controllers/guitarController');
var router = express.Router();

/* GET guitars */
router.get('/', guitar_controllers.guitar_view_all_Page);
module.exports = router;

/*GET detail guitar page */
router.get('/detail', guitar_controllers.guitar_view_one_Page);

/*GET create costume page*/
router.get('/create', guitar_controllers.guitar_create_Page);

/*GET create update page*/
router.get('/update', guitar_controllers.guitar_update_Page);

/*GET delete guitar page*/
router.get('/delete', guitar_controllers.guitar_delete_Page);