import React from "react";
import Task from "./Task";

// Definisikan tipe data props untuk komponen TaskList
interface TaskListProps {
   tasks: Task[]; // prop tasks akan berisi array dari objek Task
   onToggle: (taskId: number) => void; // prop onToggle akan menerima fungsi untuk menandai tugas sebagai selesai
}

// Komponen TaskList
const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle }) => {
   return (
      <div>
         <h2>Daftar Tugas</h2>
         {tasks.map((task) => (
            <Task key={task.id} task={task} onToggle={onToggle} />
         ))}
      </div>
   );
};

export default TaskList;
