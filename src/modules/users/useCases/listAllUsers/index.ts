import { getCustomRepository } from "typeorm";

import PostgresUserRepository from "../../repositories/implementations/PostgresUserRepository";
import { ListAllUsersController } from "./ListAllUsersController";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

const usersRepository = getCustomRepository(PostgresUserRepository);
const listAllUsersUseCase = new ListAllUsersUseCase(usersRepository);
const listAllUsersController = new ListAllUsersController(listAllUsersUseCase);

export { listAllUsersController };
