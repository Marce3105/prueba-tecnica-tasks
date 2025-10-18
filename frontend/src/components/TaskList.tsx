import { useEffect, useState } from "react";
import { Task } from "./types";
import { getTasks, deleteTask } from "./api";
import { TaskForm } from "./TaskForm";

interface TaskListProps {
  refresh: boolean;
}

export const TaskList = ({ refresh }: TaskListProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.error(error);
      alert("Error al cargar tareas");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  const handleDelete = async (id: string) => {
    if (!window.confirm("¿Seguro que deseas eliminar esta tarea?")) return;
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error(error);
      alert("Error al eliminar tarea");
    }
  };

  return (
    <div className="task-list">
      {editingTask && (
        <TaskForm
          taskToEdit={editingTask}
          onTaskCreated={fetchTasks}
          onCloseEdit={() => setEditingTask(null)}
        />
      )}
      {tasks.map(task => (
        <div className="task-item" key={task.id}>
          <div>
            <p><strong>{task.title}</strong></p>
            <p>{task.description}</p>
            <small>Status: {task.status} | Prioridad: {task.priority} | Vence: {task.dueDate?.split("T")[0]}</small>
          </div>
          <div>
            <button onClick={() => setEditingTask(task)}>Editar</button>
            <button onClick={() => handleDelete(task.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
};
