import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.js';

export const createMemberRouter = (memberController, jwtService) => {
  const router = Router();

  router.get(
    '/me',
    authMiddleware(jwtService),
    memberController.getMe.bind(memberController),
  );

  router
    .route('/:id')
    .get(memberController.get.bind(memberController))
    .patch(memberController.update.bind(memberController));

  router.post('/login', memberController.login.bind(memberController));

  return router;
};
