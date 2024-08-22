export type CreateUserDto = {
  email: string;
  password: string;
  username: string;
  firstName?: string;
  lastName?: string;
};

export type CreateUserResData = {
  username: string;
  email: string;
} | null;
