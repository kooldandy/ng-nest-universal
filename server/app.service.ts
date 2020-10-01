import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getData(): any {
        return {
            message: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.` };
    }
}
