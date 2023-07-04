import {
    Module
} from '@nestjs/common';
import {
    BreakfastService
} from '../../services/breakfast/breakfast.service';
import {
    BreakfastController
} from '../../controllers/breakfast/breakfast.controller';
import {
    Breakfast,
    BreakfastSchema
} from '../../models/breakfast/breakfast.schema';
import {
    MongooseModule
} from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Breakfast.name,
                schema: BreakfastSchema
            },
        ])
    ],
    controllers: [BreakfastController],
    providers: [BreakfastService]
})
export class BreakfastModule {}