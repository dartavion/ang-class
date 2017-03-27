import { Component, Input } from '@angular/core';
import { Passenger } from "../../models/passengers.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span
        class="status"
        [class.checked-in]="detail.checkedIn">
      </span>
      
      <div>
        <input 
        type="text" 
        [value]="detail.fullName"
        (input)="onNameChange(name.value)" 
        #name>
      </div>
      {{ detail.fullName }}
      <div class="date">
        Check in date:
        {{ detail.checkedInDate ? (detail.checkedInDate | date: 'yMMMMd') : 0}}
      </div>
      <div class="children">
        Children: {{ detail.children?.length || 0 }}
      </div>
      <button (click)="toggleEdit">
      </button>
    </div>
  `
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;
  editing: boolean = false;

  constructor() { }

  onNameChange(value: string) {
    console.log(value);
  }

  toggleEdit() {
    this.editing = !this.editing;
  }
  
}