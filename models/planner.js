const mongoose = require('mongoose');
const planners = require('../controllers/planners');
const Schema = mongoose.Schema;





// schema for the comments data

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

// schema for my plans data with the comments schema embedded

const plannerSchema = new mongoose.Schema({
    
    title: { type: String, required: true },
    date: {
      type: String,
      default: function() {
        return new Date().getDate();

      },
      time: {
        type: Number,
      }
    },

    comments: [commentsSchema],// using embedding to create the relationship
    title: { type: String, required: true},
    

  }, {
    timestamps: true
  });
  




  // Compile the schema into a model and export it
  module.exports = mongoose.model('planner', plannerSchema);




