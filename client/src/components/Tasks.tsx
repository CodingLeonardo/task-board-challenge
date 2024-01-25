import TaskCard from "./TaskCard"
import { TaskCardIcon, TaskCardStatus } from "./types.d"

const { inprogress, completed, wontdo } = TaskCardStatus
const { clock, exercise, coffee } = TaskCardIcon

const Tasks = () => {
  return (
    <>
      <TaskCard name="Task in progress" icon={clock} status={inprogress} />
      <TaskCard name="Task completed" icon={exercise} status={completed} />
      <TaskCard name="Task Won't Do" icon={coffee} status={wontdo} />
      <TaskCard name="Task To Do" description="Work on a Challenge on devChallenges.io, learn TypeScript" icon={TaskCardIcon.books} />
    </>
  )
}

export default Tasks