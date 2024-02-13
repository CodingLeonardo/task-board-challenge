import {NextFunction, Request, Response} from "express";
import store from "./store";
import response from "../utils/response";

class BoardController {
  async createBoard(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const {id} = req.body;

    store
      .createBoard(id)
      .then(newBoard => {
        response.success(req, res, {board: newBoard}, 200);
      })
      .catch(err => {
        next(err);
      });
  }

  async getAllBoards(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    store
      .getAllBoards()
      .then(boards => {
        response.success(req, res, {boards}, 200);
      })
      .catch(err => {
        next(err);
      });
  }

  async getBoard(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const {id} = req.params;
    store
      .getBoard(id)
      .then(board => {
        response.success(req, res, {board}, 200);
      })
      .catch(err => {
        next(err);
      });
  }

  async deleteBoard(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const {id} = req.params;

    store
      .deleteBoard(id)
      .then(boardDeleted => {
        response.success(req, res, {board: boardDeleted}, 200);
      })
      .catch(err => {
        next(err);
      });
  }
}

export default BoardController;
