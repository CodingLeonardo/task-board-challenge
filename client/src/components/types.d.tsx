export enum TaskCardIcon {
  person = "👨‍💻",
  message = "💬",
  coffee = "☕",
  exercise = "🏋️‍♀️",
  books = "📚",
  clock = "⏰"
}

export enum TaskCardStatus {
  inprogress = "inprogress",
  completed = "completed",
  wontdo = "wontdo"
}

export type TaskCardProps = {
  name: string,
  description?: string,
  icon: TaskCardIcon,
  status?: TaskCardStatus,
}