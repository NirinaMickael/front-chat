import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationsComponent } from './publications/publications.component';
import { PhotoComponent } from './photo/photo.component';
import { SharedModule } from '../@shared/shared.module';



@NgModule({
  declarations: [
    PublicationsComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProfilModule { }
