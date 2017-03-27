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
export interface Passenger {
  id: number;
  
}
export class AppComponent {
  passengers: Passenger[] {

  }
  constructor() {
  }
}
