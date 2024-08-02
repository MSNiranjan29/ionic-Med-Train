import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./template/splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./template/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./template/loginpage/loginpage.module').then(m => m.LoginpagePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./template/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
