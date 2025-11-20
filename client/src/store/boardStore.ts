import {create} from "zustand";
import {Task} from "../types/task";

interface BoardState {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
  setBoard(board: {
    id: string;
    name?: string;
    description?: string;
    tasks: Task[];
  }): void;
  addTask(task: Task): void;
  editTask(taskId: number, task: Task): void;
  removeTask(taskId: number): void;
}

export const useBoardStore = create<BoardState>(set => ({
  id: "",
  name: "",
  description: "",
  tasks: [],
  setBoard: board =>
    set({
      id: board.id,
      name: board.name || "",
      description: board.description || "",
      tasks: board.tasks || [],
    }),
  addTask: task => set(state => ({tasks: [...state.tasks, task]})),
  editTask: (taskId, task) =>
    set(state => ({
      tasks: state.tasks.map(t => (t.id === taskId ? task : t)),
    })),
  removeTask: taskId =>
    set(state => ({
      tasks: state.tasks.filter(t => t.id !== taskId),
    })),
}));
