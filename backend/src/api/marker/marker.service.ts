import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marker } from './marker.entity';
import {getConnection} from "typeorm";
import { response } from 'express';
import {Like} from "typeorm";
import  * as Graph from "node-dijkstra";
import { MappingService } from '../mapping/mapping.service';
@Injectable()
export class MarkerService {
    routeJson = {};
    allMarkerData = [];
    constructor(@InjectRepository(Marker) private markerRepository: Repository<Marker>, private mappingService: MappingService) {
        this.markerRepository.find({
            relations: [ 'Type' ]
        }).then((markerResponse) => {
             markerResponse.forEach((response) => {
                this.allMarkerData[response.name] = response;
                this.mappingService.getMappingOnId(response).then((mappingResponse) => {
                    const setMappingObj = {}
                    mappingResponse.forEach((eachResponseObj) => {
                        const mappingToObj = eachResponseObj.to;
                        setMappingObj[mappingToObj.name] = eachResponseObj.pathCost;
                    });
                    this.routeJson[response.name] = setMappingObj;
                });
            });
        });
     }

    async getMarkerList(): Promise<Marker[]> {
        return await this.markerRepository.find({
            relations: [ 'Type' ]
        });
    }
    
    async searchMarkers(searchedKey:[][]) {
        let keyword = searchedKey[0]['keyword'];
        return await this.markerRepository.find({
            name: Like(`%${keyword}%`)
        }).then((response)=>{
            return response;
        });
    }
    
    async getRoute(searchedData) {
        const routeGraph = new Graph(this.routeJson);
        const pathRoute = routeGraph.path(searchedData.from, searchedData.to);
        let pathToRoute = [];
        await pathRoute.forEach((routeObj, index)=>{
            const getMarkerData = this.allMarkerData[routeObj];
            getMarkerData['position'] = index;
            pathToRoute.push(getMarkerData);
        })
        return pathToRoute;
    }

    async addMarkers(marker: Array<Marker>) {
        return await this.markerRepository.save(marker);
    }

    async updateMarker(marker: Marker) {
        return await this.markerRepository.update(marker[0].id, marker[0]).then((response)=>{
            return response;
        });
    }

    async deleteMarker(markerId) {
        return await this.markerRepository.delete(markerId);
    }
}
