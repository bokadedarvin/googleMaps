
import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { MarkerService } from './marker.service';
import { Marker } from './marker.entity';

@Controller('marker')
export class MarkerController {
    constructor(private service: MarkerService) { }

    @Post('create')
    async create(@Body() marker: Array<Marker>) {
        return await this.service.addMarkers(marker).then((response)=>{
            return response;
        }).catch(error => console.log(error));
    }

    @Post('getRoute')
    async getRoute(@Body() searchData: []) {
        return await this.service.getRoute(searchData).then((response)=>{
            return response;
        }).catch(error => console.log(error));
    }

    @Put('update')
    async update(@Body() marker: Marker) {
        return await this.service.updateMarker(marker).then((response)=>{
            return response;
        }).catch(error => console.log(error));
    }

    @Put('delete')
    async delete(@Body() markerId:string) {
        return await this.service.deleteMarker(markerId['deleteId']).then((response)=>{
            return response;
        }).catch(error => console.log(error));
    }

    @Get('getMarkerList')
    async all() {
        return this.service.getMarkerList();
    }

    @Get('getAdminDashboard')
    async getAdminDashboard() {
        return this.service.getAdminDashboard();
    }

    @Post('search')
    async search(@Body() searchedData) {
        return this.service.searchMarkers(searchedData);
    }
}
