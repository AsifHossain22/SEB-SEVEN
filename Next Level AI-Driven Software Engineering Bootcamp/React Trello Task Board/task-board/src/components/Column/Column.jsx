import React, { useState } from "react";
import { Plus } from "lucide-react";
import TaskCard from "../TaskCard/TaskCard";

const Column = ({ title, status, tasks, setTasks, allTasks }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  // HandleAddTask
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      status: status,
    };

    setTasks([...allTasks, newTask]);
    setNewTaskTitle("");
    setIsAdding(false);
  };

  return (
    <div className="bg-gray-200 rounded-lg p-4 w-full md:w-80 shrink-0 flex flex-col gap-3 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-gray-700">{title}</h2>
        <span className="bg-gray-300 text-gray-600 text-xs py-1 px-2 rounded-full">
          {tasks.length}
        </span>
      </div>

      {/* TaskCards */}
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            setTasks={setTasks}
            allTasks={allTasks}
          />
        ))}
      </div>

      {/* AddNewTaskForm */}
      {isAdding ? (
        <form onSubmit={handleAddTask} className="mt-2">
          <input
            type="text"
            autoFocus
            className="w-full p-2 rounded border border-blue-400 focus:outline-none mb-2"
            placeholder="Enter task title..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="text-gray-500 text-sm hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-1 text-gray-500 hover:bg-gray-300 hover:text-gray-800 p-2 rounded mt-2 transition-colors duration-200"
        >
          <Plus size={16} />
          <span className="text-sm font-medium">Add a task</span>
        </button>
      )}
    </div>
  );
};

export default Column;
