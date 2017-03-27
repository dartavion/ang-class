import { Component } from '@angular/core';

export interface Child {
  name: string
}

export interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
  checkedInDate: any;
  children: number | null;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <passenger-dashboard></passenger-dashboard>
  </div>
  `
})

export class AppComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullName: 'Macy, Ted',
      checkedIn: true,
      checkedInDate: new Date(),
      children: null
    },
    {
      id: 2,
      fullName: 'Monday, Betty',
      checkedIn: true,
      checkedInDate: new Date(),
      children: [{name: 'ted', age: 12}]
    }
  ]
  constructor() {
  }
}
