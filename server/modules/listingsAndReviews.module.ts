import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './../app.controller';
import { AppService } from './../app.service';
import {Account, AccountSchema } from './../schema/listingsAndReviews.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }], 'cats')
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class ListingsAndReviewModule { }
