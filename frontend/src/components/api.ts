import axios from "axios";
import { Task } from "./types";

const API_URL = "http://localhost:4000/tasks";

// Función para obtener todas las tareas desde el backend
export const getTasks = () => axios.get<Task[]>(API_URL);

// Función para crear una nueva tarea
export const createTask = (data: Omit<Task, "id" | "createdAt" | "updatedAt">) =>
  axios.post(API_URL, data);

// Función para actualizar una tarea
export const updateTask = (id: string, data: Partial<Omit<Task, "id" | "createdAt" | "updatedAt">>) =>
  axios.patch(`${API_URL}/${id}`, data);

// Función para eliminar una tarea
export const deleteTask = (id: string) => axios.delete(`${API_URL}/${id}`);
