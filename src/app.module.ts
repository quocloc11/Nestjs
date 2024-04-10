import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://quocloc:quocloc@cluster0.yjmdk8u.mongodb.net/quocloc')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
