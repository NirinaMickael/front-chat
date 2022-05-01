import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
const routes: Routes = [
  // {
  //   path:'',redirectTo : 'auth',pathMatch:"full"
  // },
  {
    path : 'auth' , 
    loadChildren : () => import('./pages/auth/auth.module').then(m=>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
