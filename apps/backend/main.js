import 'dotenv/config';

import { HealthController } from './src/infrastructure/http/controllers/HealthController.js';
import { MemberController } from './src/infrastructure/http/controllers/MemberController.js';
import { createAppRouter } from './src/infrastructure/http/routes/index.js';
import { createServer } from './src/infrastructure/http/server.js';
import { UpdateMember } from './src/domain/use-cases/Member/UpdateMember.js';
import { LoginMember } from './src/domain/use-cases/Member/LoginMember.js';
import { MemberRepository } from './src/infrastructure/database/MemberRepository.js';
import { GetMember } from './src/domain/use-cases/Member/GetMember.js';
import { JwtService } from './src/infrastructure/services/JwtService.js';

const { PORT = 3000, JWT_SECRET = 'temp_jwt_secret' } = process.env;

// Services
const jwtService = new JwtService(JWT_SECRET);

// Improve this with a subclass of Repository for members, and move it to a separate file
const memberRepository = new MemberRepository();

// Use cases
const updateMemberUC = new UpdateMember(memberRepository);
const loginMemberUC = new LoginMember(memberRepository, jwtService);
const getMemberUC = new GetMember(memberRepository);

// Controllers
const healthController = new HealthController();
const memberController = new MemberController(
  updateMemberUC,
  loginMemberUC,
  getMemberUC,
);
const controllers = {
  health: healthController,
  member: memberController,
};

const appRouter = createAppRouter(controllers, jwtService);

const server = createServer(appRouter);

server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
