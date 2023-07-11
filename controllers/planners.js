
const PlannerModel = require('../models/planner');


module.exports = {
    index,

};



function index(req, res, next) {
    res.render('planners/index.ejs')
}


