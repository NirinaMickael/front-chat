import { IResponse } from './../../../core/models/IResponse';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, throwError, observable, Observable } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  typeSelected!: string;
  constructor(
    private _user: AuthService,
    private _useForm: FormBuilder,
    private _route: Router
  ) {
    this.typeSelected = 'line-spin-fade'
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this._user.user$.subscribe({
      next:(res) => {
        if(res){
          sessionStorage.setItem('id',res.data["_id"]);
          this._route.navigateByUrl('pages')
        }
      },
      error : (error) => console.log("eee"+error)
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
      .loginUser('/api', data, {
        responseType: 'json',
        observe: 'response',
      })
      .subscribe({
        next:(data ) => {
          if(data){
            this._user.user().next(data.body as IResponse)
          }
        },
        error : (error : Observable<IResponse>) => {
          error.subscribe(
            err => console.log(err.message)
          )
        }
      });
  }
  
}
