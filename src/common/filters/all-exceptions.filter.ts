import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import { FastifyReply, FastifyRequest } from "fastify";

interface ExceptionResponse {
  message: string[];
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  private readonly defaultStatus = HttpStatus.INTERNAL_SERVER_ERROR;
  private readonly defaultError = "Internal Server Error";

  catch(exception: any, host: ArgumentsHost) {
    const response = this.getResponse(host);
    const respond = this.makeRespond(response);

    if (exception instanceof HttpException) {
      const exceptionResponse = exception.getResponse() as ExceptionResponse;
      return respond({
        status: exception.getStatus(),
        error: exceptionResponse.message,
      });
    }

    if ("statusCode" in exception && typeof exception.statusCode === "number") {
      return respond({
        status: exception.statusCode,
        error: exception.message,
      });
    }

    this.logger.error(exception);
    console.error(exception, this.getBody(host));

    respond();
  }

  private getResponse(host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    return ctx.getResponse<FastifyReply>();
  }

  private getBody(host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    return ctx.getRequest<FastifyRequest>().body;
  }

  private makeRespond(response: FastifyReply) {
    return (data?: {
      status?: number;
      error?: string | string[];
    }) => {
      const status = data?.status || this.defaultStatus;
      const error = data?.error || this.defaultError;
      return response.status(status).send({ success: false, error });
    };
  }
}
