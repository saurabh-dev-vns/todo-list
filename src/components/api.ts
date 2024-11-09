// src/components/api.ts
import axios from "axios";
import { Task } from "./types";

// Get base URL from environment variables (use different URLs for development and production)
const baseURL = process.env.NEXT_PUBLIC_NODE_ENV === 'production' 
  ? process.env.NEXT_PUBLIC_PROD_TODO_LIST_API
  : process.env.NEXT_PUBLIC_DEV_TODO_LIST_API;

// Create an axios instance with the dynamic base URL
const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchTasksAPI = async (): Promise<Task[]> => {
  try {
    const response = await api.get("/get");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; // Re-throw the error to handle it in your components
  }
};

export const updateTaskAPI = async (id: string, task: Omit<Task, "done">) => {
  await api.patch(`/update/${id}`, task);
};

export const deleteTaskAPI = async (id: string) => {
  await api.delete(`/remove/${id}`);
};

export const createTaskAPI = async (
  formData: Omit<Task, "done" | "_id">
): Promise<void> => {
  await api.post("/create", formData);
};
