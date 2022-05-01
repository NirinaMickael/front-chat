import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageUserRoutingModule } from './page-user-routing.module';
import { PageUserComponent } from './page-user.component';
import { ProfilModule } from './profil/profil.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PageUserComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PageUserRoutingModule,
    ProfilModule
  ]
})
export class PageUserModule { }
