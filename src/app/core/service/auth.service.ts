import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new Subject<any>();
  constructor( private _http : HttpClient) { }

  addUser(url : string , data : User , option : Object) : Observable<User> {
    return this._http.post<User>(url,data,option);
  }
  loginUser (url: string , data : User , option={}) :Observable<any>{
    return this._http.post<any>(url,data,option);
  }
  getUser(url: string , option={}) :Observable<any>{
    return this._http.post<any>(url,option);
  }
  user() : Subject<any>{
    return this.user$;
  }
}
