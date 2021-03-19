import { getCustomRepository } from "typeorm";

import PostgresUserRepository from "../../repositories/implementations/PostgresUserRepository";
import { ShowUserProfileController } from "./ShowUserProfileController";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

const usersRepository = getCustomRepository(PostgresUserRepository);
const showUserProfileUseCase = new ShowUserProfileUseCase(usersRepository);
const showUserProfileController = new ShowUserProfileController(
  showUserProfileUseCase
);

export { showUserProfileController };
