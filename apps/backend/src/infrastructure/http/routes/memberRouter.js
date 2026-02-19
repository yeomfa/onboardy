import { Router } from 'express';

export const createMemberRouter = (memberController) => {
  const router = Router();

  router.route('/:id').get(memberController.get).patch(memberController.update);

  router.post('/login', memberController.login);

  return router;
};
