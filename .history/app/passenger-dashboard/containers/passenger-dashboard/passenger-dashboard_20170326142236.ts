import { Component, OnInit } from '@angular/core';
import { Passenger } from "../../models/passengers.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['./passenger-dashboard.component.scss'],
  template: `
      <div>
        <passenger-count
          [items]="passengers">
        </passenger-count>
        
        <passenger-detail
          *ngFor="let passenger of passengers;"
          [detail]="passenger">
        </passenger-detail>
      </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[]
  constructor() { }

  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        fullName: 'Macy, Ted',
        checkedIn: true,
        checkedInDate: 1490471118411,
        children: null
      },
      {
        id: 2,
        fullName: 'Monday, Betty',
        checkedIn: true,
        checkedInDate: 1490471096107,
        children: [{ name: 'ted', age: 12 }]
      }
    ]
  }
}