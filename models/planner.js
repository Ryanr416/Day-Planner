const mongoose = require('mongoose');
const planners = require('../controllers/planners');
const Schema = mongoose.Schema;


module.exports = {
  deleteOne
}

function deleteOne(id) {
  const idx = planners.findIndex(planner => planner.id === parseInt(id));
  planners.splice(idx, 1);
}





const commentsSchema = new Schema({
    content: {
      type: String,
      required: true
    },
 
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });



const plannerSchema = new mongoose.Schema({
    
    title: { type: String, required: true },
    date: {
      type: Number,
      default: function() {
        return new Date().getFullYear();
      },
      time: {
        type: Number
      }
    },

    comments: [commentsSchema],// using embedding to create the relationship
  

  }, {
    timestamps: true
  });
  




  // Compile the schema into a model and export it
  module.exports = mongoose.model('planner', plannerSchema);




