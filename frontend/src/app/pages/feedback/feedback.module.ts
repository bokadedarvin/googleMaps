import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FeedbackPage } from './feedback.page';
import { AgmCoreModule } from '@agm/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { IonicRatingModule } from 'ionic4-rating';

const routes: Routes = [
  {
    path: '',
    component: FeedbackPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgmCoreModule,
    IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeedbackPage],
  providers: [FeedbackService],
})
export class FeedbackPageModule {}
