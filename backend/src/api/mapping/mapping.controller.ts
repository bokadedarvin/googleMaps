
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

    @Post('getData')
    async getMapping(@Body() mappingData:any) {
        return this.service.getMappingOnId(mappingData);
    }

    @Put('delete')
    async delete(@Body() mappingId:string) {
        return await this.service.deleteMapping(mappingId['deleteId']).then((response)=>{
            return response;
        }).catch(error => console.log(error));
    }
}
