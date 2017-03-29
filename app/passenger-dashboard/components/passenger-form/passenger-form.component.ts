import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Passenger } from "../../models/passengers.interface";
import { Baggage } from "../../models/baggage.interface";

@Component({
  selector: 'passenger-form',
  styleUrls: ['./passenger-form.component.scss'],
  template: `
    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
    
      <div>
        Passenger name:
        <input
          type="text"
          name="fullName"
          #fullName="ngModel"
          required
          [ngModel]="detail?.fullName">
      </div>
      <div class="error" *ngIf="fullName.errors?.required && fullName.dirty">
        Passenger name is required
      </div>
      <div>
        Passenger ID:
        <input
          type="number"
          name="id"
          required
          #id="ngModel"
          [ngModel]="detail?.id">
      </div>
      <div class="error" *ngIf="id.errors?.required && id.dirty">
        Passenger id is required
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)">
        </label>
      </div>

      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input
          type="number"
          name="checkedInDate"
          [ngModel]="detail?.checkedInDate">
      </div>

      <div>
        Luggage: 
        <select
          name="baggage"
          [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage">
            {{ item.value }}
          </option>
        </select>
      </div>
      
      <button type="submit"
        [disabled]="form.invalid">
        Update Passenger
      </button>
    </form>
  `
})

export class PassengerFormComponent implements OnInit {
  @Input()
  detail: Passenger;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>()

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No Baggage'
  },
  {
    key: 'hand-only',
    value: 'Hand Baggage'
  },
  {
    key: 'hold-only',
    value: 'Hold Baggage'
  },
  {
    key: 'hand-hold',
    value: 'Hand and Hold Baggage'
  }]
  constructor() { }

  ngOnInit() { }

  toggleCheckIn(checkedIn: boolean) {
    if(checkedIn) {
      this.detail.checkedInDate = Date.now();
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if(isValid) {
      this.update.emit(passenger);
    }
  }
}