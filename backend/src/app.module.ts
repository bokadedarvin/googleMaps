import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModule } from './api/role/role.module';
import { MarkerModule } from './api/marker/marker.module';
import { TypeModule } from './api/type/type.module';
import { MappingModule } from './api/mapping/mapping.module';
import { FeedbackModule } from './api/feedback/feedback.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(),
    RoleModule,
    MarkerModule,
    TypeModule,
    MappingModule,
    FeedbackModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
