import {Router} from "express";
import BoardController from "./controller";

class BoardRouter {
  router: Router;
  controller: BoardController;

  constructor() {
    this.router = Router();
    this.controller = new BoardController();
    this.routes();
  }

  routes() {
    this.router.post("/", this.controller.createBoard);
    this.router.get("/", this.controller.getAllBoards);
    this.router.get("/:id", this.controller.getBoard);
    this.router.delete("/:id", this.controller.deleteBoard);
  }
}

const boardRouter = new BoardRouter().router;

export default boardRouter;
