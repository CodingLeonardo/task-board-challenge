import {Router} from "express";
import TaskController from "./controller";

class TaskRouter {
  router: Router;
  controller: TaskController;

  constructor() {
    this.router = Router();
    this.controller = new TaskController();
    this.routes();
  }

  routes() {
    this.router.post("/:id_board", this.controller.createTask);
    this.router.get("/:id_board/:id", this.controller.getTask);
    this.router.put("/:id_board/:id", this.controller.updateTask);
    this.router.delete("/:id_board/:id", this.controller.deleteTask);
  }
}

const taskRouter = new TaskRouter().router;

export default taskRouter;
