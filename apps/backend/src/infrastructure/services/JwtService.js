import jwt from 'jsonwebtoken';

export class JwtService {
  constructor(secret) {
    this.secret = secret;
  }

  sign(payload) {
    return jwt.sign(payload, this.secret, { expiresIn: '2h' });
  }

  verify(token) {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
