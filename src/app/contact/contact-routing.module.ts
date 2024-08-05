import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactPage } from './contact.page';

const routes: Routes = [
  {
    path: '',
    component: ContactPage
  },
  {
    path: 'create-an-account',
    loadChildren: () => import('../create-an-account/create-an-account.module').then(m => m.CreateAnAccountPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('../forgot/forgot.module').then(m => m.ForgotPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactPageRoutingModule {}
