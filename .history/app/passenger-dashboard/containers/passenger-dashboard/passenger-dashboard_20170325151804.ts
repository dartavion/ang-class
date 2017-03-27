@import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['./passenger-dashboard.component.css'],
    template: `
        <div>
            <h3>Airline Passengers</h3>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index">
                    <span
                        class="status"
                        [class.checked-in="passenger.checkedIn"></span>
                    {{ i }}: {{ passenger.fullName }}
                    <div class="date">
                        Check in date:
                </li>
            </ul>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}