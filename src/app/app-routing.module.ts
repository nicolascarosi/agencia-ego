import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './sections/home/home.component';
import { DataSheetComponent } from './sections/data-sheet/data-sheet.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ficha-tecnica', component: DataSheetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
