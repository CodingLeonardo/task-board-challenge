import Tasks from "./Tasks";
import TaskEdit from "./TaskEdit";
import Layout from "./Layout";
import TaskButton from "./TaskButton";
import {Task, TaskIcon, TaskStatus} from "../types.d";
// import {useModal} from "../store";

const tasks: Task[] = [
  {
    name: "Task in Progress",
    icon: TaskIcon["clock"],
    status: TaskStatus["inprogress"],
  },
  {
    name: "Task Completed",
    icon: TaskIcon["exercise"],
    status: TaskStatus["completed"],
  },
  {
    name: "Task Won't Do",
    icon: TaskIcon["coffee"],
    status: TaskStatus["wontdo"],
  },
  {
    name: "Task To Do",
    icon: TaskIcon["books"],
    description: "Work on a Challenge on devChallenge.io, learn TypeScript.",
  },
];

const Board = () => {
  // const isOpened = useModal(state => state.isOpened);
  return (
    <>
      <Layout>
        <Tasks tasks={tasks} />
        <TaskButton />
        {/* {isOpened && <TaskEdit />} */}
        <TaskEdit />
      </Layout>
    </>
  );
};

export default Board;
