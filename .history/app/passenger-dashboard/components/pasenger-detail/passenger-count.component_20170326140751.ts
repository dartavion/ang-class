import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from "../../models/passengers.interface";

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