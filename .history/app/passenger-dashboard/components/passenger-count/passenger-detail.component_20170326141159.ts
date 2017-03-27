import { Component, Input } from '@angular/core';
import { Passenger } from "../../models/passengers.interface";

@Component({
  selector: 'passenger-detail',
  template: `
    <div>
      <span
        class="status"
        [class.checked-in]="passenger.checkedIn">
      </span>
        {{ i }}: {{ passenger.fullName }}
        <div class="date">
          Check in date:
          {{ passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMMMd') : 0}}
        </div>
              <div class="children">
                Children: {{ passenger.children?.length || 0 }}
              </div>
    </div>
  `
})
export class PassengerDetailComponent {
  

  constructor() { }
}