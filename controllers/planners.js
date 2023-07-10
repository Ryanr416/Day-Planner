const PlannerModel = require('../models/planner');


module.export = {
    index: index
};

function index(req, res, next) {
    res.render('/planner/index', {planner: PlannerModel.getAll()})
}