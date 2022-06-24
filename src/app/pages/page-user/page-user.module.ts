import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageUserRoutingModule } from './page-user-routing.module';
import { PageUserComponent } from './page-user.component';
import { ProfilModule } from './profil/profil.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    PageUserComponent,
  ],
  imports: [
    CommonModule,
    PageUserRoutingModule,
    ProfilModule,
    HomeModule
  ]
})
export class PageUserModule { }
