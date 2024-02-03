export enum TaskIcon {
  person = "👨‍💻",
  message = "💬",
  coffee = "☕",
  exercise = "🏋️‍♀️",
  books = "📚",
  clock = "⏰",
}

export enum TaskStatus {
  inprogress = "inprogress",
  completed = "completed",
  wontdo = "wontdo",
}

export type Task = {
  name: string;
  description?: string;
  icon: TaskIcon;
  status?: TaskStatus;
};
