import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUsersRepository {
  createUser({ name, email }: ICreateUserDTO): User | Promise<User>;
  findById(id: string): User | undefined | Promise<User>;
  findByEmail(email: string): User | undefined | Promise<User>;
  turnAdmin(user: User): User | Promise<User>;
  list(): User[] | Promise<User[]>;
}

export { IUsersRepository, ICreateUserDTO };
