import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './Role.entity';


@Controller('role')
export class RoleController {
    constructor(private service: RoleService) { }

    @Get(':roleName')
    async get(@Param() params) {
        return this.service.getRole(params.roleName);
    }

    @Post('create')
    async create(@Body() Role: Role) {
        return this.service.createRole(Role);
    }

    @Put('update')
    async update(@Body() Role: Role) {
        return this.service.updateRole(Role);
    }

    @Delete(':id')
    async deleteRole(@Param() params) {
        return this.service.deleteRole(params.id);
    }
}
