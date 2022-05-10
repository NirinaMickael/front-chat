import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HeaderComponent,
    SearchComponent
  ]
})
export class SharedModule { }
