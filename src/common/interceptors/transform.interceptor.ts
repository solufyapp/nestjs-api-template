import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable, map } from "rxjs";

import { IGNORE_RESPONSE_TRANSFORM_KEY } from "../decorators/ignore-response-transform.decorator.js";

export interface CommonResponse<T> {
  success: true;
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, CommonResponse<T>>
{
  constructor(private readonly reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<CommonResponse<T>> {
    const ignore = this.reflector.getAllAndOverride(
      IGNORE_RESPONSE_TRANSFORM_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (ignore) {
      return next.handle();
    }

    return next.handle().pipe(map((data) => ({ success: true, data })));
  }
}
