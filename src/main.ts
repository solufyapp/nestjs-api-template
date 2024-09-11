import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory, Reflector } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { AppModule } from "@/app.module.js";
import { AppConfiguration } from "@/common/config/app.configuration.js";
import { AllExceptionsFilter } from "@/common/filters/all-exceptions.filter.js";
import { TransformInterceptor } from "@/common/interceptors/transform.interceptor.js";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const logger = new Logger("NestApplication", { timestamp: true });
  const { port, host } = app.get(AppConfiguration);
  const reflector = app.get(Reflector);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  app.useGlobalInterceptors(new TransformInterceptor(reflector));
  app.useGlobalFilters(new AllExceptionsFilter());
  app.enableCors();

  await app.listen(port, host);
  logger.log(`Listening on ${host}:${port}`);
}
bootstrap();
