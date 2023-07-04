import {
    PartialType
} from '@nestjs/mapped-types';
import {
    CreateBreakfastDto
} from './create-breakfast.dto';

export class UpdateBreakfastDto extends PartialType(CreateBreakfastDto) {}