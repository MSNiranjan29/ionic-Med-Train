import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPage } from './forgot.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPage
  },
  {
    path: 'search-details',
    loadChildren: () => import('../search-details/search-details.module').then(m => m.SearchDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPageRoutingModule {}
