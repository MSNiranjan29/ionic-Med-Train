import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// Remove the import of AccountComponent here
// import { AccountComponent } from './account.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [] // Remove AccountComponent from declarations
})
export class AccountModule {}
