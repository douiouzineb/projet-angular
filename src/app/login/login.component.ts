import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    console.log(this.loginForm);
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe((res) => {
      if (res.toString() != '') {
        var json = JSON.stringify(res);
        this.router.navigateByUrl('/acueill/' + JSON.parse(json).token);
      }
    });
  }

  onClickBtn() {
    this.router.navigateByUrl('/inscription');
  }
}
