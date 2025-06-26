import { useState } from "react";

const HabitForm = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit({ name, completed: false });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        className="border px-2 py-1 rounded flex-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a new habit"
      />
      <button
        className="bg-blue-600 text-white px-3 py-1 rounded"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default HabitForm;
