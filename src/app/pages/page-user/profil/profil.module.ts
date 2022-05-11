import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { UserProfilComponent } from './user-profil/user-profil.component';


@NgModule({
  declarations: [
    UserProfilComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule
  ]
})
export class ProfilModule { }
