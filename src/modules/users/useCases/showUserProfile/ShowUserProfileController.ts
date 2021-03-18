import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id });
      return response.json(user);
    } catch (err) {
      return response
        .status(404)
        .json({ error: "There is no user with the given id" });
    }
  }
}

export { ShowUserProfileController };
