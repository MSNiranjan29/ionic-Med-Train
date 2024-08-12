import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAnAccountPage } from './create-an-account.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAnAccountPage
  },
  {
    path: 'search-result',
    loadChildren:()=> import('../search-result/search-result-routing.module').then(m => m.SearchResultPageRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAnAccountPageRoutingModule {}
