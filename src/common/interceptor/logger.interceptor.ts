import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface HTTPInfo {
  ip: string;
  method: string;
  path: string;
  body?: Record<string, unknown>;
  query?: Record<string, unknown>;
  statusCode?: number;
  delay?: string;
}

@Injectable()
export class LoggerInterCeptor implements NestInterceptor{
  private logger = new Logger("HTTP");
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = new Date().getTime();
    const { ip, method, path, body, query } = context.switchToHttp().getRequest();
    const { statusCode } = context.switchToHttp().getResponse();
    const requestHTTPInfo: HTTPInfo = {
      ip,
      method,
      path,
      body,
      query
    };
    this.logger.log(`Request: ${JSON.stringify(requestHTTPInfo)}`);
    return next.handle().pipe(tap(() => {
      const responseHTTPInfo: HTTPInfo = {
        ip,
        method,
        path,
        statusCode,
        delay: `${new Date().getTime() - start}ms`
      };
      return this.logger.log(`Response: ${JSON.stringify(responseHTTPInfo)}`);
    }));
  }
}