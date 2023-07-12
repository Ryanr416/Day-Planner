const express = require('express')
const router = express.Router();

const plannerCtrl = require('../controllers/comments')


router.post('/planners/:id/comment', plannerCtrl.create);
router.get('/planners/:id/comment', plannerCtrl.edit)



module.exports = router