import { NgxSpinnerService } from 'ngx-spinner';
import { FetchState } from './../../core/models/FetchState';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Button } from '../../core/models/button';
import { IUser } from '../../core/models/user';
import { UserService } from '../../core/service/user.service';
import { IResponse } from 'src/app/core/models/IResponse';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss'],
})
export class UserProfilComponent implements OnInit {
  // name!: string;
  image!: any;
  user!: IUser;
  changingImage: boolean = false;
  isOther!: boolean;
  otherId: any;
  ownId: any;
  button!: Button[];
  openChat : boolean = false;
  userState: FetchState = {
    isFinish: false,
    isLoading: true,
    isPedding: false,
  };
  isLoading !: boolean;
  constructor(
    private route: ActivatedRoute,
    private _user: UserService,
    private _route: Router,
    private SpinnerService : NgxSpinnerService
  ) {
    this.ownId = sessionStorage.getItem('id');
    // console.log(this.ownId);
    this.otherId = sessionStorage.getItem('otherId');
  }

  ngOnInit(): void {
    this.SpinnerService.show();
    // this.name = this.route.snapshot.params['username'];
    this.isOther =
      this.otherId === this.ownId || this.otherId === null ? false : true;
    if (this.isOther) {
      this.button = [
        {
          name: 'Add to friend',
          action: () => console.log('kiku'),
        },
        {
          name: 'Message',
          action: (_id:string) => {
            this.openChat=!this.openChat;
            this.otherId = _id;
          },
        },
        {
          name: 'Follow',
          action: () => console.log('kiku'),
        },
      ];
      this._user
        .dataUser('/api/user/' + this.otherId)
        .subscribe({
          next:(res) => {
            this.userState.isFinish = true;
            this.userState.isLoading = false;
            this.user = res.data as IUser;
          },
          error :(error : Observable<IResponse>)=>{
            error.subscribe(
              res => {
                alert(res.message);
                this._route.navigateByUrl('auth')  
              }
            )
          }
        });
    } else {
      this.button = [
        {
          name: 'Edit Profil',
          action: () => console.log('kiku'),
        },
        {
          name: 'View Message',
          action: () => this._route.navigate(['./pages/home']),
        },
        {
          name: 'Followers',
          action: () => console.log('kiku'),
        },
      ];
    }
    this._user
      .dataUser('/api/user/' + this.ownId)
      .subscribe({
        next:(res) => {
          this.userState.isFinish = true;
          this.userState.isLoading = false;
          this.SpinnerService.hide();
          this.user = res.data as IUser;
        },
        error :(error : Observable<IResponse>)=>{
          error.subscribe(
            res => {
              alert(res.message);
              this._route.navigateByUrl('auth')  
            }
          )
        }
      });
  }
  handleChange(event: Event) {
    const image = (event.target as HTMLInputElement).files;
    if (image !== null) {
      this.image = image[0];
      this.changingImage = true;
    }
  }
  exitRequest() {
    this.changingImage = false;
  }
  sendImage() {
    this.isLoading = true;
    this.SpinnerService.show();
    if (this.image) {
      this._user
        .uploadImage(
          this.image,
         '/api/edituser/' + this.ownId
        )
        .subscribe({
          next:(data) => {
            this.changingImage = false;
            this.isLoading = false;
            this.SpinnerService.hide();
          }
        });
    }
  }
}
