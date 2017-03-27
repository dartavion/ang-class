import { Component } from '@angular/core';

export interface Child {
  name: string;
  age: number
}

export interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
  checkedInDate: any;
  children: Child[] | null;
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
  
  constructor() {
  }
}
