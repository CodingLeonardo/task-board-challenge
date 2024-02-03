import {create} from "zustand";
import {Task} from "./types.d";

interface TasksState {
  tasks: Array<Task>;
  addTask: (task: Task) => void;
}

interface ModalState {
  isOpened: boolean;
  open: () => void;
  close: () => void;
}

export const useTasks = create<TasksState>(set => ({
  tasks: [],
  addTask: task =>
    set(state => ({
      tasks: [...state.tasks, task],
    })),
}));

export const useModal = create<ModalState>(set => ({
  isOpened: false,
  open: () =>
    set(() => ({
      isOpened: true,
    })),
  close: () =>
    set(() => ({
      isOpened: false,
    })),
}));
