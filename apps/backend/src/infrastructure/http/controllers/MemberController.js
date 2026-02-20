export class MemberController {
  constructor(updateMemberUC, loginMemberUC) {
    this.updateMemberUC = updateMemberUC;
    this.loginMemberUC = loginMemberUC;
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
    res.status(200).json({
      status: 'ok',
      message: 'In development...',
    });
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
}
