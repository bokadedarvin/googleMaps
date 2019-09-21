import { Module } from '@nestjs/common';
import { MappingService } from './mapping.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mapping } from './mapping.entity';
import { MappingController } from './mapping.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Mapping]) ],
  providers: [MappingService],
  controllers: [MappingController]
})
export class MappingModule {}
