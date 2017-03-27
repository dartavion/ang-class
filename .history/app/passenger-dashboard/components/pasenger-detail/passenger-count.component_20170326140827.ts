import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from "../../models/passengers.interface";

@Component({
  selector: 'passenger-count',
  template: `
    <div>
      <h3><Airline Passengers</h3>
      <div>
        Totoal Passengers {{ items.length }}
      </div>
    </div>
  `
})
export class PassengerCountComponent implements OnInit {
  @Input()
  items: Passenger[];

  constructor() { }

  ngOnInit() { }
}