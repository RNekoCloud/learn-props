import { useState } from "react";
import { TaskList } from "./TaskList";
import Task from "./Task";

export const UseTask = () => {
   const [task, setTask] = useState<Task[]>([
      { id: 1, title: "Belajar Js", completed: false },
   ]);

   const handleTaskToggle = (taskId: number) => {
      setTask((prevTasks) =>
         prevTasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
         )
      );
   };

   return (
      <div>
         <TaskList tasks={task} onToggle={handleTaskToggle} />
      </div>
   );
};
