import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'passenger-count',
  template: `
    <div>
      Count Component
    </div>
  `
})
export class PassengerCountComponent implements OnInit {
  @Input()
  items: Passenger[];
  
  constructor() { }

  ngOnInit() { }
}