import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Button } from '../../core/models/button';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss'],
})
export class UserProfilComponent implements OnInit {
  name!: string;
  image!: any;
  changingImage: boolean = false;
  isOther!: boolean;
  otherId: any ;
  ownId: any;
  button!: Button[];
  constructor(private route: ActivatedRoute, private _user: UserService) {
    this.ownId = sessionStorage.getItem('id');
    this.otherId = sessionStorage.getItem('otherId');
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['username'];
    this.isOther =(this.otherId === this.ownId || this.otherId === null) ? false : true;
    if (!this.isOther) {
      this.button = [
        {
          name: 'Edit Profil',
          action: 'form',
        },
        {
          name: 'View Message',
          action: 'message',
        },
        {
          name: 'Followers',
          action: 'show',
        },
      ];
    } else {
      this.button = [
        {
          name: 'Add to friend',
          action: 'add',
        },
        {
          name: 'Message',
          action: 'message',
        },
        {
          name: 'Follow',
          action: 'show',
        },
      ];
    }
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
  sendImage() {}
}
