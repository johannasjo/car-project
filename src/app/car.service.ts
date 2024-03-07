import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiResponse, Car } from './car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'https://skatteverket.entryscape.net/rowstore/dataset/fad86bf9-67e3-4d68-829c-7b9a23bc5e42'

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => response.results)
    );
  }
}
