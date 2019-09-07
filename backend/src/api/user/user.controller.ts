
import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private service: UserService) { }

    @Get(':id')
    async get(@Param() params) {
        return this.service.getUser(params.id);
    }

    // @Get()
    // async all() {
    //     return this.service.getUsers();
    // }

    @Post('create')
    async create(@Body() user: User) {
        return await this.service.createUser(user).then((response)=>{
            return response;
        }).catch(error => console.log(error));
    }
    
    @Post('createAdmin')
    async createAdmin(@Body() user: User) {
        return this.service.createAdminUser(user);
    }

    @Put('update')
    async update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    async deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }

    @Post('login')
    async loginUser(@Body() user: User) {
        return this.service.loginUser(user);
    }
}
