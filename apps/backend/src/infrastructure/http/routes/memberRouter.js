import { Router } from 'express';

export const createMemberRouter = (memberController) => {
  const router = Router();

  router
    .route('/:id')
    .get(memberController.getMember)
    .patch(memberController.updateMember);

  return router;
};
