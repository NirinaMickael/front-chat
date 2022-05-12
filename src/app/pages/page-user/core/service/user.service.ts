import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  frappe$ = new BehaviorSubject<any>('');
  constructor(private _httpClient: HttpClient, private _user: AuthService) {}
  searchUser(user: string): Observable<any> {
    return this._httpClient.get(`http://192.168.99.161:3000/api/${user}`);
  }
  dataUser(url : string,option={}): Observable<any> {
    return this._user.getUser(url,option);
  }
}
