import { Configuration, Value } from "@itgorillaz/configify";
import { IsNumber, IsString } from "class-validator";

@Configuration()
export class AppConfiguration {
  @IsNumber()
  @Value("APP_PORT", { parse: (value) => Number(value || 5000) })
  readonly port: number;

  @IsString()
  @Value("APP_HOST", { parse: (value) => value || "localhost" })
  readonly host: string;
}
