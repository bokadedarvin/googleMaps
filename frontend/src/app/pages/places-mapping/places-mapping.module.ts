import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlacesMappingPage } from './places-mapping.page';
import { AgmCoreModule } from '@agm/core';
import { MarkerService } from 'src/app/services/marker.service';

const routes: Routes = [
  {
    path: '',
    component: PlacesMappingPage
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
  declarations: [PlacesMappingPage],
  providers: [MarkerService],
})
export class PlacesMappingPageModule {}
