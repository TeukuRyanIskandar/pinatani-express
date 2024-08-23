import {
  CreateUserDto,
  CreateUserResData,
} from "@lib/types";
import { httpService } from "@lib/utils";
import { createUserSchema } from "@models/schema";
import { userRepository } from "@repositories/user.repository";
import type { Request, Response } from "express";
import { z } from "zod";
import { BaseService, HttpService } from "./_services";

export class UserService extends BaseService {
  async createUser(req: Request, res: Response) {
    // TODO: replace httpService util with sendResponse from HttpService
    const sendResponse =
      new HttpService<CreateUserResData>().sendResponse;

    /** TODO:
     * - improve validation
     * - hash password
     */
    try {
      const createUserDto: CreateUserDto =
        createUserSchema.parse(req.body);

      const { email, username } = createUserDto;

      const existingUser = await userRepository.findOne({
        where: [{ email }, { username }],
      });

      if (existingUser) {
        return httpService(res, {
          code: 400,
          data: null,
          message: "Email or username already taken",
        });
      }

      const newUser =
        await userRepository.save(createUserDto);

      return httpService(res, {
        code: 201,
        data: {
          username: newUser.username,
          email: newUser.email,
        },
        message: "User created successfully",
      });
    } catch (error) {
      this.logError(error as Error, "createUser");

      if (error instanceof z.ZodError) {
        return sendResponse(res, {
          code: 400,
          data: null,
          message: error.errors
            .map((e) => e.message)
            .join(", "),
        });
      }

      throw error;
    }
  }

  async getUserById(id: number) {
    try {
      return await userRepository.findOne({
        where: { id },
      });
    } catch (error) {
      this.logError(error as Error, "getUserById");
      throw error;
    }
  }
}
