import React from "react";
import { Trash2, ArrowRight } from "lucide-react";

const TaskCard = ({ task, setTasks, allTasks }) => {
  // handleDelete
  const handleDelete = () => {
    const updatedTasks = allTasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
  };

  // HandleMove
  const handleMove = () => {
    let nextStatus = "";
    if (task.status === "todo") nextStatus = "inProgress";
    else if (task.status === "inProgress") nextStatus = "done";
    else return; // If 'done', don't move / 'done' হলে আর সরাব না

    const updatedTasks = allTasks.map((t) =>
      t.id === task.id ? { ...t, status: nextStatus } : t,
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-white p-3 rounded shadow-sm border border-gray-200 group hover:ring-2 hover:ring-blue-400 transition-all duration-200">
      <p className="text-sm text-gray-800 mb-3">{task.title}</p>

      <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={handleDelete}
          className="text-red-400 hover:text-red-600 p-1 rounded hover:bg-red-50 transition-colors"
          title="Delete Task"
        >
          <Trash2 size={16} />
        </button>

        {task.status !== "done" && (
          <button
            onClick={handleMove}
            className="text-blue-500 hover:text-blue-700 p-1 rounded hover:bg-blue-50 transition-colors"
            title="Move to Next"
          >
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
