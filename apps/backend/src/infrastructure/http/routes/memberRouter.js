import { Router } from 'express';

export const createMemberRouter = (memberController) => {
  const router = Router();

  router
    .route('/:id')
    .get(memberController.get.bind(memberController))
    .patch(memberController.update.bind(memberController));

  router.post('/login', memberController.login.bind(memberController));

  return router;
};
