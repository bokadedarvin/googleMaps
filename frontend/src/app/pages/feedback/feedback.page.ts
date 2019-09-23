import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  providers: [FeedbackService],
})
export class FeedbackPage implements OnInit {
  feedbackForm: FormGroup;

  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      Rate: new FormControl('', [Validators.required]),
      feedback: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 -.,]*$')]),
    });
  }

  submitFeedback() {
    let feedbackData = {
      name: JSON.parse(localStorage.userData)[0].firstName +' '+ JSON.parse(localStorage.userData)[0].lastName,
      email: JSON.parse(localStorage.userData)[0].email,
      description: this.feedbackForm.controls.feedback.value,
      rating: this.feedbackForm.controls.Rate.value
    }
    this.feedbackService.submitFeedback(feedbackData).subscribe((response) => {
      if(response) {
        this.router.navigate(['/home']);
      }
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }

}
