import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouvertureComponent } from './couverture/couverture.component';
import { PublicationsComponent } from './publications/publications.component';



@NgModule({
  declarations: [
    CouvertureComponent,
    PublicationsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfilModule { }
