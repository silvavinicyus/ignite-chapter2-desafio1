import { Request, Response } from "express";
import { container } from "tsyringe";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const turnUserAdminUseCase = container.resolve(TurnUserAdminUseCase);

    try {
      const userAdmin = await turnUserAdminUseCase.execute({ user_id });
      return response.json(userAdmin);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { TurnUserAdminController };
