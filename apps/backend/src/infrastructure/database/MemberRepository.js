import { readFile } from 'node:fs/promises';
import { Repository } from './Repository.js';

export class MemberRepository extends Repository {
  constructor() {
    super('/data/members.json');
  }

  async findByIdentificationNumber(identificationNumber) {
    try {
      const data = await readFile(this.path, 'utf-8');
      const dataArr = JSON.parse(data);
      const result = dataArr.find(
        (item) => item.identificationNumber === +identificationNumber,
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}
