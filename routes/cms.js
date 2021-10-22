const express = require("express");
const router = express.Router();
const { populateStateLga, index, create } = require('../controllers/location.controller');


router.post('/populate', populateStateLga);
router.route('/locations').get(index).post(create)


module.exports = router;