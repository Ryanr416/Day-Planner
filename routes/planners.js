const express = require('express');
const router = express.Router();

const plannerCtrl = require ('../controllers/planners');


 router.get('/', plannerCtrl.index);

 router.get('/new', plannerCtrl.new);

 router.post('/', plannerCtrl.create)

module.exports = router;