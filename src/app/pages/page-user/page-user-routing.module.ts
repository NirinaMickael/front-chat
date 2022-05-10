import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUserComponent } from './page-user.component';

const routes: Routes = [
  {
    path : '',
    component:PageUserComponent
  },
  {
    path:'home',
    loadChildren : () => import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'profil',
    loadChildren : () => import ('./profil/profil.module').then(m=>m.ProfilModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageUserRoutingModule { }
