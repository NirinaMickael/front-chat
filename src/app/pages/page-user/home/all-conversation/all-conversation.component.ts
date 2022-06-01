import { FetchState } from './../../core/models/FetchState';
import { filter, map } from 'rxjs';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from '../../core/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-conversation',
  templateUrl: './all-conversation.component.html',
  styleUrls: ['./all-conversation.component.scss']
})
export class AllConversationComponent implements OnInit {
  @Input() userId !: string;
  @Output() messageBox = new EventEmitter<any>();
  allFriends !: any ;
  allFriendState : FetchState = {
    isLoading : true,
    isFinish :false,
    isPedding:true
  };
  index : number = 0;
  constructor(private _user :  UserService , private _route : Router) { }

  ngOnInit(): void {
    this._user.getAllUser(environment.api+"/api/alluser").pipe(
      map(res => res.filter((data: any)=>data._id != this.userId))
    ).subscribe(
      data => {
        this.allFriendState.isLoading = false;
        this.allFriendState.isFinish = true;
        this.allFriends =  data
        console.log(this.allFriends)
      }
    )
  }
  handleClick(username: string) {
    // this._route.navigate(["/pages/conversation",username]);
    this.messageBox.emit(username);
  }

}
