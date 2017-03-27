import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Passenger } from "./models/passengers.interface";
import { Observable } from "rxjs/Observable";

const PASSENGER_API = './api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http
    .get(PASSENGER_API).map(() => );
  }
}