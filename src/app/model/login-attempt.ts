import { Guid } from './guid';
declare const moment;

export class LoginAttempt {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public timestamp: number;
  public result: boolean;

  constructor(name: string, email: string, password: string) {
    this.id = Guid.newGuid();
    this.name = name;
    this.email = email;
    this.password = password;
    this.timestamp = moment().subtract(Object);
  }
}
