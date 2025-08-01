const mongoose = require('mongoose');


const workoutschema = new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String},
    targetmuscle:{type:String},
    equipment:{type:String},
    gifUrl:{type:String},
    caloriesPerMinute:{type:Number},
})
module.exports = mongoose.model("workout", workoutschema);
