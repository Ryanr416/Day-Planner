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
    Date: {
      type: Number,
      default: function() {
        return new Date().getFullYear();
      },
      min: 1927
    },
    // Cast is an array of Id's that reference the Performer model
    // Many to Many Relationship
    cast: [{type: mongoose.Schema.Types.ObjectId, ref: 'Performer'}],
    // This creates a one (Movie) has many (Reviews) relationship
    // a review belongs to a movie
    Comments: [commentsSchema],// using embedding to create the relationship
    mpaaRating: {
      type: String,
      enum: ['G', 'PG', 'PG-13', 'R']
    },
    nowShowing: { type: Boolean, default: true }
  }, {
    timestamps: true
  });
  
  // Compile the schema into a model and export it
  module.exports = mongoose.model('planner', plannerSchema);