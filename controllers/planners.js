
const PlannerModel = require('../models/planner');


module.exports = {
    index,
    new: newPlanner,
    create,
    show


};



function index(req, res, next) {
    res.render('planners/index.ejs')
}

function newPlanner(req, res) {
res.render('planners/new', { title: 'Add Plans', errorMsg: ''});

}

async function show(req, res) {
    console.log(req.user)
  
    try {
  

      const plansFromTheDatabase = await PlannerModel
        .findById(req.params.id)
        .exec();
  
                                    
  
      console.log(plansFromTheDatabase);

  
      res.render("planners/show", {
        plans: plansFromTheDatabase,
      });
    } catch (err) {
      res.send(err);
    }
  }
  





function create(req, res) {
    console.log(req.body, " <_ contents of our form");
    
    res.redirect('/planners'); 


    PlannerModel.create(req.body)
    }