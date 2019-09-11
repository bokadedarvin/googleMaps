import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RoleService } from '../role/role.service';
import { Role } from '../role/role.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>, private roleService: RoleService) { }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.usersRepository.find({
            select: ["firstName", "lastName", "email", "isActive"],
            where: [{ "id": _id }]
        });
    }

    async createUser(user: User) {
        let userResponse = await this.getUserRole('customer');
        user.Role = Object.assign(new Role(), userResponse);
        return await this.usersRepository.save(user);
    }

    async createAdminUser(user: User) {
        let userResponse = await this.getUserRole('admin');
        user.Role = Object.assign(new Role(), userResponse);
        return await this.usersRepository.save(user);
    }

    async updateUser(user: User) {
        return await this.usersRepository.update(user.id, user);
    }

    async deleteUser(userId) {
        return await this.usersRepository.delete(userId);
    }

    async loginUser(user: User) {
        return await this.usersRepository.find({
            relations: [ 'Role' ],
            select: ["firstName", "lastName", "email", "isActive"],
            where: [{ "email": user.email , 'password': user.password }]
        });
    }

    getUserRole(role: string) {
        return this.roleService.getRole(role).then((roleIndex) => {
            return roleIndex[0];
        }).catch(error => console.log(error));
    }
}
