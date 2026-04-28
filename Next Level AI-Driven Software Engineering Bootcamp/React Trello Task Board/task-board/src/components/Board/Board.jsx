import React from "react";
import Column from "../Column/Column";

const Board = ({ tasks, setTasks }) => {
  // InitializeColumns
  const columns = [
    { id: "todo", title: "To Do" },
    { id: "inProgress", title: "In Progress" },
    { id: "done", title: "Done" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full items-start">
      {columns.map((col) => {
        const columnTasks = tasks.filter((task) => task.status === col.id);

        return (
          <Column
            key={col.id}
            title={col.title}
            status={col.id}
            tasks={columnTasks}
            setTasks={setTasks}
            allTasks={tasks}
          />
        );
      })}
    </div>
  );
};

export default Board;
