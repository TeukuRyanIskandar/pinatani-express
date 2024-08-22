import { CreateUserDto } from "@lib/types";
import { httpService } from "@lib/utils";
import { userRepository } from "@repositories/user.repository";
import type { Request, Response } from "express";
import { BaseService } from "./base.service";

export class UserService extends BaseService {
  async createUser(req: Request, res: Response) {
    /** TODO:
     * - improve validation
     * - hash password
     */
    try {
      const createUserDto: CreateUserDto = req.body;
      const { email, password, username } = createUserDto;

      if (!email || !password || !username) {
        return httpService(res, {
          code: 400,
          data: null,
          message:
            "Email, password, and username are required",
        });
      }

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
