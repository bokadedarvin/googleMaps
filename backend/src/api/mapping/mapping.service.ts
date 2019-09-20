import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mapping } from './mapping.entity';
import {getConnection} from "typeorm";
import { response } from 'express';
import {Like} from "typeorm";

@Injectable()
export class MappingService {
    constructor(@InjectRepository(Mapping) private markerRepository: Repository<Mapping>) { }

    // async getMarkerList(): Promise<Mapping[]> {
    //     return await this.markerRepository.find({
    //         relations: [ 'Type' ]
    //     });
    // }

    async saveMapping(mapdData) {
        return await this.markerRepository.save(mapdData).then((response)=>{
            return response;
        });
    }
}
