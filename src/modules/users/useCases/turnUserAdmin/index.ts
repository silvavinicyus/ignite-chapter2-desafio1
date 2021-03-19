import { getCustomRepository } from "typeorm";

import PostgresUserRepository from "../../repositories/implementations/PostgresUserRepository";
import { TurnUserAdminController } from "./TurnUserAdminController";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

const usersRepository = getCustomRepository(PostgresUserRepository);
const turnUserAdminUseCase = new TurnUserAdminUseCase(usersRepository);
const turnUserAdminController = new TurnUserAdminController(
  turnUserAdminUseCase
);

export { turnUserAdminController };
