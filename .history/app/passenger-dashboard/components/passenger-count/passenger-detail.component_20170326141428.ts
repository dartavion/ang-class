import { Component, Input } from '@angular/core';
import { Passenger } from "../../models/passengers.interface";

@Component({
  selector: 'passenger-detail',
  template: `
    <div>
      <span
        class="status"
        [class.checked-in]="detail.checkedIn">
      </span>
      {{ passenger.fullName }}
      <div class="date">
        Check in date:
        {{ detail.checkedInDate ? (detail.checkedInDate | date: 'yMMMMd') : 0}}
      </div>
      <div class="children">
        Children: {{ detail.children?.length || 0 }}
      </div>
    </div>
  `
})
export class PassengerDetailComponent {
  @Input()

  constructor() { }
}