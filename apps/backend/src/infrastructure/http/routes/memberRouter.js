import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.js';

export const createMemberRouter = (memberController, jwtService) => {
  const router = Router();
  const auth = authMiddleware(jwtService);

  router
    .route('/me')
    .all(auth)
    .get(memberController.getMe.bind(memberController))
    .patch(memberController.updateMe.bind(memberController));

  // This route is for testing purposes and should not be exposed in production without proper authorization checks
  router
    .route('/:id')
    .get(memberController.get.bind(memberController))
    .patch(auth, memberController.update.bind(memberController));

  router.post('/login', memberController.login.bind(memberController));

  return router;
};
