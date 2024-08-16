import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchivedCoursesPageRoutingModule } from './archived-courses-routing.module';

import { ArchivedCoursesPage } from './archived-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchivedCoursesPageRoutingModule
  ],
  declarations: [ArchivedCoursesPage]
})
export class ArchivedCoursesPageModule {}
