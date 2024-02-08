import {Request, Response} from "express";
import store from "./store";
import {TaskData} from "../types";

class TaskController {
  async createTask(req: Request, res: Response): Promise<void> {
    const task: TaskData = req.body;
    const {id_board} = req.params;
    try {
      const newTask = await store.createTask(id_board, task);
      res.json(newTask);
    } catch (error) {
      res.json(error);
    }
  }

  async getTask(req: Request, res: Response): Promise<void> {
    const id_board = req.params.id_board;
    const id = Number(req.params.id);

    console.log(id_board, id);

    try {
      const task = await store.getTask(id_board, id);
      res.json(task);
    } catch (error) {
      res.json(error);
    }
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    const id_board = req.params.id_board;
    const id = Number(req.params.id);
    const task: TaskData = req.body;
    try {
      const taskUpdated = await store.updateTask(id_board, id, task);
      res.json(taskUpdated);
    } catch (error) {
      res.json(error);
    }
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    const id_board = req.params.id_board;
    const id = Number(req.params.id);
    try {
      const taskDeleted = await store.deleteTask(id_board, id);
      res.json(taskDeleted);
    } catch (error) {
      res.json(error);
    }
  }
}

export default TaskController;
