import {Outlet} from "react-router-dom";
import Tasks from "./Tasks";
import TaskButton from "./TaskButton";
import {Task, TaskIcon, TaskStatus} from "../types.d";
// import {useModal} from "../store";

const tasks: Task[] = [
  {
    id: 0,
    name: "Task in Progress",
    icon: TaskIcon["clock"],
    status: TaskStatus["inprogress"],
  },
  {
    id: 1,
    name: "Task Completed",
    icon: TaskIcon["exercise"],
    status: TaskStatus["completed"],
  },
  {
    id: 2,
    name: "Task Won't Do",
    icon: TaskIcon["coffee"],
    status: TaskStatus["wontdo"],
  },
  {
    id: 3,
    name: "Task To Do",
    icon: TaskIcon["books"],
    description: "Work on a Challenge on devChallenge.io, learn TypeScript.",
  },
];

const Board = () => {
  // const isOpened = useModal(state => state.isOpened);
  return (
    <>
      <Tasks tasks={tasks} />
      <TaskButton />
      <Outlet />
    </>
  );
};

export default Board;
