import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'passenger-detail',
  template: `
    <div>
      Detail Component
    </div>
  `
})
export class PassengerDetailComponent implements OnInit {
  items: Passenger
  constructor() { }

  ngOnInit() { }
}