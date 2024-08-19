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
    loadChildren: () => import('./template/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./template/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./template/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./template/contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    path: 'create-an-account',
    loadChildren: () => import('./template/create-an-account/create-an-account.module').then(m => m.CreateAnAccountPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./template/forgot/forgot.module').then(m => m.ForgotPageModule)
  }, 
  {
    path: 'search-result',
    loadChildren: () => import('./template/search-result/search-result.module').then(m => m.SearchResultPageModule)
  },
  {
    path: 'search-details',
    loadChildren: () => import('./template/search-details/search-details.module').then(m => m.SearchDetailsPageModule)
  },
  {
    path: 'create-an-account1',
    loadChildren: () => import('./template/create-an-account1/create-an-account1.module').then(m => m.CreateAnAccount1PageModule)
  },
  {
    path: 'country-code-modal',
    loadChildren: () => import('./template/country-code-modal/country-code-modal.module').then(m => m.CountryCodeModalPageModule)
  },
  {
    path: 'bookmark',
    loadChildren: () => import('./template/bookmark/bookmark.module').then(m => m.BookmarkPageModule)
  },
  {
    path: 'archived-courses',
    loadChildren: () => import('./template/archived-courses/archived-courses.module').then(m => m.ArchivedCoursesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
