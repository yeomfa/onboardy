export class LoginMember {
  constructor(memberRepository, jwtService) {
    this.memberRepository = memberRepository;
    this.jwtService = jwtService;
  }

  async execute(identificationNumber) {
    try {
      const member =
        await this.memberRepository.findByIdentificationNumber(
          identificationNumber,
        );

      if (!member) {
        throw new Error('Member not found');
      }

      const token = this.jwtService.sign({ id: member.id });

      return { token };
    } catch (error) {
      throw error;
    }
  }
}
