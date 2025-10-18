import { useEffect, useState } from "react";
import { Task } from "./types";
import { getTasks, deleteTask } from "./api";
import { TaskForm } from "./TaskForm";

interface TaskListProps {
  refresh: boolean;
}

export const TaskList = ({ refresh }: TaskListProps) => {
  // Estado para almacenar las tareas
  const [tasks, setTasks] = useState<Task[]>([]);
  // Estado para almacenar la tarea que se está editando
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // Función para obtener tareas desde el backend
  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.error(error);
      alert("Error al cargar tareas"); // Manejo de errores HTTP
    }
  };

  // useEffect para cargar tareas al montar el componente o cuando cambia "refresh"
  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  // Función para eliminar una tarea por id
  const handleDelete = async (id: string) => {
    if (!window.confirm("¿Seguro que deseas eliminar esta tarea?")) return;
    try {
      await deleteTask(id);
      fetchTasks();  // Recarga la lista después de eliminar
    } catch (error) {
      console.error(error);
      alert("Error al eliminar tarea");  // Manejo de errores HTTP
    }
  };

  return (
    <div className="task-list">
      {/* Mostrar formulario de edición si hay una tarea seleccionada */}
      {editingTask && (
        <TaskForm
          taskToEdit={editingTask}
          onTaskCreated={fetchTasks}
          onCloseEdit={() => setEditingTask(null)}
        />
      )}
      {/* Listado de tareas */}
      {tasks.map(task => (
        <div className="task-item" key={task.id}>
          <div>
            {/* Información de la tarea */}
            <p><strong>{task.title}</strong></p>
            <p>{task.description}</p>
            <small>Status: {task.status} | Prioridad: {task.priority} | Vence: {task.dueDate?.split("T")[0]}</small>
          </div>
          <div>
            {/* Botones para editar y eliminar */}
            <button onClick={() => setEditingTask(task)}>Editar</button>
            <button onClick={() => handleDelete(task.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
};
