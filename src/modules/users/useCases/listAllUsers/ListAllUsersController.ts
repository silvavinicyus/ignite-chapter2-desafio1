import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.headers;

    const listAllUsersUseCase = container.resolve(ListAllUsersUseCase);

    try {
      const users = await listAllUsersUseCase.execute({
        user_id: String(user_id),
      });

      return response.json(users);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
