import { useState, useEffect } from "react";
import { Task } from "./types";
import { createTask, updateTask } from "./api";

interface TaskFormProps {
  onTaskCreated: () => void;
  taskToEdit?: Task;
  onCloseEdit?: () => void;
}

export const TaskForm = ({ onTaskCreated, taskToEdit, onCloseEdit }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<'todo' | 'in_progress' | 'done'>("todo");
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>("medium");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description || "");
      setStatus(taskToEdit.status);
      setPriority(taskToEdit.priority);
      setDueDate(taskToEdit.dueDate?.split("T")[0] || "");
    }
  }, [taskToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const taskData = { title, description, status, priority, dueDate: dueDate || null };

    try {
      if (taskToEdit) {
        await updateTask(taskToEdit.id, taskData);
        onCloseEdit && onCloseEdit();
      } else {
        await createTask(taskData);
      }
      setTitle(""); setDescription(""); setStatus("todo"); setPriority("medium"); setDueDate("");
      onTaskCreated();
    } catch (error) {
      console.error(error);
      alert("Error al guardar la tarea");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <select value={status} onChange={e => setStatus(e.target.value as any)}>
        <option value="todo">Todo</option>
        <option value="in_progress">En progreso</option>
        <option value="done">Hecho</option>
      </select>
      <select value={priority} onChange={e => setPriority(e.target.value as any)}>
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
      </select>
      <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      <button type="submit">{taskToEdit ? "Actualizar" : "Agregar"}</button>
      {taskToEdit && <button type="button" onClick={onCloseEdit}>Cancelar</button>}
    </form>
  );
};
