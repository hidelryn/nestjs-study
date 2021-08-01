import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Result {
  statusCode: number;
  results: Record<string, unknown>
}

@Injectable()
export class ResultTransformInterceptor implements NestInterceptor<Result> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Result> {
    return next.handle().pipe(map(data => {
        const res = context.switchToHttp().getResponse();
        res.header('foo', 'bar');
        const result: Result = {
          statusCode: 0,
          results: data
        };
        return result;
    }));
  }
}