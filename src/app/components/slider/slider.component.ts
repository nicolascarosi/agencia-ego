import { Component } from '@angular/core';
import sliderData from "../../mock/slider-data.json";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})

export class SliderComponent  {

  data: any = sliderData;
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    prevArrow: "<button type='button' class='slick-prev icon-arrow-2 arrow-left' id='btn_banner_home_previous'><img src='/assets/images/arrow.svg' /></button>",
    nextArrow: "<button type='button' class='slick-next icon-arrow-2 arrow-right' id='btn_banner_home_next'><img src='/assets/images/arrow.svg' /></button>",
    dots: true,
    centerMode: true,
    // centerPadding: '20px',
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
          prevArrow: "<button type='button' class='slick-prev icon-arrow-2 arrow-left' id='btn_banner_home_previous'><img src='/assets/images/arrow.svg' /></button>",
          nextArrow: "<button type='button' class='slick-next icon-arrow-2 arrow-right' id='btn_banner_home_next'><img src='/assets/images/arrow.svg' /></button>",
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  };

  constructor() { }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

}
