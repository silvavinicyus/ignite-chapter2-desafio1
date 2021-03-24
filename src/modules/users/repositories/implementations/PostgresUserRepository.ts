import { getRepository, Repository } from "typeorm";

import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

export default class PostgresUserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async createUser({ name, email }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
    });

    await this.repository.save(user);

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ id });

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async turnAdmin(receivedUser: User): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        id: receivedUser.id,
      },
    });

    user.admin = true;

    await this.repository.save(user);

    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }
}
