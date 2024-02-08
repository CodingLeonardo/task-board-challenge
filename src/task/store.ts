import prisma from "../../prisma/prisma";
import {TaskData} from "../types";

const createTask = async (id_board: string, task: TaskData) => {
  try {
    const newTask = await prisma.task.create({
      data: {
        ...task,
        board: {
          connect: {
            id: id_board,
          },
        },
      },
    });
    return newTask;
  } catch (error) {
    return error;
  }
};

const getTask = async (id_board: string, id: number) => {
  try {
    const task = await prisma.task.findUnique({
      where: {id_board: id_board, id: id},
    });
    return task;
  } catch (error) {
    return error;
  }
};

const updateTask = async (id_board: string, id: number, task: TaskData) => {
  try {
    const taskUpdated = await prisma.task.update({
      where: {id_board: id_board, id: id},
      data: {...task},
    });
    return taskUpdated;
  } catch (error) {
    return error;
  }
};

const deleteTask = async (id_board: string, id: number) => {
  try {
    const taskDeleted = await prisma.task.delete({
      where: {id_board: id_board, id: id},
    });
    return taskDeleted;
  } catch (error) {
    return error;
  }
};

export default {
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
