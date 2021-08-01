import { Request, Response, NextFunction } from 'express';

export function TimeStampMiddleWare(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const ts = new Date().getTime();
  res.setHeader('X-SERVER-TIMESTAMP', ts);
  return next();
}