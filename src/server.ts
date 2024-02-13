import express, {Application} from "express";
import morgan from "morgan";
import cors from "cors";

import taskRouter from "./task/network";
import boardRouter from "./board/network";
import handleErrors from "./utils/handleErrors";

// Server Class
class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config(): void {
    // Settings
    this.app.set("port", process.env.PORT || 8000);
    // middlewares
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(cors());
  }

  public routes(): void {
    this.app.use("/api/board", boardRouter);
    this.app.use("/api/task", taskRouter);
    this.app.use(handleErrors);
  }

  public async start(): Promise<void> {
    this.app.listen(this.app.get("port"), () => {
      console.log(
        `[server]: Server is running at http://localhost:${this.app.get("port")}`,
      );
    });
  }
}

export {Server};
