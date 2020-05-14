import { Component } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent {

  constructor(private _filterService: FilterService) { }

  selectedCategory: string = "todos";

  filterByCategory = (param: string) => {
    this.selectedCategory = param;
		this._filterService.filterCarByCategory(param);
  }
  
  filterByOrder = (param: string) => {
		this._filterService.filterCarByOrder(param);
	}

}
