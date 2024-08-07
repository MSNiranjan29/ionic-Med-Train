import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { IonicModule } from '@ionic/angular';

import { CreateAnAccount1PageRoutingModule } from './create-an-account1-routing.module';
import { CreateAnAccount1Page } from './create-an-account1.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    IonicModule,
    CreateAnAccount1PageRoutingModule
  ],
  declarations: [CreateAnAccount1Page]
})
export class CreateAnAccount1PageModule {}
