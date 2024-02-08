import {Request, Response} from "express";
import store from "./store";

class BoardController {
  async createBoard(req: Request, res: Response): Promise<void> {
    const {id} = req.body;
    try {
      const newBoard = await store.createBoard(id);
      res.json(newBoard);
    } catch (error) {
      res.json(error);
    }
  }

  async getAllBoards(req: Request, res: Response): Promise<void> {
    try {
      const boards = await store.getAllBoards();
      res.json(boards);
    } catch (error) {
      res.json(error);
    }
  }

  async getBoard(req: Request, res: Response): Promise<void> {
    const {id} = req.params;
    try {
      const board = await store.getBoard(id);
      res.json(board);
    } catch (error) {
      res.json(error);
    }
  }

  async deleteBoard(req: Request, res: Response): Promise<void> {
    const {id} = req.params;
    try {
      const boardDeleted = await store.deleteBoard(id);
      res.json(boardDeleted);
    } catch (error) {
      res.json(error);
    }
  }
}

export default BoardController;
