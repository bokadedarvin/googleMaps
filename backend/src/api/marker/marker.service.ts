import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marker } from './marker.entity';
import {getConnection} from "typeorm";
import { response } from 'express';
import { User } from './../user/user.entity';
import {Like} from "typeorm";
import  * as Graph from "node-dijkstra";
import  * as NgGraphPath from "ngraph.graph";
import { MappingService } from '../mapping/mapping.service';
@Injectable()
export class MarkerService {
    routeJson = {};
    wheelchairJson = {};
    allMarkerData = [];
    constructor(@InjectRepository(Marker) private markerRepository: Repository<Marker>,@InjectRepository(User) private usersRepository: Repository<User>, private mappingService: MappingService) {
        this.routeJson = this.getAllList(false);
        this.wheelchairJson = this.getAllList(true);
    }

    async getMarkerList(): Promise<Marker[]> {
        return await this.markerRepository.find({
            relations: [ 'Type' ]
        });
    }

    getAllList(WheelChair) {
        let route = {};
        this.markerRepository.find({
            relations: [ 'Type' ],
            where: [{ "WheelChair": WheelChair }]
        }).then((markerResponse) => {
            if(markerResponse !== null && markerResponse.length > 0) {
                markerResponse.forEach((response) => {
                   this.allMarkerData[response.name] = response;
                   this.mappingService.getMappingOnId(response).then((mappingResponse) => {
                       const setMappingObj = {}
                       if(mappingResponse !== null && mappingResponse.length > 0) {
                           mappingResponse.forEach((eachResponseObj) => {
                               const mappingToObj = eachResponseObj.to;
                               setMappingObj[mappingToObj.name] = eachResponseObj.pathCost;
                           });
                           route[response.name] = setMappingObj;
                       }
                   });
               });
            }
        });
        return route;
    }

    async getAdminDashboard(): Promise<any> {
        let markerList = {};
        let userList = {};
        markerList = await this.markerRepository.findAndCount({
            relations: [ 'Type' ]
        });
        userList = await this.usersRepository.findAndCount();
        let dashboardData = {
            'markers':markerList,
            'users':userList,
        }
        return dashboardData;
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
        let routeGraph;
        if(!searchedData.WheelChair) {
            routeGraph = new Graph(this.routeJson);
        } else {
            routeGraph = new Graph(this.wheelchairJson);
        }
        const pathRoute = routeGraph.path(searchedData.from, searchedData.to);
        let pathToRoute = [];
        if(pathRoute !== null && pathRoute.length > 0) {
            await pathRoute.forEach((routeObj, index)=>{
                const getMarkerData = this.allMarkerData[routeObj];
                getMarkerData['position'] = index;
                pathToRoute.push(getMarkerData);
            })
        }
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
