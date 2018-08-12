import {Guid} from './guid';

export class User {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  private ableToLogin: boolean;

  constructor(name: string, email: string, password: string) {
    this.id = Guid.newGuid();
    this.name = name;
    this.email = email;
  }

  enableLogin(): void {
    this.ableToLogin = true;
  }

  disableLogin(): void {
    this.ableToLogin = false;
  }

  login(password: string): boolean {
    return this.password === password && this.ableToLogin;
  }
}
