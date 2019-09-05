import { Module } from '@nestjs/common';
import { MarkerService } from './marker.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarkerController } from './marker.controller';

@Module({
  providers: [MarkerService],
  controllers: [MarkerController]
})
export class MarkerModule {}
