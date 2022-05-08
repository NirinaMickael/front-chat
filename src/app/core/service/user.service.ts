import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private _http : HttpClient) { }

  addUser(url : string , data : User , option : Object) : Observable<User> {
    return this._http.post<User>(url,data,option);
  }
  loginUser (url: string , data : User , option:Object) :Observable<User>{
    return this._http.post<User>(url,data,option);
  }
}
