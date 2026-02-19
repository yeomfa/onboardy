export class Member {
  id;
  identificationNumber;
  identificationType;

  constructor({ id, identificationNumber, identificationType }) {
    this.id = id;
    this.identificationNumber = identificationNumber;
    this.identificationType = identificationType;
  }
}
