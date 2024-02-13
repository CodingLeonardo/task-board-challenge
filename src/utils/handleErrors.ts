import {Request, Response, NextFunction} from "express";
import response from "./response";

const handleErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err);
  response.error(req, res, err, 500);
};

export default handleErrors;
