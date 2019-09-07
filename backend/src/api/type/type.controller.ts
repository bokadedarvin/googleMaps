
import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { TypeService } from './type.service';
import { Type } from './type.entity';

@Controller('type')
export class TypeController {
    constructor(private service: TypeService) { }

    @Get()
    async get(@Param() params) {
        return this.service.getType();
    }
}
