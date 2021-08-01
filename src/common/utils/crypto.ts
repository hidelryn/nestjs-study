import * as crypto from 'crypto';

export class Crypto {
  static randomBytes(size: number): string {
    const token = crypto.randomBytes(size).toString('hex');
    return token;
  }
}
