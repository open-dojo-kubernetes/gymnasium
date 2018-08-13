import {Guid} from './guid';
declare const moment;

export class User {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  private ableToLogin: boolean;
  private createdInstant: number;
  private updatedInstant: number;

  constructor(name: string, email: string, password: string) {
    this.id = Guid.newGuid();
    this.name = name;
    this.email = email;
    this.createdInstant = moment().subtract(Object);
  }

  enableLogin(): void {
    this.ableToLogin = true;
    this.updatedInstant = moment().subtract(Object);
  }

  disableLogin(): void {
    this.ableToLogin = false;
    this.updatedInstant = moment().subtract(Object);
  }

  validatePassword(password: string): boolean {
    return this.password === password && this.ableToLogin;
  }
}
