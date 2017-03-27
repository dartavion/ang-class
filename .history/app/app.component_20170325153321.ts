import { Component } from '@angular/core';

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
      children: null
    }
  ]
  constructor() {
  }
}
