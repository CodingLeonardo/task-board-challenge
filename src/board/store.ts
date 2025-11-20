import {Board} from "@prisma/client";
import prisma from "../../prisma/prisma";
import {BoardWithTasks, TaskData} from "../types";

const initialTasks: TaskData[] = [
  {
    name: "Task in Progress",
    description: "",
    icon: "clock",
    status: "inprogress",
  },
  {
    name: "Task Completed",
    description: "",
    icon: "exercise",
    status: "completed",
  },
  {
    name: "Task Won't Do",
    description: "",
    icon: "coffee",
    status: "wontdo",
  },
  {
    name: "Task To Do",
    description: "Work on a Challenge on devChallenges.io, learn TypeScript",
    icon: "coffee",
    status: "",
  },
];

const createBoard = async (
  id: string,
  name: string,
  description: string,
): Promise<Board> => {
  return new Promise((resolve, reject) => {
    prisma.board
      .create({
        data: {
          id: id.trim(),
          name: name,
          description: description,
          tasks: {create: initialTasks},
        },
        include: {tasks: true},
      })
      .then(newBoard => {
        resolve(newBoard);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const getAllBoards = async (): Promise<Board[]> => {
  return new Promise((resolve, reject) => {
    prisma.board
      .findMany()
      .then(boards => {
        resolve(boards);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const getBoard = async (id: string): Promise<BoardWithTasks | null> => {
  return new Promise((resolve, reject) => {
    prisma.board
      .findUnique({
        where: {id: id},
        include: {tasks: true},
      })
      .then(board => {
        resolve(board);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const deleteBoard = async (id: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const deleteBoard = prisma.board.delete({where: {id: id}});
    const deleteTasks = prisma.task.deleteMany({where: {id_board: id}});

    prisma
      .$transaction([deleteTasks, deleteBoard])
      .then(() => {
        resolve("Delete successfull id " + id);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const updateBoard = async (
  id: string,
  data: {name?: string; description?: string},
): Promise<BoardWithTasks | null> => {
  return new Promise((resolve, reject) => {
    prisma.board
      .update({
        where: {id},
        data: {name: data.name, description: data.description},
        include: {tasks: true},
      })
      .then(board => resolve(board))
      .catch(err => reject(err));
  });
};

export default {
  createBoard,
  getAllBoards,
  getBoard,
  deleteBoard,
  updateBoard,
};
