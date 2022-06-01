import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$ = new BehaviorSubject<any>('');
  convesation$ = new BehaviorSubject<boolean>(false);
  frappe$ = new BehaviorSubject<any>('');
  constructor(private _httpClient: HttpClient, private _user: AuthService) {}
  searchUser(user: string): Observable<any> {
    return this._httpClient.get(environment.api+'/api/'+user);
  }
  dataUser(url : string,option={}): Observable<any> {
    return this._user.getUser(url,option);
  }
  AddFriend(id : string){
    console.log("user is added")  
  }
  getConversation(url: string): Observable<any> {
    return this._httpClient.get(url);
  }
  viewMessage(url: string): Observable<any> {
    return this._httpClient.get(url);
  }
  getAllUser(url: string): Observable<any> {
    return this._httpClient.get(url);
  }
  getImage(url: string, option = {}): Observable<any> {
    return this._httpClient.get(url, option).pipe(
      map( (data: any) => this._arrayBufferToBase64(data))
    )
  }
  _arrayBufferToBase64( buffer : any) : string {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
       binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  }
}

