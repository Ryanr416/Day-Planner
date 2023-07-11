
const PlannerModel = require('../models/planner');


module.exports = {
    index,
    new: newPlanner,
    create

};



function index(req, res, next) {
    res.render('planners/index.ejs')
}

function newPlanner(req, res) {
res.render('planners/new', { title: 'Add Plans', errorMsg: ''});

}

function create(req, res) {
    console.log(req.body, " <_ contents of our form");
    
    res.redirect('/planners'); 


    PlannerModel.create(req.body)
    }