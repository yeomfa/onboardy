export class Member {
  constructor({ id, identificationNumber, identificationType }) {
    this.id = id;
    this.identificationNumber = identificationNumber;
    this.identificationType = identificationType;
    this.validate();
  }

  validate() {
    if (!this.id) {
      throw new Error('Member ID is required');
    }
    if (!this.identificationNumber) {
      throw new Error('Identification number is required');
    }
    if (!this.identificationType) {
      throw new Error('Identification type is required');
    }
  }

  toObject() {
    return {
      id: this.id,
      identificationNumber: this.identificationNumber,
      identificationType: this.identificationType,
    };
  }
}
