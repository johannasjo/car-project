import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Car } from "../car.interface";

@Component({
  selector: "app-car-card",
  templateUrl: "./car-card.component.html",
})
export class CarCardComponent {
  @Input() car: Car = {
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

  constructor(private router: Router) {}

  viewDetails(car: Car): void {
    this.router.navigate(["/cars", car.kod]);
  }
}
