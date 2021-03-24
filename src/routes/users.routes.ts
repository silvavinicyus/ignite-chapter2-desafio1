import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { ListAllUsersController } from "../modules/users/useCases/listAllUsers/ListAllUsersController";
import { ShowUserProfileController } from "../modules/users/useCases/showUserProfile/ShowUserProfileController";
import { TurnUserAdminController } from "../modules/users/useCases/turnUserAdmin/TurnUserAdminController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const showUserProfileController = new ShowUserProfileController();
const turnUserAdminController = new TurnUserAdminController();

usersRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required,
    },
  }),
  createUserController.handle
);

usersRoutes.patch(
  "/:user_id/admin",
  celebrate({
    [Segments.PARAMS]: {
      user_id: Joi.string().uuid(),
    },
  }),
  turnUserAdminController.handle
);

usersRoutes.get(
  "/:user_id",
  celebrate({
    [Segments.PARAMS]: {
      user_id: Joi.string().uuid(),
    },
  }),
  showUserProfileController.handle
);

usersRoutes.get(
  "/",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      user_id: Joi.string().uuid(),
    }).unknown(),
  }),
  listAllUsersController.handle
);

export { usersRoutes };
