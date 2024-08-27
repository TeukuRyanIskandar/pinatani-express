import { UserProfile } from "@models/entities";
import { AppDataSource } from "@root/ormconfig";

const userProfileRepository =
  AppDataSource.getRepository(UserProfile);

export { userProfileRepository };
