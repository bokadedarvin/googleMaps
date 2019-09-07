import { Module } from '@nestjs/common';
import { MarkerService } from './marker.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marker } from './marker.entity';
import { MarkerController } from './marker.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Marker]) ],
  providers: [MarkerService],
  controllers: [MarkerController]
})
export class MarkerModule {}
