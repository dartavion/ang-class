import { Component, OnInit , Input } from '@angular/core';
import { Passenger } from "../../models/passengers.interface";

@Component({
  selector: 'passenger-detail',
  template: `
    <div>
      <Airline Passengers<
    </div>
  `
})
export class PassengerDetailComponent implements OnInit {
  @Input()
  items: Passenger[];
  constructor() { }

  ngOnInit() { }
}