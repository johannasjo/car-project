import { Component, Input } from '@angular/core';
import { Car } from '../car.interface';


@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {
  @Input() car: Car = { fordonstyp: '', kod: '', modell: '', filskapaddatum: '', tillverkningsar: '', bransletyp: '', justering: '', kodforjamforbarmodell: '', marke: '', nybilspris: '', vardeefterschablon: '' }
}
