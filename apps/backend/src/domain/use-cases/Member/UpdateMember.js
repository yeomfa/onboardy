import { Member } from '../../entities/Member.js';

export class UpdateMember {
  constructor(memberRepository) {
    this.memberRepository = memberRepository;
  }

  async execute(id, newData) {
    try {
      const memberObj = await this.memberRepository.findById(id);

      if (!memberObj) {
        throw new Error('Member not found');
      }

      const member = new Member({ ...memberObj, ...newData });

      return await this.memberRepository.update(member.toObject());
    } catch (error) {
      throw error;
    }
  }
}
