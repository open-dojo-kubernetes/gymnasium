import { Guid } from './guid';
declare const moment;

export class LoginAttempt {
  public id: string;
  public name: string;
  public email: string;
  public timestamp: number;
  public result: boolean;

  constructor(name: string, email: string) {
    this.id = Guid.newGuid();
    this.name = name;
    this.email = email;
    this.timestamp = moment().subtract(Object);
  }
}
