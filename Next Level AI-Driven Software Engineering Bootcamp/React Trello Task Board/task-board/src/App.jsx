import React, { useState } from "react";
import { LayoutDashboard } from "lucide-react";
import Board from "./components/Board/Board";

function App() {
  // AllTasksState
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React Vite", status: "todo" },
    { id: 2, title: "Integrate Tailwind", status: "inProgress" },
    { id: 3, title: "Create Folder Structure", status: "done" },
  ]);
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* HeaderSection */}
        <header className="bg-blue-600 text-white p-4 shadow-md flex items-center gap-2">
          {/* Icon */}
          <LayoutDashboard size={24} />
          <h1 className="text-xl font-bold">Task Board</h1>
        </header>

        {/* MainBoardArea */}
        <main className="flex-1 p-4 sm:p-6 overflow-x-auto">
          <Board tasks={tasks} setTasks={setTasks} />
        </main>

        {/* Footer */}
        <footer></footer>
      </div>
    </>
  );
}

export default App;
