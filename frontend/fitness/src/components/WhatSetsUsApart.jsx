import React, { useEffect, useState } from 'react';
import fit2 from '../assets/OIP (1).jpg';
import fit3 from '../assets/OIP (2).jpg';
import fit4 from '../assets/OIP (3).jpg';
import fit5 from '../assets/OIP (4).jpg';
import fit6 from '../assets/OIP (5).jpg';
import fit7 from '../assets/OIP (6).jpg';
const WorkoutSection = () => {
  const [absWorkouts, setAbsWorkouts] = useState([]);
  const [otherWorkouts, setOtherWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackGifs = [
    fit2,
    fit3,
    fit4,
    fit5,
    fit6,
    fit7,
  ];

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/workouts');
        const data = await res.json();

        const abs = data
          .filter((w) => w.targetmuscle?.toLowerCase() === 'abs')
          .slice(0, 6);

        const others = data
          .filter((w) => w.targetmuscle?.toLowerCase() !== 'abs')
          .slice(0, 6);

        setAbsWorkouts(abs);
        setOtherWorkouts(others);
      } catch (err) {
        console.error('Error fetching workouts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  const WorkoutGrid = ({ workouts }) => (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {workouts.map((workout, index) => (
        <div
          key={workout._id || index}
          className="bg-gray-900 rounded-xl p-5 border border-gray-700 hover:border-lime-400 transition duration-300 shadow-md hover:shadow-lime-400/30 hover:scale-105"
        >
          <img
            src={workout.gifUrl || fallbackGifs[index % fallbackGifs.length]}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
            }}
            alt={workout.name}
            className="w-full h-52 object-cover rounded mb-3"
          />
          <h3 className="text-xl font-bold text-white mb-1">{workout.name}</h3>
          <p className="text-sm text-lime-300">{workout.targetmuscle} | {workout.equipment}</p>
          <p className="text-gray-400 text-sm">🔥 {workout.caloriesPerMinute} cal/min</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-lime-400 text-center mb-6">
          Workout Focus: <span className="text-white">Abs & More</span>
        </h2>
        <p className="text-center text-gray-400 mb-14">
          Explore the most effective exercises to strengthen your core and challenge your body.
        </p>

        {loading ? (
          <p className="text-center text-gray-300">Loading workouts...</p>
        ) : (
          <>
            {absWorkouts.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 text-lime-300">🔥 Abs Workouts</h3>
                <WorkoutGrid workouts={absWorkouts} />
              </div>
            )}
            {otherWorkouts.length > 0 && (
              <div>
                <WorkoutGrid workouts={otherWorkouts} />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default WorkoutSection;
