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

    @Get('pricingByItem/:id')
    pricingByItem(@Param('id') id: string) {
        return this.coffeeService.pricingByItem(id);
    }

    // @Get('pricingByCart/:orderId')
    // pricingByCart(@Param('orderId') orderId: string) {
    //     return this.coffeeService.pricingByCart(orderId);
    // }

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