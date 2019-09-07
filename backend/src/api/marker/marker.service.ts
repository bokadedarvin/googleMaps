import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marker } from './marker.entity';

@Injectable()
export class MarkerService {
    constructor(@InjectRepository(Marker) private markerRepository: Repository<Marker>) { }

    // async getUsers(): Promise<Marker[]> {
    //     return await this.markerRepository.find();
    // }

    // async getUser(_id: number): Promise<User[]> {
    //     return await this.markerRepository.find({
    //         select: ["firstName", "lastName", "email", "isActive"],
    //         where: [{ "id": _id }]
    //     });
    // }

    async addMarkers(marker: Marker) {
        console.log(marker);
        return await this.markerRepository.save(marker);
    }

    // async createAdminUser(user: User) {
    //     let userResponse = await this.getUserRole('admin');
    //     user.Role = Object.assign(new Role(), userResponse);
    //     return await this.usersRepository.save(user);
    // }

    async updateMarkers(marker: Marker) {
        return await this.markerRepository.update(marker.id, marker);
    }

    async deleteUser(markerId) {
        return await this.markerRepository.delete(markerId);
    }
}
