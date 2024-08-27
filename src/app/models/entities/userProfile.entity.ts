import { User } from "@repositories/user.repository";
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "user_profile" })
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
