import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const CommonRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('../../pages/list/list.module').then(m => m.ListPageModule)
  }
];