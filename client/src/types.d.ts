// export enum TaskIcon {
//   person = "👨‍💻",
//   message = "💬",
//   coffee = "☕",
//   exercise = "🏋️‍♀️",
//   books = "📚",
//   clock = "⏰",
// }
// export enum TaskIcon {
//   PERSON = "person",
//   MESSAGE = "message",
//   COFFEE = "coffee",
//   EXERCISE = "exercise",
//   BOOKS = "books",
//   CLOCK = "clock",
// }
// export enum TaskStatus {
//   INPROGRESS = "inprogress",
//   COMPLETED = "completed",
//   WONTDO = "wontdo",
// }
export enum TaskIcon {
  person = "person",
  message = "message",
  coffee = "coffee",
  exercise = "exercise",
  books = "books",
  clock = "clock",
}

export enum TaskStatus {
  inprogress = "inprogress",
  completed = "completed",
  wontdo = "wontdo",
}

export interface Task {
  id: number;
  name: string;
  description?: string;
  icon: TaskIcon;
  status?: TaskStatus;
}
