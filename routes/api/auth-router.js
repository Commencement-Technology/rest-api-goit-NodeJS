import express from "express";
import { validateBody } from "../../decorators/index.js";
import { isEmptyBody } from "../../middleware/index.js";
import {
  userAuthSchema,
  updateSubscriptionSchema,
} from "../../schemas/auth-schema.js";
import authController from "../../controllers/auth-controller.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  isEmptyBody,
  validateBody(userAuthSchema),
  authController.signUp
);

authRouter.post(
  "/signin",
  isEmptyBody,
  validateBody(userAuthSchema),
  authController.signIn
);

authRouter.patch(
  "/",
  isEmptyBody,
  validateBody(updateSubscriptionSchema),
  authController.updateSubscription
);

export default authRouter;
