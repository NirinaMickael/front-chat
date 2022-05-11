import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { SearchComponent } from './pages/search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports : [
    HeaderComponent,
    SearchComponent
  ]
})
export class SharedModule { }
