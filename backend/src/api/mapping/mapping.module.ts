import { Module } from '@nestjs/common';
import { MappingController } from './mapping.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mapping } from './mapping.entity';
import { MappingService } from './mapping.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mapping]) ],
  providers: [MappingService],
  controllers: [MappingController]
})
export class MappingModule {}
