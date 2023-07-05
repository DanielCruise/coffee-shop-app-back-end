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
    CoffeeService
} from '../../../services/pricing/drink/coffee.service';
import {
    CreateCoffeeDto
} from '../../../dtos/pricing/drink/create-coffee.dto';
import {
    UpdateCoffeeDto
} from '../../../dtos/pricing/drink/update-coffee.dto';

@Controller('coffee')
export class CoffeeController {
    constructor(private readonly coffeeService: CoffeeService) {}

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeeService.create(createCoffeeDto);
    }

    @Get()
    findAll() {
        return this.coffeeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.coffeeService.findOne(id);
    }

    @Get('findBySize/:size')
    findBySize(@Param('size') size: string) {
        return this.coffeeService.findBySize(size)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeeService.remove(id);
    }
}