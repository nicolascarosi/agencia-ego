import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';
import { DataSheetMainComponent } from './components/data-sheet-main/data-sheet-main.component';
import { SliderComponent } from './components/slider/slider.component';
import { DataSheetDescriptionComponent } from './components/data-sheet-description/data-sheet-description.component';
import { ModelsComponent } from './components/models/models.component';
import { DataSheetComponent } from './sections/data-sheet/data-sheet.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { FilterService } from './services/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    FilterComponent,
    DataSheetMainComponent,
    SliderComponent,
    DataSheetDescriptionComponent,
    ModelsComponent,
    DataSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
