import { container } from "tsyringe";

import PostgresUserRepository from "../../modules/users/repositories/implementations/PostgresUserRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  PostgresUserRepository
);
