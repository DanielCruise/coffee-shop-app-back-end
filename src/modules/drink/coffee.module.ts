import {
    Module
} from '@nestjs/common';
import {
    CoffeeService
} from '../../services/drink/coffee.service';
import {
    CoffeeController
} from '../../controllers/drink/coffee.controller';
import {
    Coffee,
    CoffeeSchema
} from '../../models/drink/coffee.schema';
import {
    MongooseModule
} from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Coffee.name,
                schema: CoffeeSchema
            },
        ])
    ],
    controllers: [CoffeeController],
    providers: [CoffeeService]
})
export class CoffeeModule {}