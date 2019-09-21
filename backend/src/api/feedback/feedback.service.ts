import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './feedback.entity';

@Injectable()
export class FeedbackService {
    constructor(@InjectRepository(Feedback) private feedbackRepository: Repository<Feedback>) { }

    async addFeedback(feedbackdData) {
        return await this.feedbackRepository.save(feedbackdData).then((response)=>{
            return response;
        });
    }
}
