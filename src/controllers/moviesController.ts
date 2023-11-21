import { Request, Response, NextFunction } from "express";

export function getHello(req: Request, res: Response, next: NextFunction) {
  res.send("Hello World!");
}
