import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import {Crypto} from '../utils/crypto'

@Injectable()
export class TokenMiddleWare implements NestMiddleware { // 미들웨어 호출 순서는 글로벌이 1, 그 다음 일반이 2
  use(req: Request, res: Response, next: NextFunction) {
    res.setHeader("X-ACCESS-TOKEN", Crypto.randomBytes(6));
    return next();
  }
}
