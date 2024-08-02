export interface Board {
  id: string;
  tasks: Task[];
}

export interface Task {
  id?: number;
  id_board?: string;
  name: string;
  description?: string;
  icon: TaskIcon;
  status?: TaskStatus;
}

export enum TaskIcon {
  Person = "person",
  Message = "message",
  Coffee = "coffee",
  Exercise = "exercise",
  Books = "books",
  Clock = "clock",
}

export enum TaskStatus {
  inprogress = "inprogress",
  completed = "completed",
  wontdo = "wontdo",
}
