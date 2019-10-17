import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History } from './history.entity';

@Injectable()
export class HistoryService {
    constructor(@InjectRepository(History) private historyRepository: Repository<History>) { }

    async saveHistory(historyData) {
        return await this.historyRepository.save(historyData).then((response)=>{
            return response;
        });
    }
}
