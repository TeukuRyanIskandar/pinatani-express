export type User = {
  id: number;
  username: string;
  password: string;
  email: string;
  firstName?: string;
  lastName?: string;
};

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
