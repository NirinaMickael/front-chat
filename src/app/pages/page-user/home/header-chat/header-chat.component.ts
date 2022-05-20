import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { delay, map } from 'rxjs';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-header-chat',
  templateUrl: './header-chat.component.html',
  styleUrls: ['./header-chat.component.scss']
})
export class HeaderChatComponent implements OnInit {
  constructor(private _user : UserService) { }
  user !:any;
  ngOnInit(): void {
    const id = sessionStorage.getItem('id');
    this._user.dataUser(`http://localhost:3000/api/user/${id}`).pipe(
      delay(100)
    ).subscribe(data=>this.user=data)
  }
}
