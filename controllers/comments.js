const PlannerModel = require('../models/planner');

module.exports = {
	create
}


async function create(req, res){

	// Take the contents of the form and create a review

	// 1. Find the movie we want to add the review too.
	    // What information do we have the identifys the movie? req.params.id 
	  //2. Talk to the database to go find that movie, 
		//   What talks to the Movies in the database? MovieModel
		// What method on the movieModel can find something by an id? findById
	  // What variable is the Contents of the form? req.body <- represent a Review
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