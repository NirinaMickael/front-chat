import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { UserService } from '../../core/service/user.service';

@Component({
  selector: 'app-header-chat',
  templateUrl: './header-chat.component.html',
  styleUrls: ['./header-chat.component.scss']
})
export class HeaderChatComponent implements OnInit {
  constructor(private _user : UserService , private sanitizer : DomSanitizer) { }
  user !:any;
  imagePath !: SafeResourceUrl;
  isLoad  = false;
  option = {
    responseType : "ArrayBuffer"
  }
  ngOnInit(): void {
    this._user.user$.subscribe(
      data => this.user = data
    )
    setTimeout(()=>{
      this._user.getImage(environment.api+"/api/getImage/"+this.user._id,this.option).subscribe(
        data => {
          this.isLoad = false;
          let objectURL = 'data:image/jpeg;base64,' + data;

         this.imagePath = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        }
      )
    },500)
  }
  sanitize(url : string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

