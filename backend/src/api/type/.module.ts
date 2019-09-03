import { Module } from '@nestjs/common';
import { .\typeController } from './type.controller';
import { .\typeService } from './type.service';

@Module({
  controllers: [.\typeController],
  providers: [.\typeService]
})
export class .\type\Module {}
