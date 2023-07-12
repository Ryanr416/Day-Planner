const PlannerModel = require('../models/planner');

module.exports = {
	create,
    edit
}


async function edit(req, res) {
const editPlans = await PlannerModel.findOne({_id: req.params.id, userRecommending: req.user_id}, function(err, PlannerModel){
    if (err || !PlannerModel) return res.redirect ('/planners');
    res.render('planners/edit', {PlannerModel});
})

}





async function create(req, res){

	
	console.log(req.body)
	try {

		const plansFromTheDb = await PlannerModel.findById(req.params.id)
		// I could check my code make sure I'm finding the movie
		
		// Add the logged in user properties to req.body!
		req.body.user = req.user._id
		req.body.userName = req.user.name;
		req.body.userAvatar = req.user.avatar;
		


		// add the review (req.body) to the movie (movieFromTheDb) we found from the db
		plansFromTheDb.comments.push(req.body);
		// since I changed a document (movieFromTheDb) (I mutated it)
		// I have to tell mongodb that, so we have to save
		await plansFromTheDb.save();
		// Then respond to the client!
		console.log(plansFromTheDb)
		// what do you have access too that has the movie id?
		res.redirect(`/planners/${req.params.id}`)

	} catch(err){
		res.send(err)
	}
		



}