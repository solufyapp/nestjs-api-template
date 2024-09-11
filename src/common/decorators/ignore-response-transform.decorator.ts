import { CustomDecorator, SetMetadata } from "@nestjs/common";

export const IGNORE_RESPONSE_TRANSFORM_KEY = "ignoreResponseTransform";

export const IgnoreResponseTransform = (): CustomDecorator =>
  SetMetadata(IGNORE_RESPONSE_TRANSFORM_KEY, true);
