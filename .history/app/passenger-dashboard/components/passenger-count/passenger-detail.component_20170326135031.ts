import { Component, OnInit } from '@angular/core';
import { Passenger } from "../../models/passengers.interface";

@Component({
  selector: 'passenger-detail',
  template: `
    <div>
      Detail Component
    </div>
  `
})
export class PassengerDetailComponent implements OnInit {
  items: Passenger[];
  constructor() { }

  ngOnInit() { }
}