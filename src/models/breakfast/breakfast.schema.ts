import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type BreakfastDocument = Breakfast & Document;
@Schema()
export class Breakfast {
    @Prop({required:true})
    type: string;
    @Prop({required:true})
    topping: string;
    @Prop({required:true})
    quantity: number;
}
export const BreakfastSchema = SchemaFactory.createForClass(Breakfast)