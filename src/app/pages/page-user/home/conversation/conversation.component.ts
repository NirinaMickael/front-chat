import { IMessage } from './../../core/models/IMessage';
import { FormBuilder, Validators } from '@angular/forms';
import { IConversation } from './../../../../core/models/converstaion';
import { IUser } from './../../core/models/user';
import { IResponse } from './../../../../core/models/IResponse';
import { FetchState } from './../../core/models/FetchState';
import {
  map,
  Observable,
  switchMap,
  BehaviorSubject,
  mergeMap,
  delay,
} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit {
  _id!: string;
  ownId!: string | null;
  convId !: string;
  message!: IMessage[];
  otherImage!: string;
  registerForm = this.builder.group({
    messages:['',Validators.required]
  })
  allMessageState: FetchState = {
    isLoading: true,
    isFinish: false,
    isPedding: true,
  };
  constructor(private _route: ActivatedRoute, private _user: UserService , private builder : FormBuilder) {
    this._id = _route.firstChild?.snapshot.params['idMessage'];
    this.ownId = sessionStorage.getItem('id');
  }
  ngOnInit(): void {
    this._user.idMessage$
      .pipe(
        map((data) => (data == '' ? this._id : data)),
        mergeMap((res) => {
          return this.getConversationId(this.ownId, res);
        }),
        map((conv: IResponse) => {
          this.convId = (conv.data as IConversation[])[0]._id ; 
          return this.convId;
        }),
        mergeMap((convId) => {
          return this._user.viewMessage('/message/' + convId);
        })
      )
      .subscribe((messages) => {
        this.allMessageState = {
          isLoading: false,
          isFinish: true,
          isPedding: false,
        };
        this.message = messages.data as unknown as IMessage[];
      });
    this._user.idMessage$
      .pipe(
        map((data) => (data == '' ? this._id : data)),
        mergeMap((otherId) => this.getOtherUser(otherId)),
        map((otherId: IResponse) => (otherId.data as IUser).image)
      )
      .subscribe((data) => (this.otherImage = data as string));
  }
  getConversationId(
    ownId: string | null,
    otherId: string | null
  ): Observable<IResponse> {
    if (ownId == '') return new BehaviorSubject<any>('');
    return this._user.getConversation('/conversation/' + ownId + '/' + otherId);
  }

  getOtherUser(otherId: string): Observable<any> {
    return this._user.dataUser('/api/user/' + otherId);
  }
  handleSubmit(){
    let messages = this.registerForm.value;
    if( messages !== ""){
      let formData : IMessage = {...messages , senderId:this.ownId}; 
      this._user.SendMessage('/message/'+this.convId+'/send',formData).subscribe(
        data => console.log(data)
      );
    }
  }
}
