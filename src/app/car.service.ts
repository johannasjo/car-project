import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { ApiResponse, Car } from "./car.interface";

@Injectable({
  providedIn: "root",
})
export class CarService {
  private apiUrl =
    "https://skatteverket.entryscape.net/rowstore/dataset/fad86bf9-67e3-4d68-829c-7b9a23bc5e42";

  constructor(private http: HttpClient) {}

  getAllCars(): Observable<Car[]> {
    return this.http
      .get<ApiResponse>(this.apiUrl)
      .pipe(map((response) => response.results));
  }

  getFilteredCars(params: any): Observable<any> {
    let queryParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined && params[key] !== null) {
        queryParams = queryParams.set(key, params[key]);
      }
    });

    queryParams = queryParams.set("_limit", params["_limit"] || "100");
    queryParams = queryParams.set("_offset", params["_offset"] || "0");

    return this.http
      .get<any>(`${this.apiUrl}`, { params: queryParams })
      .pipe(map((response) => response.results));
  }
}
