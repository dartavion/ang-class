import { Component, Input } from '@angular/core';
import { Passenger } from "../../models/passengers.interface";

@Component({
  selector: 'passenger-detail',
  template: `
    <div>
      <h3><Airline Passengers</h3>
      <div>
        Totoal Passengers {{ items.length }}
      </div>
    </div>
  `
})
export class PassengerDetailComponent implements OnInit {
  @Input()
  items: Passenger[];

  constructor() { }
}