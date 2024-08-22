import { logger } from "@lib/utils";

export class BaseService {
  protected logError(error: Error, methodName: string) {
    logger.error(
      `[${this.constructor.name}][${methodName}] ${error.message}`,
      {
        className: this.constructor.name,
        methodName,
        error,
      },
    );
  }
}
