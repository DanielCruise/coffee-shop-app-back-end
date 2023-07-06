import {
    Injectable
} from '@nestjs/common';
import {
    InjectModel
} from '@nestjs/mongoose';
import {
    Model
} from 'mongoose';
import {
    CreateCoffeeDto
} from '../../../dtos/pricing/drink/create-coffee.dto';
import {
    UpdateCoffeeDto
} from '../../../dtos/pricing/drink/update-coffee.dto';
import {
    Coffee,
    CoffeeDocument
} from '../../../models/pricing/drink/coffee.schema';

import pricing from '../../../const/pricing.json';

@Injectable()
export class CoffeeService {

    constructor(@InjectModel(Coffee.name) private readonly coffeeModel: Model<CoffeeDocument>) {
    }

    async create(createCoffeeDto: CreateCoffeeDto): Promise<CoffeeDocument> {
        const Coffee = new this.coffeeModel(createCoffeeDto);
        return Coffee.save();
    }

    async findAll(): Promise<CoffeeDocument[]> {
        return this.coffeeModel.find()
            .exec();
    }

    async pricingByItem(id: string) {
        let price = 0;
        const coffee = await this.coffeeModel.findById(id);
        price += pricing.drink.coffee.basePrice;
        price += pricing.drink.coffee.type[coffee.type];
        price += pricing.drink.coffee.size[coffee.size];
        price += pricing.drink.topping.milk[coffee.milk];
        price += pricing.drink.topping.chocolatePump[coffee.chocolateSauce];
        if (coffee.whippedCreamTopping === true) price += pricing.drink.topping.whippedCreamTopping
        price *= coffee.quantity
        return {item: coffee, price: price};
    }

    async findBySize(size: string) {
        return this.coffeeModel.find({size: size})
    }

    async update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise<CoffeeDocument> {
        return this.coffeeModel.findByIdAndUpdate(id, updateCoffeeDto);
    }

    async remove(id: string) {
        return this.coffeeModel.findByIdAndRemove(id);
    }
}