import {
  CreateUserDto,
  CreateUserResData,
} from "@lib/types";
import { createUserSchema } from "@models/schema";
import { userRepository } from "@repositories/user.repository";
import * as bcrypt from "bcrypt";
import type { Request, Response } from "express";
import { z } from "zod";
import { userProfileRepository } from "../repositories";
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
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(
        createUserDto.password,
        salt,
      );

      const newUser = userRepository.create({
        username: createUserDto.username,
        email: createUserDto.email,
        password: hashedPassword,
      });
      const savedUser = await userRepository.save(newUser);

      const baseProfile = userRepository.create({
        username: createUserDto.username,
        id: savedUser.id,
      });

      const savedProfile =
        await userProfileRepository.save(baseProfile);

      savedUser.profileId = savedProfile.profileId;

      await userRepository.save(savedUser);

      const existingUser = await userRepository.findOne({
        where: [{ email }, { username }],
      });

      if (existingUser) {
        return sendResponse(res, {
          code: 400,
          data: null,
          message: "Email or username already taken",
        });
      }

      return sendResponse(res, {
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
      const user = await userRepository.findOne({
        where: { id },
      });
      return user;
    } catch (error) {
      this.logError(error as Error, "getUserById");
      throw error;
    }
  }

  async getUserByEmailOrUsername(emailOrUsername: string) {
    try {
      const user = await userRepository.findOne({
        where: [
          { email: emailOrUsername },
          { username: emailOrUsername },
        ],
      });
      return user;
    } catch (error) {
      this.logError(
        error as Error,
        "getUserByEmailOrUsername",
      );
      throw error;
    }
  }
}
