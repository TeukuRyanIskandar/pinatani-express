import { User } from "@models/user.entity";
import { AppDataSource } from "@root/ormconfig";

const userRepository = AppDataSource.getRepository(User);

export { userRepository };
