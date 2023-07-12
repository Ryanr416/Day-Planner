
const PlannerModel = require('../models/planner');


module.exports = {
    index,
    new: newPlanner,
    create,
    show
    


};



async function index(req, res) {
  const plans = await PlannerModel.find({});
  console.log(plans);
  res.render("planners/index", { title: "All Plans", plans: plans });

 
}

function newPlanner(req, res) {
res.render('planners/new', { title: 'Add Plans', errorMsg: ''});

}


async function show(req, res) {
  console.log(req.user)

  try {


    const plansFromTheDatabase = await PlannerModel
     .findById(req.params.id)


                                  

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

