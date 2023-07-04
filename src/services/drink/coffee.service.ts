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
} from '../../dtos/drink/create-coffee.dto';
import {
    UpdateCoffeeDto
} from '../../dtos/drink/update-coffee.dto';
import {
    Coffee,
    CoffeeDocument
} from '../../models/drink/coffee.schema';

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

    }

    async update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise < CoffeeDocument > {
        return this.coffeeModel.findByIdAndUpdate(id, updateCoffeeDto);
    }

    async remove(id: string) {
        return this.coffeeModel.findByIdAndRemove(id);
    }
}