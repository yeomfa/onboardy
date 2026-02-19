import { Router } from 'express';

export const createHealthRouter = (healthController) => {
  const router = Router();

  router.get('/', healthController.getHello);

  return router;
};
