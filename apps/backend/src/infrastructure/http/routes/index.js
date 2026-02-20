import { Router } from 'express';
import { createHealthRouter } from './healthRouter.js';
import { createMemberRouter } from './memberRouter.js';

export const createAppRouter = (controllers) => {
  const router = Router();

  router.use('/health', createHealthRouter(controllers.health));
  router.use('/members', createMemberRouter(controllers.member));

  return router;
};
