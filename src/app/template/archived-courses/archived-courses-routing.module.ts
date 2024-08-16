import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchivedCoursesPage } from './archived-courses.page';

const routes: Routes = [
  {
    path: '',
    component: ArchivedCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchivedCoursesPageRoutingModule {}
