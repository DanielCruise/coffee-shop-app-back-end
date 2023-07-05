import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put
} from '@nestjs/common';
import {
    BreakfastService
} from '../../../services/pricing/breakfast/breakfast.service';
import {
    CreateBreakfastDto
} from '../../../dtos/pricing/breakfast/create-breakfast.dto';
import {
    UpdateBreakfastDto
} from '../../../dtos/pricing/breakfast/update-breakfast.dto';

@Controller('breakfast')
export class BreakfastController {
    constructor(private readonly breakfastService: BreakfastService) {}

    @Post()
    create(@Body() createBreakfastDto: CreateBreakfastDto) {
        return this.breakfastService.create(createBreakfastDto);
    }

    @Get()
    findAll() {
        return this.breakfastService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.breakfastService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateBreakfastDto: UpdateBreakfastDto) {
        return this.breakfastService.update(id, updateBreakfastDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.breakfastService.remove(id);
    }
}