import { User } from "@models/entities";
import { AppDataSource } from "@root/ormconfig";

const userRepository = AppDataSource.getRepository(User);

export { userRepository };
