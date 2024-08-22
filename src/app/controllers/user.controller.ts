import { UserService } from "@services/user.service";
import {
  Router,
  type Request,
  type Response,
} from "express";
import { httpService } from "../lib/utils/http";

export class UserController {
  private readonly userService: UserService;
  public router: Router;
  private initializeRoutes() {
    this.router.post("/create", this.createUser);
    this.router.get("/:id", this.getUserById);
    // Add more routes here as needed
  }

  constructor() {
    this.userService = new UserService();
    this.router = Router();
    this.initializeRoutes();
  }

  createUser = async (req: Request, res: Response) => {
    try {
      await this.userService.createUser(req, res);
    } catch (error) {
      return httpService(res, {
        code: 500,
        data: null,
        message: "Error creating user",
      });
    }
  };

  getUserById = async (req: Request, res: Response) => {
    try {
    } catch (error) {}
  };
}
