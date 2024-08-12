import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CreateAnAccountPageRoutingModule } from './create-an-account-routing.module';
import { CreateAnAccountPage } from './create-an-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateAnAccountPageRoutingModule
  ],
  declarations: [CreateAnAccountPage]
})
export class CreateAnAccountPageModule {}
