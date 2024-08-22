import { type HttpResponse } from "@lib/types";
import type { Response } from "express";

class HttpService<T> {
  sendResponse = (
    res: Response,
    { code, data, message }: HttpResponse<T>,
  ) => {
    return res.status(code).json({ code, data, message });
  };
}

export { HttpService };
