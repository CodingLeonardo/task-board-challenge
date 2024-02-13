import {Task} from "@prisma/client";
import prisma from "../../prisma/prisma";
import {TaskData} from "../types";

const createTask = async (id_board: string, task: TaskData): Promise<Task> => {
  return new Promise((resolve, reject) => {
    prisma.task
      .create({
        data: {
          ...task,
          board: {
            connect: {
              id: id_board,
            },
          },
        },
      })
      .then(newTask => {
        resolve(newTask);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const getTask = async (id_board: string, id: number): Promise<Task | null> => {
  return new Promise((resolve, reject) => {
    prisma.task
      .findUnique({
        where: {id_board: id_board, id: id},
      })
      .then(task => {
        resolve(task);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const updateTask = async (
  id_board: string,
  id: number,
  task: TaskData,
): Promise<Task> => {
  return new Promise((resolve, reject) => {
    prisma.task
      .update({
        where: {id_board: id_board, id: id},
        data: {...task},
      })
      .then(taskUpdated => {
        resolve(taskUpdated);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const deleteTask = async (id_board: string, id: number): Promise<Task> => {
  return new Promise((resolve, reject) => {
    prisma.task
      .delete({
        where: {id_board: id_board, id: id},
      })
      .then(taskDeleted => {
        resolve(taskDeleted);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
