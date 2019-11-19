import { Module } from '@nestjs/common';
import { MarkerService } from './marker.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marker } from './marker.entity';
import { MarkerController } from './marker.controller';
import { MappingService } from '../mapping/mapping.service';
import { Mapping } from '../mapping/mapping.entity';
import { User } from '../user/user.entity';
// import { HistoryService } from '../history/history.service';

@Module({
  imports: [TypeOrmModule.forFeature([Marker]), TypeOrmModule.forFeature([Mapping]), TypeOrmModule.forFeature([User]) ],
  providers: [MarkerService, MappingService],
  controllers: [MarkerController]
})
export class MarkerModule {}
