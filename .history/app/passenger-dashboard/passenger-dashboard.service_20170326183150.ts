import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Passenger } from "./models/passengers.interface";

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Passenger[] {
    return this.http.get()
  }
}