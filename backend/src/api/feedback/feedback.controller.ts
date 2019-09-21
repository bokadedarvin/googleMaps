
import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback.entity';

@Controller('feedback')
export class FeedbackController {
    constructor(private service: FeedbackService) { }

    @Post('submitFeedback')
    async submitFeedback(@Body() feedbackData:Feedback) {
        return this.service.addFeedback(feedbackData);
    }
}
