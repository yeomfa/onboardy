import express from 'express';

export const createServer = (appRouter) => {
  const app = express();

  app.use('/api/v1', appRouter);

  return app;
};
