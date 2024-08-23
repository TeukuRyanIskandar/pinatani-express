import { CreateUserDto } from "@lib/types";
import { z } from "zod";

export const createUserSchema: z.ZodSchema<CreateUserDto> =
  z.object({
    username: z
      .string()
      .min(1, { message: "Username is required" })
      .min(3, {
        message:
          "Username must be at least 3 characters long",
      }),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({
        message: "Please provide a valid email address",
      }),

    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(6, {
        message:
          "Password must be at least 6 characters long",
      }),
  });
