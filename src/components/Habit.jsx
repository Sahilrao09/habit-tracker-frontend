const Habit = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Habits</h1>

      <div className="flex mb-4 gap-2">
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Enter new habit"
        />
        <button
          onClick={handleAddHabit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul>
        {habits.map((habit) => (
          <li
            key={habit._id}
            className="flex justify-between items-center border-b py-2"
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => toggleComplete(habit)}
              />
              <span
                className={habit.completed ? "line-through text-gray-400" : ""}
              >
                {habit.name}
              </span>
            </label>
            <button
              onClick={() => handleDeleteHabit(habit._id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Habit;
