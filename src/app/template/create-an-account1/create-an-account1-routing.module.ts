import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAnAccount1Page } from './create-an-account1.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAnAccount1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAnAccount1PageRoutingModule {}
