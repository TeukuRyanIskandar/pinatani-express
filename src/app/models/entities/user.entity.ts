import { User as TUser } from "@lib/types";
import { UserProfile } from "@models/entities/_entities";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "users" })
export class User implements TUser {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 50, unique: true })
  username: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email: string;

  @Column({ type: "varchar", length: 255 })
  password: string;

  @CreateDateColumn({ type: "timestamptz", precision: 3 })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", precision: 3 })
  updatedAt: Date;

  @DeleteDateColumn({ type: "timestamptz", precision: 3 })
  deletedAt: Date;

  @OneToOne(
    () => UserProfile,
    (userProfile) => userProfile.user,
    {
      cascade: true,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  )
  @JoinColumn({ name: "profileId" })
  userProfile: UserProfile;

  @Column()
  profileId: number;
}
