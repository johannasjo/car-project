import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Car } from "../car.interface";
import { CarService } from "../car.service";

@Component({
  selector: "app-car-details",
  templateUrl: "./car-details.component.html",
})
export class CarDetailsComponent implements OnInit {
  carCode: any;
  car: Car = {
    fordonstyp: "",
    kod: "",
    modell: "",
    filskapaddatum: "",
    tillverkningsar: "",
    bransletyp: "",
    justering: "",
    kodforjamforbarmodell: "",
    marke: "",
    nybilspris: "",
    vardeefterschablon: "",
  };

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.carCode = params.get("id");
      if (this.carCode !== null) {
        this.loadCarDetails();
      }
    });
  }

  loadCarDetails(): void {
    this.carService.getFilteredCars({ kod: this.carCode! }).subscribe((car) => {
      this.car = car[0];
    });
  }
}
