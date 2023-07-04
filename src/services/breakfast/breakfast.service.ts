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
    CreateBreakfastDto
} from '../../dtos/breakfast/create-breakfast.dto';
import {
    UpdateBreakfastDto
} from '../../dtos/breakfast/update-breakfast.dto';
import {
    Breakfast,
    BreakfastDocument
} from '../../models/breakfast/breakfast.schema';

@Injectable()
export class BreakfastService {

    constructor(@InjectModel(Breakfast.name) private readonly breakfastModel: Model < BreakfastDocument > ) {}

    async create(createBreakfastDto: CreateBreakfastDto): Promise < BreakfastDocument > {
        const Breakfast = new this.breakfastModel(createBreakfastDto);
        return Breakfast.save();
    }

    async findAll(): Promise < BreakfastDocument[] > {
        return this.breakfastModel.find()
            .exec();
    }

    async findOne(id: string) {
        return this.breakfastModel.findById(id);
    }

    async update(id: string, updateBreakfastDto: UpdateBreakfastDto): Promise < BreakfastDocument > {
        return this.breakfastModel.findByIdAndUpdate(id, updateBreakfastDto);
    }

    async remove(id: string) {
        return this.breakfastModel.findByIdAndRemove(id);
    }
}