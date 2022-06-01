import { FetchState } from './../core/models/FetchState';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from '../core/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userId !: string | null;
  conversation: any;
  user: any;
  stateUser  : FetchState = {
    isLoading: true,
    isPedding: true,
    isFinish: false
  };
  constructor(private _user: UserService) {
  }
  ngOnInit(): void {
    // console.log(this.stateUser) 
    this.userId = sessionStorage.getItem('id');
    this._user.dataUser(environment.api + "/api/user/" + this.userId).subscribe(
      data => {
        this.stateUser.isLoading = false;
        this.stateUser.isFinish = true;
        this.user = data;
        this._user.user$.next(data);
      }
    );
  }
}