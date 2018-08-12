import { Guid } from './guid';

export class LoginAttempt {
  public id: string;
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.id = Guid.newGuid()
    this.name = name;
    this.email = email;
  }
}
