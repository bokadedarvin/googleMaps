import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonGuardGuard } from './guard/common-guard/common-guard.guard';
import { CommonRoutes } from './shared/routes/common-routes';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CommonGuardGuard],
    component: AppComponent,
    // data: { title: 'full Views' },
    children: CommonRoutes

  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  // },
  // {
  //   path: 'list',
  //   loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
