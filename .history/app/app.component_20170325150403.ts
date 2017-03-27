import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    {{ title }}
    <div>{{ numberOne + numberTwo }}</div>
    <div>{{ isHappy ? ':)' : ':(' }}
  </div>
  `
})
export class AppComponent {
  
  constructor() {
    this.title = 'Ultimate Angular';
  }
}
