import prisma from "../../prisma/prisma";
import {TaskData} from "../types";

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

const createBoard = async (id: string) => {
  try {
    const newBoard = await prisma.board.create({
      data: {id: id.trim(), tasks: {create: initialTasks}},
      include: {tasks: true},
    });
    return newBoard;
  } catch (error) {
    return error;
  }
};

const getAllBoards = async () => {
  try {
    const boards = await prisma.board.findMany();
    return boards;
  } catch (error) {
    return error;
  }
};

const getBoard = async (id: string) => {
  try {
    const board = await prisma.board.findUnique({
      where: {id: id},
      include: {tasks: true},
    });
    return board;
  } catch (error) {
    return error;
  }
};

const deleteBoard = async (id: string) => {
  try {
    const boardDeleted = await prisma.board.delete({where: {id: id}});
    return boardDeleted;
  } catch (error) {
    return error;
  }
};

export default {
  createBoard,
  getAllBoards,
  getBoard,
  deleteBoard,
};
