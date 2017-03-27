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
          *ngFor="let passenger or passengers;"
          [detail]="passenger">
        </passenger-detail>
        <ul>
          <li *ngFor="let passenger of passengers; let i = index">
              <span
                  class="status"
                  [class.checked-in]="passenger.checkedIn"></span>
                {{ i }}: {{ passenger.fullName }}
              <div class="date">
                Check in date:
                {{ passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMMMd') : 0}}
              </div>
              <div class="children">
                Children: {{ passenger.children?.length || 0 }}
              </div>
            </li>
        </ul>
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