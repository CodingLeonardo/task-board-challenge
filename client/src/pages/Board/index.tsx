import {Outlet, useParams} from "react-router-dom";
import Tasks from "../../components/Tasks";
import TaskButton from "../../components/TaskButton";
import {useEffect, useRef} from "react";
import {getBoard} from "../../services/board";
import {useBoardStore} from "../../store/boardStore";

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
  const {boardId} = useParams();
  const {id, setBoard} = useBoardStore();

  const tasks = useBoardStore(state => state.tasks);

  const tasksRef = useRef(tasks);

  useEffect(() => {
    if (!boardId) return;
    getBoard(boardId).then(({body: {board}}) => {
      setBoard(board);
    });
  }, [tasksRef, boardId, setBoard]);

  return (
    <>
      <Tasks tasks={tasks} />
      <TaskButton boardId={id} />
      <Outlet />
    </>
  );
};

export default Board;
