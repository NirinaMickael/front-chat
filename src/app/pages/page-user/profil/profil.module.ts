import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationsComponent } from './publications/publications.component';
import { PhotoComponent } from './photo/photo.component';



@NgModule({
  declarations: [
    PublicationsComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfilModule { }
