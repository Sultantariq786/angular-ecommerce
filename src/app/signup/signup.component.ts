import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  // loggedin = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userSignupData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'password': new FormControl(null, [Validators.required]),
      }),
    });
  }

  onSubmit() {
    const formValue = this.signupForm.value.userSignupData;
    this.authService.signupUser(formValue.username, formValue.password);
    console.log(formValue.username + ' ' + formValue.password);
    this.signupForm.reset();
  }

}
