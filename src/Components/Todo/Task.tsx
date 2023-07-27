import React from "react";

// Definisikan tipe data untuk tugas
interface Task {
   id: number;
   title: string;
   completed: boolean;
}

// Definisikan tipe data props untuk komponen Task
interface TaskProps {
   task: Task; // prop task akan berisi data tugas
   onToggle: (taskId: number) => void; // prop onToggle akan menerima fungsi untuk menandai tugas sebagai selesai
}

// Komponen Task
const Task: React.FC<TaskProps> = ({ task, onToggle }) => {
   const handleToggle = () => {
      onToggle(task.id);
   };

   return (
      <div>
         <input
            type='checkbox'
            checked={task.completed}
            onChange={handleToggle}
         />
         <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
         >
            {task.title}
         </span>
      </div>
   );
};

export default Task;
