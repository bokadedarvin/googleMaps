import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from 'src/app/layout/common-layout/common-layout.component';

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
    path: 'route-create',
    loadChildren: () => import('../../pages/route-create/route-create.module').then(m => m.RouteCreatePageModule)
  },
  {
    path: 'route-view',
    loadChildren: () => import('../../pages/route-view/route-view.module').then(m => m.RouteViewPageModule)
  }
];