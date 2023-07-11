const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentsSchema = new Schema({
    content: {
      type: String,
      required: true
    },
 // 1 to many, A review belongs to a User!
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
      min: 1927
    },

    comments: [commentsSchema],// using embedding to create the relationship
  

  }, {
    timestamps: true
  });
  
  // Compile the schema into a model and export it
  module.exports = mongoose.model('planner', plannerSchema);


  module.exports = {
    create
  }

  function create(planners) {
    planner.id = Date.now() % 1000000;
    planners.push(planner)
  }