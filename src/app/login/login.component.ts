import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedin = false;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'userLoginData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'password': new FormControl(null, [Validators.required]),
      }),
    });
  }

  onSubmit() {
    if (this.loginForm.value.userLoginData.username === 'newtechtariq@gmail.com' &&
    this.loginForm.value.userLoginData.password === 'bismillah@786') {
      // setTimeout(function() {
        this.loggedin = true;
      // }, 1000);
    } else {
      this.loggedin = false;
    }
    console.log(this.loggedin);
    this.loginForm.reset();
  }

}
