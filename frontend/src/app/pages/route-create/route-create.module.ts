import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RouteCreatePage } from './route-create.page';
import { AgmCoreModule } from '@agm/core';
import { MarkerService } from 'src/app/services/marker.service';

const routes: Routes = [
  {
    path: '',
    component: RouteCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgmCoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RouteCreatePage],
  providers: [MarkerService],
})
export class RouteCreatePageModule {}
