import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AccountDocument, Account } from './schema/listingsAndReviews.schema';

@Injectable()
export class AppService {
    // getData(): any {
    //     return {
    //         message: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    // A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    // bred for hunting.` };
    // }

    constructor(@InjectModel(Account.name) private listingsAndReviewModel: Model<AccountDocument>) {}

    async getData(): Promise<Account[]> {
        return this.listingsAndReviewModel.find().exec();
      }
}
