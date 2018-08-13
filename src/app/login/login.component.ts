import { Component, OnInit } from '@angular/core';
import { LoginAttempt } from '../model/login-attempt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private loggedId = false;
  public model = null;
  onLogin() {
    if (this.loggedId) {
      console.log(`User logged in ${this.loggedId}`);
      console.log(`LoginAttempt model ${JSON.stringify(this.model)}`);
    } else {
      const attempt: LoginAttempt = new LoginAttempt('', '', '');
      this.model = attempt;
    }
  }
  doRegister() {

  }
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
