import { Injectable } from '@angular/core';
import { State, Selector } from '@ngxs/store';
import { States } from './../enum';


export interface AppStateModel {
    data: any;

}

@State<AppStateModel>({
    name: States.APPSTATE,
    defaults: {
        data: null,

    },
    children: [

    ]
})
@Injectable()
export class AppState {
    @Selector()
    static getData({ data }: AppStateModel) {
        return data;
    }
}
