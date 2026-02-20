export class MemberController {
  constructor(updateMemberUC, loginMemberUC, getMemberUC) {
    this.updateMemberUC = updateMemberUC;
    this.loginMemberUC = loginMemberUC;
    this.getMemberUC = getMemberUC;
  }

  async login(req, res) {
    try {
      const { identificationNumber } = req.body;
      const token = await this.loginMemberUC.execute(identificationNumber);
      res.status(200).json({
        status: 'ok',
        data: {
          token,
        },
      });
    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  async get(req, res) {
    try {
      const id = +req.params.id;
      const member = await this.getMemberUC.execute(id);
      res.status(200).json({
        status: 'ok',
        data: {
          member,
        },
      });
    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  async getMe(req, res) {
    try {
      const id = req.user.id;
      const member = await this.getMemberUC.execute(id);
      res.status(200).json({
        status: 'ok',
        data: {
          member,
        },
      });
    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const id = +req.params.id;
      const newData = req.body;
      const updatedMember = await this.updateMemberUC.execute(id, newData);

      res.status(200).json({
        status: 'ok',
        data: {
          member: updatedMember,
        },
      });
    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  async updateMe(req, res) {
    try {
      const id = req.user.id;
      const newData = req.body;
      const updatedMember = await this.updateMemberUC.execute(id, newData);

      res.status(200).json({
        status: 'ok',
        data: {
          member: updatedMember,
        },
      });
    } catch (error) {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}
