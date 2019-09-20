
import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { MappingService } from './mapping.service';
import { Mapping } from './mapping.entity';

@Controller('mapping')
export class MappingController {
    constructor(private service: MappingService) { }

    @Post('submitMapping')
    async submitMapping(@Body() mapdData:Mapping) {
        return this.service.saveMapping(mapdData);
    }
}
