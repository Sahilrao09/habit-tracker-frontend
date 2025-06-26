import { useEffect, useState } from "react";
import {
  fetchHabits,
  createHabit,
  updateHabit,
  deleteHabit,
} from "../api/habitApi";
import HabitForm from "./HabitForm";
import HabitItem from "./HabitItem";
import HabitGraph from "./HabitGraph"; // new component

const HabitPage = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  const resetIfOutdated = (habit) => {
    const lastUpdate = new Date(habit.updatedAt).toDateString();
    const today = new Date().toDateString();
    if (lastUpdate !== today && habit.completed) {
      return { ...habit, completed: false };
    }
    return habit;
  };

  useEffect(() => {
    const loadHabits = async () => {
      try {
        const response = await fetchHabits();
        const habitsWithReset = response.data.habits.map(resetIfOutdated);
        setHabits(habitsWithReset);
      } catch (error) {
        console.error("Failed to fetch habits", error);
      } finally {
        setLoading(false);
      }
    };

    loadHabits();
  }, []);

  const handleCreate = async (habit) => {
    const res = await createHabit(habit);
    console.log("Created habit response:", res.data);
    setHabits((prev) => [...prev, res.data.habit]);
  };

  const handleUpdate = async (id, updatedFields) => {
    const res = await updateHabit(id, updatedFields);
    const updatedHabit = res.data.habit;
    setHabits((prev) => prev.map((h) => (h._id === id ? updatedHabit : h)));
  };

  const handleDelete = async (id) => {
    await deleteHabit(id);
    setHabits((prev) => prev.filter((h) => h._id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Habits</h1>
      <HabitForm onSubmit={handleCreate} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        habits.map((habit) => (
          <HabitItem
            key={habit._id}
            habit={habit}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))
      )}
      <HabitGraph habits={habits} />
    </div>
  );
};

export default HabitPage;
