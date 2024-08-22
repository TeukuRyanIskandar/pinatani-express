import type { Response } from "express";

const httpService = <T>(
  res: Response,
  {
    code,
    data,
    message,
  }: {
    code: number;
    data: T;
    message: string;
  },
) => {
  return res.status(code).json({ code, data, message });
};

export { httpService };
