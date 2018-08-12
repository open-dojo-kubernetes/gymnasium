import { Component, OnInit } from '@angular/core';
import { LoginAttempt } from '../model/login-attempt';
import { attachEmbeddedView } from '../../../node_modules/@angular/core/src/view';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedId = false;
  model = null;
  onLogin() {
    if (this.loggedId) {
      console.log(`User logged in ${this.loggedId}`);
    } else {
      const attempt: LoginAttempt = new LoginAttempt('', '');
      this.model = attempt;
    }
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

}
