import {Task} from "../types/task";

const API_URL = import.meta.env.VITE_APP_API_URL || "http://localhost:8000";

export const getTask = async ({
  boardId,
  taskId,
}: {
  boardId: string;
  taskId: number;
}) => {
  console.log({
    boardId,
    taskId,
  });
  const response = await fetch(`${API_URL}/api/task/${boardId}/${taskId}`);
  return response.json();
};

export const createTask = async ({
  boardId,
  task,
}: {
  boardId: string;
  task: Task;
}) => {
  const response = await fetch(`${API_URL}/api/task/${boardId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const updateTask = async ({
  boardId,
  taskId,
  task,
}: {
  boardId: string;
  taskId: number;
  task: Task;
}) => {
  const response = await fetch(`${API_URL}/api/task/${boardId}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const deleteTask = async ({
  boardId,
  taskId,
}: {
  boardId: string;
  taskId: number;
}) => {
  const response = await fetch(`${API_URL}/api/task/${boardId}/${taskId}`, {
    method: "DELETE",
  });
  return response.json();
};
