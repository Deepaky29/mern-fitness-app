const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    date:{type:Date},
    workouts:[{
        workoutId:{type:mongoose.Schema.ObjectId,ref:"Workout"},
        duration:{type:Number},
    }        
    ],
})
module.exports= mongoose.model ("schedule",scheduleSchema);