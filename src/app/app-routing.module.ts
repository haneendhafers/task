import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { BaseComponent } from './views/layout/base/base.component';

const routes:Routes=[
  { 
    path: '', 
    redirectTo: 'accounts/login', 
    pathMatch: 'full' },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./views/accounts/accounts.module').then((m) => m.AccountsModule),
  },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [{
      path:'pages',
      loadChildren: () =>
      import('./views/pages/pages.module').then((m) => m.PagesModule),
  },
]}]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
