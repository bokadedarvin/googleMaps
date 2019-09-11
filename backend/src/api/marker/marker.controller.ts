
import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { MarkerService } from './marker.service';
import { Marker } from './marker.entity';

@Controller('marker')
export class MarkerController {
    constructor(private service: MarkerService) { }

    @Post('create')
    async create(@Body() marker: Marker) {
        return await this.service.addMarkers(marker).then((response)=>{
            return response;
        }).catch(error => console.log(error));
    }

    @Get('getMarkerList')
    async all() {
        return this.service.getMarkerList();
    }
}
