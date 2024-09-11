import { Module } from "@nestjs/common";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";

import * as Clients from "@/clients/index.js";
import * as Modules from "@/modules/index.js";

@Module({
  imports: [...Object.values(Clients), ...Object.values(Modules)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
