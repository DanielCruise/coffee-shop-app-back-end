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
import {filter} from "rxjs";

@Injectable()
export class CoffeeService {

    constructor(@InjectModel(Coffee.name) private readonly coffeeModel: Model < CoffeeDocument > ) {}

    async create(createCoffeeDto: CreateCoffeeDto): Promise < CoffeeDocument > {
        const Coffee = new this.coffeeModel(createCoffeeDto);
        return Coffee.save();
    }

    async findAll(): Promise < CoffeeDocument[] > {
        return this.coffeeModel.find()
            .exec();
    }

    async findOne(id: string) {
        return this.coffeeModel.findById(id);
    }

    async findBySize(size: string) {
        return this.coffeeModel.find({size: size})
    }

    async update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise < CoffeeDocument > {
        return this.coffeeModel.findByIdAndUpdate(id, updateCoffeeDto);
    }

    async remove(id: string) {
        return this.coffeeModel.findByIdAndRemove(id);
    }
}