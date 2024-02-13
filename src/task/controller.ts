import {NextFunction, Request, Response} from "express";
import store from "./store";
import response from "../utils/response";
import {TaskData} from "../types";

class TaskController {
  async createTask(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const task: TaskData = req.body;
    const {id_board} = req.params;

    store
      .createTask(id_board, task)
      .then(newTask => {
        response.success(req, res, {task: newTask}, 200);
      })
      .catch(err => {
        next(err);
      });
  }

  async getTask(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const id_board = req.params.id_board;
    const id = Number(req.params.id);

    store
      .getTask(id_board, id)
      .then(task => {
        response.success(req, res, {task}, 200);
      })
      .catch(err => {
        next(err);
      });
  }

  async updateTask(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const id_board = req.params.id_board;
    const id = Number(req.params.id);
    const task: TaskData = req.body;

    store
      .updateTask(id_board, id, task)
      .then(taskUpdated => {
        response.success(req, res, {task: taskUpdated}, 200);
      })
      .catch(err => {
        next(err);
      });
  }

  async deleteTask(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const id_board = req.params.id_board;
    const id = Number(req.params.id);

    store
      .deleteTask(id_board, id)
      .then(taskDeleted => {
        response.success(req, res, {task: taskDeleted}, 200);
      })
      .catch(err => {
        next(err);
      });
  }
}

export default TaskController;
