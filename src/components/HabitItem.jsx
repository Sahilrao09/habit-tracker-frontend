const HabitItem = ({ habit, onUpdate, onDelete }) => {
  const toggleCompleted = () => {
    onUpdate(habit._id, { completed: !habit.completed });
  };

  return (
    <div className="flex items-center justify-between border p-2 rounded mb-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={!!habit.completed} // ensures it's always boolean
          onChange={toggleCompleted}
        />
        <span className={habit.completed ? "line-through" : ""}>
          {habit.name}
        </span>
      </div>
      <button
        className="text-red-600 hover:underline"
        onClick={() => onDelete(habit._id)}
      >
        Delete
      </button>
    </div>
  );
};

export default HabitItem;
