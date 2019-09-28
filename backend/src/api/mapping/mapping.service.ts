import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mapping } from './mapping.entity';
import {Marker} from '../marker/marker.entity';

@Injectable()
export class MappingService {
    constructor(@InjectRepository(Mapping) private markerRepository: Repository<Mapping>) { }

    async getMappingOnId(mappingData: Marker): Promise<Mapping[]> {
        return await this.markerRepository.find({
            relations: ["from", "to"],
            where: [{ "from": mappingData }]
        });
    }

    async saveMapping(mapdData) {
        return await this.markerRepository.save(mapdData).then((response)=>{
            return response;
        });
    }

    async deleteMapping(markerId) {
        return await this.markerRepository.delete(markerId);
    }
}
