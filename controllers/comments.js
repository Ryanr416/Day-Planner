const PlannerModel = require('../models/planner');

module.exports = {
	create
}








async function create(req, res){

	
	console.log(req.body)
	try {

		const plansFromTheDb = await PlannerModel.findById(req.params.id)
		
		
		// Add the logged in user properties to req.body!
		req.body.user = req.user._id
		req.body.userName = req.user.name;
		req.body.userAvatar = req.user.avatar;
		


		// add the review (req.body) to the plans (plansFromTheDb) we found from the db
		plansFromTheDb.comments.push(req.body);
		// since I changed a document (plansFromTheDb) 
		// I have to tell mongodb that, so we have to save
		await plansFromTheDb.save();
		// Then respond to the client!
		console.log(plansFromTheDb)
		// redirect to the ID of planners
		res.redirect(`/planners/${req.params.id}`)

	} catch(err){
		res.send(err)
	}
		



}