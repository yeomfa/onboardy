export class MemberController {
  constructor(updateMemberUC, loginMemberUC) {
    this.updateMemberUC = updateMemberUC;
    this.loginMemberUC = loginMemberUC;
  }

  login(req, res) {
    const { identificationNumber } = req.body;
    const token = this.loginMemberUC.execute(identificationNumber);
    res.status(200).json({
      status: 'ok',
      data: {
        token,
      },
    });
  }

  get(req, res) {
    res.status(200).json({
      status: 'ok',
      message: 'In development...',
    });
  }

  update(req, res) {
    const newData = req.body;
    const updatedMember = this.updateMemberUC.execute(newData);
    res.status(200).json({
      status: 'ok',
      data: {
        member: updatedMember,
      },
    });
  }
}
