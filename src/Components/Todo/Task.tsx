//definisikan tipe data untuk mengatur property yang akan diterima oleh komponen
interface Task {
   id: number;
   title: string;
   completed: boolean;
}

//export interface diatas agar dapat digunakan di lain tempat
export default Task;

//gunakan interface yang dibuat sebelumnya sehingga kita nanti akan memanggilnya sebagai object
interface TaskProps {
   task: Task; //ini adalah interface yang dibuat sebelumn ya
   onToggle: (taskId: number) => void; //Property yang akan digunakan untuk mengatur event
}

export const MyTask = ({ task, onToggle }: TaskProps) => {
   //buat fungsi untuk melacak perubahan pada value input
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
            //tambahkan efek coretan ketika properti completed bernilai true
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
         >
            {/* jadikan isi tulisannya sama seperti di property title */}
            {task.title}
         </span>
      </div>
   );
};
