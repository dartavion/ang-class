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
          [detail]="passenger"
          (edit)="handleEdit($event)"
          (remove)="handleRemove($event)">
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

  handleEdit(event: any) {
    
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }
}