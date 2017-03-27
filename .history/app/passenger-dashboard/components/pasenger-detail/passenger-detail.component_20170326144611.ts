import { Component, Input, Output, EventEmitter } from '@angular/core';
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
      
      <div *ngIf="editing">
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
      <button (click)="toggleEdit()">
        {{ editing ? 'Done' : 'Edit'}}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;

  @Output()
  remove: EventEmitter<any> = new EventEmitter()

  editing: boolean = false;

  constructor() { }

  onNameChange(value: string) {
    this.detail.fullName = value;
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  onRemove() {

  }
  
}