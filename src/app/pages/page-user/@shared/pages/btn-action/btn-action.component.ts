import { Component, Input, OnInit } from '@angular/core';
import { Button } from '../../../core/models/button';
import { UserService } from '../../../core/service/user.service';

@Component({
  selector: 'app-btn-action',
  templateUrl: './btn-action.component.html',
  styleUrls: ['./btn-action.component.scss'],
})
export class BtnActionComponent implements OnInit {
  @Input() btn!: Button[];
  @Input()  otherId!:string;
  @Input() ownId!:string;
  constructor(private _user : UserService) {}
  ngOnInit(): void {
    console.log(this.btn);
  }
  handleClick(action: string) {
    switch (action) {
      case 'form':
        break;
      case 'View Messgase':
        break;
      case 'Followers':
        break;
      case 'Add to friend':
        this._user.AddFriend(this.ownId);
        break;
      case 'Message':
        break;
      case 'Follow':
        break;
      default:
        break;
    }
  }
}
