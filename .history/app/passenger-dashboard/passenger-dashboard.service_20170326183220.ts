import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Passenger } from "./models/passengers.interface";

const PASSENGER_API = './api/passengers'

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Passenger[] {
    return this.http.get()
  }
}