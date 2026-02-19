import { HealthController } from './src/infrastructure/http/controllers/HealthController.js';
import { MemberController } from './src/infrastructure/http/controllers/MemberController.js';
import { createAppRouter } from './src/infrastructure/http/routes/index.js';
import { createServer } from './src/infrastructure/http/server.js';

const healthController = new HealthController();
const memberController = new MemberController();

const controllers = {
  health: healthController,
  member: memberController,
};

const appRouter = createAppRouter(controllers);

const server = createServer(appRouter);

server.listen(3000, () => console.log('Server running on PORT 3000'));
