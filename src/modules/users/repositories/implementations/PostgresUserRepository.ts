import {
  EntityRepository,
  getConnection,
  getConnectionManager,
  Repository,
} from "typeorm";

import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

@EntityRepository(User)
export default class PostgresUserRepository
  extends Repository<User>
  implements IUsersRepository {
  async createUser({ name, email }: ICreateUserDTO): Promise<User> {
    const user = this.create({
      name,
      email,
    });

    await this.save(user);

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("There is no user");
    }

    return user;
  }

  async turnAdmin(receivedUser: User): Promise<User> {
    const user = await this.findOne({
      where: {
        id: receivedUser.id,
      },
    });

    user.admin = true;

    await this.save(user);

    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.find();

    return users;
  }
}
