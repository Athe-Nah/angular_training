import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  loginGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initLoginGroup();
  }

  // Initialisation du formgroup d'authentification
  initLoginGroup() {
    this.loginGroup = this.formBuilder.group({
      login: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }
}
