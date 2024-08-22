import { type HttpResponse } from "@lib/types";
import type { Response } from "express";

const httpService = <T>(
  res: Response,
  { code, data, message }: HttpResponse<T>,
) => {
  return res.status(code).json({ code, data, message });
};

export { httpService };
