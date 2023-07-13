
const PlannerModel = require('../models/planner');


module.exports = {
    index,
    new: newPlanner,
    create,
    show,
    delete: deletePlans,
    edit,
    update
   

};

async function edit(req, res) {
	const editPlans = await PlannerModel.findOne({_id: req.params.id, userRecommending: req.user_id}, function(err, PlannerModel){
		if (err || !PlannerModel) return res.redirect ('/planners');
		res.render('planners/edit', {PlannerModel});
	})

}


async function update(req, res) {
  const updateplans = await PlannerModel.findOneAndUpdate({_id: req.params.id, userRecommending: req.user._id},
    req.body,
    {new: true},
    function(err, PlannerModel) {
      if (err || !book) return res.redirect('/planners');
      res.redirect(`/planners/${PlannerModel._id}`);
  
    })}



async function deletePlans(req, res){
const deleteplans = await PlannerModel.findOneAndDelete(req.params.id)
res.redirect('/planners')

}

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

