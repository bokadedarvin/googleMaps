import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { HistoryService } from './history.service';
import { History } from './history.entity';

@Controller('history')
export class HistoryController {
    constructor(private service: HistoryService) { }

    @Post('submitHistory')
    async submitHistory(@Body() historyData:History) {
        return this.service.saveHistory(historyData);
    }
}