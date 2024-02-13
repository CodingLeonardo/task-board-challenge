import {Response, Request} from "express";

const success = (req: Request, res: Response, msg: object, status: number) => {
  res.status(status).send({
    error: null,
    body: msg,
  });
};

const error = (req: Request, res: Response, msg: Error, status: number) => {
  res.status(status).send({
    error: msg,
    body: null,
  });
};

export default {
  success,
  error,
};
