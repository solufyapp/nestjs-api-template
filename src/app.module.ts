import { Module } from "@nestjs/common";

import * as Clients from "@/clients/index.js";
import * as Modules from "@/modules/index.js";

@Module({
  imports: [...Object.values(Clients), ...Object.values(Modules)],
})
export class AppModule {}
