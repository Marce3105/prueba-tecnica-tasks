import axios from "axios";
import { Task } from "./types";

const API_URL = "http://localhost:4000/tasks";

export const getTasks = () => axios.get<Task[]>(API_URL);
export const createTask = (data: Omit<Task, "id" | "createdAt" | "updatedAt">) =>
  axios.post(API_URL, data);
export const updateTask = (id: string, data: Partial<Omit<Task, "id" | "createdAt" | "updatedAt">>) =>
  axios.patch(`${API_URL}/${id}`, data);
export const deleteTask = (id: string) => axios.delete(`${API_URL}/${id}`);
