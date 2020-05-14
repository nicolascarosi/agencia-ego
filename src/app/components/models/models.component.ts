import { Component, OnInit } from '@angular/core';
import CarsJson from '../../mock/cars.json';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.less']
})
export class ModelsComponent implements OnInit {

  cars: any = CarsJson;
  filteredCars: any = CarsJson;
  selectedCategory: string = "todos";

  constructor(
    private _filterService: FilterService
  ) { }

  ngOnInit(): void {
    this._filterService.filterByCategory.subscribe(param => {
      this.filterByCategory(param);
    });
    this._filterService.filterByOrder.subscribe(param => {
      this.filterByOrder(param);
    });
  }

  filterByCategory = (param: string) => {
    if (param === "todos") {
      this.filteredCars = this.cars;
    }
    else {
      this.filteredCars = this.cars.filter((element) => {
        return element.category.toLowerCase().indexOf(param.toLowerCase()) !== -1;
      })
    }
    this.selectedCategory = param;
  }

  filterByOrder = (param: string) => {
    switch (param) {
      case "menor a mayor":
        this.filteredCars.sort((a,b)=>a.price-b.price);
        break;
      case "mayor a menor":
        this.filteredCars.sort((a,b)=>b.price-a.price);
        break;
      case "nuevos":
        this.filteredCars.sort((a,b)=>b.model_year-a.model_year);
        break;
      case "viejos":
        this.filteredCars.sort((a,b)=>a.model_year-b.model_year);
        break;
      case "nada":
        this.filteredCars = this.cars;
        this.filterByCategory(this.selectedCategory);
        break;
    }
  }

}
