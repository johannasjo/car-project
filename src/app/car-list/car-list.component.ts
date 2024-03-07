import { Component, OnInit } from '@angular/core';
import { Car } from '../car.interface';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

    cars: Car[] = []; 
  
    constructor(private carService: CarService) {}
  
    ngOnInit(): void {
      this.loadCars()
    }
  
    loadCars(): void {
      this.carService.getCars().subscribe(cars => {
        this.cars = cars;
        console.log(this.cars)
      });
    }
  
  

}
