import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ user_id }: IRequest): Promise<User[]> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("There is no user with the given id");
    }

    if (user.admin === false) {
      throw new Error("This user is not an admin");
    }

    const users = await this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
