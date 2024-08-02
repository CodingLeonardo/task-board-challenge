import {Outlet, useLoaderData} from "react-router-dom";
import Tasks from "../../components/Tasks";
import TaskButton from "../../components/TaskButton";
// import {Task, TaskIcon, TaskStatus} from "../../types/task";
import {Board as BoardInterface} from "../../types/task";
// import {useModal} from "../store";

// const tasks: Task[] = [
//   {
//     id: 0,
//     name: "Task in Progress",
//     icon: TaskIcon["clock"],
//     status: TaskStatus["inprogress"],
//   },
//   {
//     id: 1,
//     name: "Task Completed",
//     icon: TaskIcon["exercise"],
//     status: TaskStatus["completed"],
//   },
//   {
//     id: 2,
//     name: "Task Won't Do",
//     icon: TaskIcon["coffee"],
//     status: TaskStatus["wontdo"],
//   },
//   {
//     id: 3,
//     name: "Task To Do",
//     icon: TaskIcon["books"],
//     description: "Work on a Challenge on devChallenge.io, learn TypeScript.",
//   },
// ];

const Board = () => {
  const {board} = useLoaderData() as {board: BoardInterface};

  const {tasks} = board;

  return (
    <>
      <Tasks tasks={tasks} />
      <TaskButton boardId={board.id} />
      <Outlet />
    </>
  );
};

export default Board;
