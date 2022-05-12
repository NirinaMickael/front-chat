import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { SearchComponent } from './pages/search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BtnActionComponent } from './pages/btn-action/btn-action.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    BtnActionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports : [
    HeaderComponent,
    SearchComponent,
    BtnActionComponent
  ]
})
export class SharedModule { }
