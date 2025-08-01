require("dotenv").config();
const mongoose = require('mongoose');
const axios = require('axios');
const Workout = require("../model/Workout");

console.log("Using API Key:", process.env.RAPIDAPI_KEY);
mongoose.set("debug", true);


console.log("Connecting to:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => { console.log("MongoDB connected ✅"); })
  .catch(err => { console.log(err); });

async function fetchdata() {
  try {
    const res = await axios.get("https://exercisedb.p.rapidapi.com/exercises?limit=100", {
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
      }
    });

    const data = res.data;

    const workoutData = data.map(item => ({
      name: item.name,
      category: item.bodyPart,
      target: item.target,
      equipment: item.equipment,
      gifUrl: item.gifUrl,
      caloriesPerMinute: Math.floor(Math.random() * 6) + 5
    }));

    await Workout.deleteMany({});
    await Workout.insertMany(workoutData);
    console.log("Workouts seeded successfully ✅");

  } catch (err) {
    console.log("Error seeding workouts:", err);
  } finally {
    process.exit();
  }
}

fetchdata();

