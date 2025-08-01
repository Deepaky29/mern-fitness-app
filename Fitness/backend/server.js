const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Workout = require('./model/Workout'); // ✅ fixed relative path

const server = express();
const port = 5000;

// Middleware
server.use(cors());
server.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/Workout')
  .then(() => console.log('✅ MongoDB successfully connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
server.get('/', (req, res) => {
  res.send('API is running');
});

server.get('/api/workouts', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

server.put('/api/workouts/:id', async (req, res) => {
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedWorkout) {
      return res.status(404).json({ error: 'Workout not found' });
    }

    res.json(updatedWorkout);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update workout' });
  }
});

server.delete('/api/workouts/:id', async (req, res) => {
  try {
    const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);
    if (!deletedWorkout) {
      return res.status(404).json({ error: 'Workout not found' });
    }

    res.json(deletedWorkout);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete workout' });
  }
});

// Start Server
server.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
