export class GetMember {
  constructor(memberRepository) {
    this.memberRepository = memberRepository;
  }

  async execute(id) {
    try {
      const memberObj = await this.memberRepository.findById(id);
      if (!memberObj) {
        throw new Error('Member not found');
      }
      return memberObj;
    } catch (error) {
      throw error;
    }
  }
}
