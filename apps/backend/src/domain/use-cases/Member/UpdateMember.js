import { Member } from '../../entities/Member.js';

export class UpdateMember {
  constructor(memberRepository) {
    this.memberRepository = memberRepository;
  }

  async execute(newData) {
    try {
      const memberObj = await this.memberRepository.findById(newData.id);
      if (!memberObj) {
        throw new Error('Member not found');
      }

      const member = new Member(memberObj);

      return await this.memberRepository.update(member.toObject());
    } catch (error) {
      throw error;
    }
  }
}
