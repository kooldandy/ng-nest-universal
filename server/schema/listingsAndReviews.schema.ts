import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account {
    @Prop()
    _id: any;

    @Prop()
    account_id: number;

    @Prop()
    limit: number;

    @Prop()
    products: Array<any>;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
