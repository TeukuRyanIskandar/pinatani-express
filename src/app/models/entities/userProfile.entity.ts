import { User } from "@models/entities/_entities";
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "user_profiles" })
export class UserProfile {
  @PrimaryGeneratedColumn({ type: "int" })
  profileId: number;

  @Column({ type: "varchar", length: 50, unique: true })
  username: string;

  @OneToOne(() => User, (user) => user.userProfile)
  user: User;

  @Column({ type: "int" })
  id: number;
}
