const express = require('express');
const mongoose = require('mongoose');
const Workout = require("../backend/model/Workout");
const cors = require('cors');


const server = express();
server.use(express.json());
const port = 5000;

mongoose.connect('mongodb://localhost:27017/Workout')
.then(()=>{console.log('succesfully conncect');
})
.catch((err)=>{console.log(err);
})
server.use(cors());

server.get('/',(req,res)=>{
    res.send('Api is running');
    
})
server.get('/api/workouts',async (req,res)=>{
   try {
    const workouts = await Workout.find();
    res.json(workouts);
   } catch (error) {
    res.status(500).json({error:"failed to fetch api"})
    
   }
    
})
server.put('/api/workouts/:id',async(req,res)=>{
    try{
        const workoutId = req.params.id;
    const updateData = req.body;
    const updateworkout = await Workout.findByIdAndUpdate(
        workoutId,
        updateData,
        {new:true},
    )
    if(!updateworkout){
        res.status(501).json("Workout not found ");
        
    }
    res.json(updateworkout);
    }
    catch(error){
        res.status(501).json({error:"failed to update the workout "})
    }
    
    

    
    
})
server.delete('/api/workout/:id',async(req,res)=>{
    try{
        const deleteworkoutid = req.params.id;
        
        const deleteworkouts = await Workout.findByIdAndDelete(
           deleteworkoutid,
           
           {new:true}
        )
        res.json(deleteworkouts);
    }
    catch(error){
        res.status(501).json({error:"workout not delete "});
    }
})




server.listen(port,()=>{
    console.log(`your server running at http://localhost:${port}`);
    

})