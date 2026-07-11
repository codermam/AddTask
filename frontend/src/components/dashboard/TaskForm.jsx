import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAdd(title);

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6"
    >
      <input
        type="text"
        placeholder="Enter task"
        className="input input-bordered flex-1"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <button
        className="btn btn-primary"
      >
        Add
      </button>
      
    </form>
  );
};

export default TaskForm;