import {create} from "zustand";
import {Task} from "../types/task";

interface BoardState {
  id: string;
  tasks: Task[];
  setBoard({id, tasks}: {id: string; tasks: Task[]}): void;
  addTask(task: Task): void;
  editTask(taskId: number, task: Task): void;
  removeTask(taskId: number): void;
}

export const useBoardStore = create<BoardState>(set => ({
  id: "",
  tasks: [],
  setBoard: ({id, tasks}) => set({id, tasks}),
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
