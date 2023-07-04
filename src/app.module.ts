import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeeModule } from './modules/drink/coffee.module';
import {BreakfastModule} from "./modules/breakfast/breakfast.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://thuynguyen:131123Na@cluster0.wnuov.mongodb.net/pricing'),
      CoffeeModule,
      BreakfastModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
