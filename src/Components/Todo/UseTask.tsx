import React, { useState } from "react";
import TaskList from "./TaskList";

interface Task {
   id: number;
   title: string;
   completed: boolean;
}

export const UseTask: React.FC = () => {
   const [tasks, setTasks] = useState<Task[]>([
      { id: 1, title: "Belajar React", completed: false },
      { id: 2, title: "Makan siang", completed: true },
      { id: 3, title: "Bermain game", completed: false },
   ]);

   const handleTaskToggle = (taskId: number) => {
      setTasks((prevTasks) =>
         prevTasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
         )
      );
   };

   return (
      <div>
         <TaskList tasks={tasks} onToggle={handleTaskToggle} />
      </div>
   );
};
