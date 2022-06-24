import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { SharedModule } from '../@shared/shared.module';


@NgModule({
  declarations: [
    UserProfilComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    SharedModule,
    SharedModule,
    NgxSpinnerModule
  ]
})
export class ProfilModule { }
