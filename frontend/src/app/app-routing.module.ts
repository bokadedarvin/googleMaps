import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonGuardGuard } from './guard/common-guard/common-guard.guard';
import { CommonRoutes } from './shared/routes/common-routes';
import { AppComponent } from './app.component';
import { FullLayoutRoutes } from './shared/routes/full-layout-routes';
import { CommonLayoutComponent } from './layout/common-layout/common-layout.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CommonGuardGuard],
    component: CommonLayoutComponent,
    // data: { title: 'full Views' },
    children: CommonRoutes

  },{
    path: '',
    canActivate: [CommonGuardGuard],
    component: FullLayoutComponent,
    // data: { title: 'full Views' },
    children: FullLayoutRoutes

  },
  // { path: 'modal', loadChildren: './shared/modal/modal.module#ModalPageModule' },
  // { path: 'places-mapping', loadChildren: './pages/places-mapping/places-mapping.module#PlacesMappingPageModule' },
  // { path: 'feedback', loadChildren: './pages/feedback/feedback.module#FeedbackPageModule' },
  // { path: 'faqs', loadChildren: './pages/faqs/faqs.module#FaqsPageModule' },
  // { path: 'user-history', loadChildren: './pages/user-history/user-history.module#UserHistoryPageModule' },

  // { path: 'user-dashboard', loadChildren: './pages/user-dashboard/user-dashboard.module#UserDashboardPageModule' },

  // { path: 'places', loadChildren: './pages/places/places.module#PlacesPageModule' },

  // { path: 'route-view', loadChildren: './pages/route-view/route-view.module#RouteViewPageModule' },
  // { path: 'route-create', loadChildren: './pages/route-create/route-create.module#RouteCreatePageModule' },
  // { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  // { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
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
