import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ExtendedPrismaClient = class {
  constructor() {
    // biome-ignore lint/correctness/noConstructorReturn: Workaround for https://github.com/prisma/prisma/issues/18628
    return prisma;
  }
} as new () => typeof prisma;

@Injectable()
export class PrismaService
  extends ExtendedPrismaClient
  implements OnModuleInit
{
  protected readonly logger = new Logger(PrismaService.name, {
    timestamp: true,
  });

  async onModuleInit() {
    await Prisma.getExtensionContext(prisma).$connect();
    this.logger.log("Connected to database");
  }
}
