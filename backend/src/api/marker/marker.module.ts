import { Module } from '@nestjs/common';
import { MarkerService } from './marker.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marker } from './marker.entity';
import { MarkerController } from './marker.controller';
import { MappingService } from '../mapping/mapping.service';
import { Mapping } from '../mapping/mapping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Marker]), TypeOrmModule.forFeature([Mapping]) ],
  providers: [MarkerService, MappingService],
  controllers: [MarkerController]
})
export class MarkerModule {}
