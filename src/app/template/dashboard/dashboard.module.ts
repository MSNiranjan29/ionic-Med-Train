import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, HomeComponent, LibraryComponent, AccountComponent]
})
export class DashboardPageModule {}
