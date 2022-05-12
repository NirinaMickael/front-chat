import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  constructor(
    private _user: UserService,
    private _useForm: FormBuilder,
    private _route: Router
  ) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this._user.user$.subscribe((data) => {
      if(data){
        localStorage.setItem('id',data['_id']);
        this._route.navigateByUrl('pages')
      }
    });
  }
  loginForm = this._useForm.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  handleSubmit(event: Event) {
    event.preventDefault();
    const data = this.loginForm.value;
    this._user
      .loginUser('http://192.168.1.94:3000/api/', data, {
        responseType: 'json',
        observe: 'response',
      })
      .subscribe((data) => this._user.user().next(data.body));
  }
}
