import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: []
  template: `
  <div>
    {{ title }}
  </div>
  `
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Ultimate Angular';
  }
}
