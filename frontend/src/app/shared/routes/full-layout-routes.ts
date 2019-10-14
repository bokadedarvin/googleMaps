import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from 'src/app/layout/full-layout/full-layout.component';

export const FullLayoutRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../../pages/register/register.module').then(m => m.RegisterPageModule)
  }
];