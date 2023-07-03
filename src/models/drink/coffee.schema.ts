import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type CoffeeDocument = Coffee & Document;
@Schema()
export class Coffee {
    @Prop({required:true})
    type: string;
    @Prop({required:true})
    size: string;
    @Prop({required:true})
    topping: string;
    @Prop({required: true})
    milk: string;
    @Prop({required: true})
    chocolateSauce: number;
    @Prop({required: true})
    quantity: number;
}
export const CoffeeSchema = SchemaFactory.createForClass(Coffee)