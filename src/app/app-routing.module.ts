



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:id', component: CarDetailsComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }