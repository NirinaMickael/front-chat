import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  frappe$ = new BehaviorSubject<any>("");
  constructor( private _httpClient : HttpClient) { }
  searchUser( user : string): Observable<any> {
    return this._httpClient.get(`http://localhost:3000/api/${user}`)
  }
}
