export class Member {
  constructor({
    id,
    identificationNumber,
    identificationType,
    email,
    cellphone,
    companyName = '',
    firstName = '',
    secondName = '',
    firstLastName = '',
    secondLastName = '',
    authorizeEmail = false,
    authorizeSms = false,
  }) {
    this.id = id;
    this.identificationNumber = identificationNumber;
    this.identificationType = identificationType;
    this.email = email;
    this.cellphone = cellphone;
    this.companyName = companyName;
    this.firstName = firstName;
    this.secondName = secondName;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.authorizeEmail = authorizeEmail;
    this.authorizeSms = authorizeSms;
    this.validate();
  }

  validate() {
    if (!this.identificationNumber) {
      throw new Error('Identification number is required');
    }
    if (!this.identificationType) {
      throw new Error('Identification type is required');
    }
    if (!this.email) {
      throw new Error('Email is required');
    }
    if (!this.cellphone) {
      throw new Error('Cellphone is required');
    }
    if (this.identificationType === 'nit' && !this.companyName) {
      throw new Error('Company name is required for NIT identification type');
    }
    if (this.identificationType === 'cc' && !this.firstName) {
      throw new Error('First name is required for CC identification type');
    }
    if (this.identificationType === 'cc' && !this.firstLastName) {
      throw new Error('First last name is required for CC identification type');
    }
  }

  toObject() {
    return {
      id: this.id,
      identificationNumber: this.identificationNumber,
      identificationType: this.identificationType,
      email: this.email,
      cellphone: this.cellphone,
      companyName: this.companyName,
      firstName: this.firstName,
      secondName: this.secondName,
      firstLastName: this.firstLastName,
      secondLastName: this.secondLastName,
      authorizeEmail: this.authorizeEmail,
      authorizeSms: this.authorizeSms,
    };
  }
}
