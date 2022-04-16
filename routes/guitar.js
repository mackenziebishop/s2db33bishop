var express = require('express');
const guitar_controllers = require('../controllers/guitarController');
var router = express.Router();

/* GET guitars */
router.get('/', guitar_controllers.guitar_view_all_Page);
module.exports = router;

/*GET detail guitar page */
router.get('/detail', guitar_controllers.guitar_view_one_Page);
