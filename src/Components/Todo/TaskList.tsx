import Task, { MyTask } from "./Task";

//definikan properti yang akan diterima oleh Komponen TaskList
interface TaskListProps {
   tasks: Task[];
   onToggle: (taskId: number) => void;
}
// Komponen TaskList
export const TaskList = ({ tasks, onToggle }: TaskListProps) => {
   return (
      <div>
         <h2>Daftar Tugas</h2>
         {tasks.map((task) => (
            <MyTask key={task.id} task={task} onToggle={onToggle} />
         ))}
      </div>
   );
};
