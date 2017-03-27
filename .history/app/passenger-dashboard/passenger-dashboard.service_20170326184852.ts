import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Passenger } from "./models/passengers.interface";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

const PASSENGER_API = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http
    .get(PASSENGER_API)
    .map((response: Response) => response.json());
  }

  updatePassengers(passenger: Passenger) {
    return this.http
    .get(`${}/${passenger.id}`)
    .map((response: Response) => response.json());
  }
}