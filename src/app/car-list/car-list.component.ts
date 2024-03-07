import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Car } from '../car.interface';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  @ViewChild('goToTop', { static: true })
  carsPage!: ElementRef;
  
    cars: Car[] = []; 
    currentPage = 1;
    carsPerPage = 20;
  
    constructor(private carService: CarService) {}
  
    ngOnInit(): void {
      this.loadCars()
    }
  
    loadCars(): void {
      this.carService.getAllCars().subscribe(cars => {
        this.cars = cars;
      });
    }

    getDisplayedCars(): any[] {
      const startIndex = (this.currentPage - 1) * this.carsPerPage;
      return this.cars.slice(startIndex, startIndex + this.carsPerPage);
    }

    getPages(): number[] {
      const pageCount = Math.ceil(this.cars.length / this.carsPerPage);
      return Array.from({ length: pageCount }, (_, index) => index + 1);
    }
    
    changePage(page: number): void {
      this.currentPage = page;
      this.scrollToTop();
    }

    scrollToTop() {
      this.carsPage.nativeElement.scrollIntoView();
    }

}
