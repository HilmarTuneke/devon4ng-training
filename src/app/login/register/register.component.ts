import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(4), Validators.required]],
      lastName: ['', [Validators.minLength(4), Validators.required]],
      email: ['example@mail.com', Validators.email],
      passwords: this.formBuilder.group({
        password: ['', Validators.required],
        passwordRepetition: ''
      })
    });
  }

  register() {
    console.log(this.registrationForm.getRawValue());
  }
}
