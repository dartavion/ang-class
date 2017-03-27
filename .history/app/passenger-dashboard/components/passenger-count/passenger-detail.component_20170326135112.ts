import { Component, OnInit , Input } from '@angular/core';
import { Passenger } from "../../models/passengers.interface";

@Component({
  selector: 'passenger-detail',
  template: `
    <div>
      <
    </div>
  `
})
export class PassengerDetailComponent implements OnInit {
  @Input()
  items: Passenger[];
  constructor() { }

  ngOnInit() { }
}