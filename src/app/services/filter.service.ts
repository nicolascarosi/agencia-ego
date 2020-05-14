import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class FilterService {

    filterByCategory = new EventEmitter<string>();
    filterByOrder = new EventEmitter<string>();

    filterCarByCategory(param: string) {
        this.filterByCategory.emit(param);
    }
    filterCarByOrder(param: string) {
        this.filterByOrder.emit(param);
    }
}