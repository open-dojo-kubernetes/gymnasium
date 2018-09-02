import { Component, OnInit } from '@angular/core';
import { LoginAttempt } from '../model/login-attempt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private passwordRegex = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$", "gm");
  private loggedId = false;
  public model = null;
  onLogin(username: string, password: string) {
    if (this.loggedId) {
      console.log(`User logged in ${this.loggedId}`);
      console.log(`LoginAttempt model ${JSON.stringify(this.model)}`);
    } else {
      const attempt: LoginAttempt = new LoginAttempt(username , username, password);
      this.model = attempt;
    }
  }
  doRegister(username: string, password: string) {

  }
  verifyStrength(password: string){
    if(!password.match(this.passwordRegex)) {

    }
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
