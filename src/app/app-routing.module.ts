import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'create-an-account',
    loadChildren: () => import('./create-an-account/create-an-account.module').then( m => m.CreateAnAccountPageModule)
  },
  
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  }, 
  {
    path: 'search-result',
    loadChildren: () => import('./search-result/search-result.module').then( m => m.SearchResultPageModule)
  },
  {
    path: 'search-details',
    loadChildren: () => import('./search-details/search-details.module').then( m => m.SearchDetailsPageModule)
  }

 ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
