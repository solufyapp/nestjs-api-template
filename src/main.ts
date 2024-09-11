import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { AppModule } from "@/app.module.js";
import { AppConfiguration } from "@/common/config/app.configuration.js";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const logger = new Logger("NestApplication", { timestamp: true });
  const { port, host } = app.get(AppConfiguration);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  app.enableCors();

  await app.listen(port, host);
  logger.log(`Listening on ${host}:${port}`);
}
bootstrap();
