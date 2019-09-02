import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
    constructor(@InjectRepository(Role) private RolesRepository: Repository<Role>) { }

    async getRoles(): Promise<Role[]> {
        return await this.RolesRepository.find();
    }

    async getRole(roleName: string): Promise<Role[]> {
        return await this.RolesRepository.find({
            select: ["roleName", "isActive", "id"],
            where: [{ "roleName": roleName }]
        });
    }

    async createRole(Role: Role) {
        return await this.RolesRepository.save(Role);
    }

    async updateRole(Role: Role) {
        return await this.RolesRepository.update(Role.id, Role);
    }

    async deleteRole(RoleId) {
        return await this.RolesRepository.delete(RoleId);
    }
}
